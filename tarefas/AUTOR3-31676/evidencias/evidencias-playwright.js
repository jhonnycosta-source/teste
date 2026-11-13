// Evidências AUTOR3-31676 — uso: node evidencias-playwright.js <outDir> [depois|antes|sonda]
// Pré-requisito: node mock-server/server.js (8666) + ng serve --configuration=tst --proxy-config proxy-mock.conf.json (4200)
// "antes": rodar com a branch na versão do tst (sem o card).
const { chromium } = require('C:/Users/jhonnyscerni/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(process.argv[2] || '.');
const modo = process.argv[3] || 'depois';
const shotsDir = path.join(outDir, 'prints');
fs.mkdirSync(shotsDir, { recursive: true });

const CARD = 'AUTOR3-31676';
const ID = 'mdH9PBXDT39pJNvv3eEb_Q';
const REPO = 'C:/Users/jhonnyscerni/Documents/workspace/softvaro/angular/auto-cotacao-web';
const MASSA = `${REPO}/src/mocks/ofertas/edicao/ofertas-response.json`;
const MASSA_CC = `${REPO}/src/mocks/cotacao/contratacao-comercial-completo.json`;
const VERSAO = '0';
const ORCAMENTO = 3;
const URL_RESULTADOS = `http://localhost:4200/#/resultados/${ID}/${VERSAO}`;
const ROLE_INTERNO = 'Automovel.NovaPlataforma.Calculo.PerfilInterno';

// cenário corrente: com ou sem prêmio informado
let comPremioInformado = true;

const log = [];
const consoleErrors = [];
const falhas = [];

function massaOfertas() {
  const json = JSON.parse(fs.readFileSync(MASSA, 'utf8'));
  const cot = json.cotacao;
  cot.orcamentos = cot.orcamentos.filter(o => o.codigo !== 1);
  cot.identificadorCotacao = ID;
  cot.orcamentos.forEach(o => {
    o.tipoVigencia = o.tipoVigencia || { codigo: 1 };
    o.identificadorCotacao = ID;
    if (o.codigo === ORCAMENTO) {
      o.congelamento = { motivo: { codigo: 4, descricao: 'Em flexibilização interna' } };
      (o.itens || []).forEach(i => (i.coberturas || []).forEach(c => { c.flagPremioInformado = comPremioInformado; }));
    }
  });
  json.rollouts = [...(json.rollouts || []), { codigoRollout: 130, habilitado: true }];
  return json;
}

function massaContratacaoComercial() {
  const base = JSON.parse(fs.readFileSync(MASSA_CC, 'utf8'));
  const ofertas = massaOfertas().cotacao;
  const orc = JSON.parse(JSON.stringify(ofertas.orcamentos.find(o => o.codigo === ORCAMENTO)));
  const { orcamentos, ...cot } = ofertas;
  // um agravo já concedido pelo analista, para mostrar que continua visível (leitura)
  orc.itens[0].descontos = [...(orc.itens[0].descontos || []), {
    codigoDesconto: 501, descricaoDesconto: 'Agravo de perfil (já aplicado)', percentual: 5, percentualMaximoDescontoAgravo: 20,
    flagEnvioDescontoAgravo: true, flagDescontoFlexibilizado: true, listaTipoVisualizacao: [{ codigo: 6 }],
  }];
  orc.inicioVigencia = '2026-11-13';
  orc.fimVigencia = '2027-11-13';
  orc.tipoVigencia = { codigo: 1, descricao: 'Anual', quantidadeDias: 365 };
  base.cotacao = { ...base.cotacao, ...cot, flagNovaTelaResultados: false, orcamento: orc };
  return base;
}

async function prepararRotas(page) {
  await page.addInitScript(() => { window.VWO = []; window.VWO.event = () => {}; window.VWO.push = () => 0; });
  await page.route(/visualwebsiteoptimizer\.com|googletagmanager\.com|youtube\.com/, route => route.abort());
  await page.route(/\/cotacoes\/[^/]+-\d+\/ofertas(\?|$)/, async route => {
    if (route.request().method() !== 'GET') return route.continue();
    return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(massaOfertas()) });
  });
  await page.route(/\/cotacoes\/[^/]+-\d+\/orcamentos\/\d+\/(contratacaocomercial|personalizacao)\/?(\?|$)/, async route => {
    if (route.request().method() !== 'GET') return route.continue();
    return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(massaContratacaoComercial()) });
  });
  await page.route(/\/ofertas\/[^/]+\/(premio-informado|premios)(\?|$)/, route =>
    route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ mensagens: [] }) }));
  await page.route(/\/seguranca\/papeis-usuario/, route => route.fulfill({
    status: 200, contentType: 'application/json',
    body: JSON.stringify({ id: 'P0111111', sub: 'P0111111', susep: 'P0111111', roles: [ROLE_INTERNO] }),
  }));
  await page.route(/^https:\/\/auto20\.webtst\.portoseguro\.brasil\//, async route => {
    const u = new globalThis.URL(route.request().url());
    if (/\/(premio-informado|premios)(\?|$)|\/(contratacaocomercial|personalizacao)\/?$|\/ofertas$/.test(u.pathname)) return route.fallback();
    const resp = await route.fetch({ url: `http://localhost:4200${u.pathname}${u.search}` });
    if (resp.status() >= 400) falhas.push(`${resp.status()} ${route.request().method()} ${u.pathname}`);
    return route.fulfill({ response: resp });
  });
  const stubs = [
    [/\/flexibilizacao\/vigenciaprevia/, { flagVigenciaPerfil: false, flexibilizacoes: [] }],
    [/\/obterquestionario/, {}],
    [/\/renovacao-programada\/dominio\/justificativas/, []],
    [/\/dominiosAdministrativo\/classe-bonus/, []],
    [/\/authbff\/auth\/mule/, {}],
    [/\/orcamento\/\d+\/item\/\d+\/descontos(\?|$)/, { descontos: [] }],
  ];
  for (const [re, body] of stubs) {
    await page.route(re, route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) }));
  }
}

async function esperarLoading(page) {
  await page.waitForFunction(() => !/Processando|Falta pouco|Aguarde só mais|Carregando|Reunindo/.test(
    (document.querySelector('.cdk-overlay-container') || {}).innerText || ''), null, { timeout: 120000 });
}

async function legenda(page, titulo, detalhe, cor = '#0b5d2a') {
  await page.evaluate(({ card, titulo, detalhe, cor }) => {
    let box = document.getElementById('sdd-evidencia');
    if (!box) {
      box = document.createElement('div');
      box.id = 'sdd-evidencia';
      box.style.cssText = 'position:fixed;top:84px;right:12px;z-index:2147483647;max-width:520px;padding:10px 14px;border-radius:8px;' +
        'font:13px/1.45 Segoe UI,Arial,sans-serif;color:#fff;box-shadow:0 4px 16px rgba(0,0,0,.35);white-space:pre-wrap;pointer-events:none;';
      document.body.appendChild(box);
    }
    box.style.background = cor;
    box.textContent = `${card} · ${titulo}${detalhe ? '\n' + detalhe : ''}`;
  }, { card: CARD, titulo, detalhe, cor });
}

async function limparDestaques(page) {
  await page.evaluate(() => document.querySelectorAll('[data-sdd-destaque]').forEach(el => {
    el.style.outline = ''; el.removeAttribute('data-sdd-destaque');
  }));
}

async function destacar(locator) {
  await locator.evaluate(el => { el.style.outline = '3px solid #ff5a40'; el.style.outlineOffset = '3px'; el.setAttribute('data-sdd-destaque', '1'); });
}

async function print(page, nome, titulo, detalhe, cor) {
  await page.evaluate(() => {
    [...document.querySelectorAll('body *')]
      .filter(e => e.children.length === 0 && /Ocorreu um "ErrorHandler"/.test(e.textContent))
      .forEach(e => { let n = e; while (n && n !== document.body && getComputedStyle(n).position !== 'fixed') n = n.parentElement; (n && n !== document.body ? n : e).style.display = 'none'; });
  });
  await legenda(page, titulo, detalhe, cor);
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(shotsDir, `${nome}.png`) });
  log.push({ nome, titulo, detalhe });
  await limparDestaques(page);
}

async function fixarAnalista(page, seletor) {
  await page.evaluate(({ role, seletor }) => {
    const cmp = window.ng.getComponent(document.querySelector(seletor));
    Object.defineProperty(cmp.userService, 'userRoles', { configurable: true, get: () => [role], set: () => {} });
  }, { role: ROLE_INTERNO, seletor });
}

async function abrirResultados(page) {
  await page.goto(URL_RESULTADOS, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('app-oferta-card-resultados', { timeout: 120000 });
  await fixarAnalista(page, 'app-oferta-card-resultados');
  await page.evaluate(() => { window.location.hash = '#/faq'; });
  await page.waitForTimeout(1500);
  await page.evaluate(h => { window.location.hash = h; }, `#/resultados/${ID}/${VERSAO}`);
  await page.waitForSelector('app-oferta-card-resultados', { timeout: 120000 });
  await esperarLoading(page);
  await page.waitForTimeout(2500);
}

// índice do card do orçamento em flexibilização
async function indiceCard(page) {
  return page.evaluate(orc => [...document.querySelectorAll('app-oferta-card-resultados')]
    .findIndex(el => window.ng.getComponent(el)?.orcamentoState?.codigo === orc), ORCAMENTO);
}

async function abrirOferta(page) {
  await page.evaluate(h => { window.location.hash = h; }, `#/oferta/${ID}/${ORCAMENTO}/${VERSAO}/1`);
  await page.waitForSelector('app-modal-descontos-concedidos', { state: 'attached', timeout: 120000 });
  await esperarLoading(page);
  await page.waitForTimeout(2500);
  // a massa local deixa a oferta em "Recálculo necessário" (o recálculo não existe no mock), o que já inativa a comissão
  // por outro motivo (isInativoCondicoesComerciais); zera esse estado para isolar o efeito do card
  await page.evaluate(() => {
    const cmp = window.ng.getComponent(document.querySelector('app-index'));
    cmp.ofertaStateService.isRecalculoState = false;
    cmp.ofertaStateService.isCalculoModularState = false;
    document.querySelectorAll('fp-toast, .toast, [class*="toast"]').forEach(e => { if (/recalcular/i.test(e.textContent)) e.style.display = 'none'; });
  });
  await page.waitForTimeout(800);
  log.push({ inativoCondicoesComerciais: await page.evaluate(() => {
    const cmp = window.ng.getComponent(document.querySelector('app-index'));
    return { isInativoCondicoesComerciais: cmp.isInativoCondicoesComerciais, recalculo: cmp.isRecalculoNecessario, recusado: cmp.isOrcamentoRecusado,
      link: cmp.disabledCondicoaoComercialLink, vigencia: cmp.dataVigenciaInvalida };
  }) });
}

async function sonda(browser) {
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  const page = await context.newPage();
  page.on('console', m => { if (m.type() === 'error' || /ErrorHandler/.test(m.text())) consoleErrors.push(m.text().slice(0, 300)); });
  page.on('pageerror', e => consoleErrors.push(`pageerror: ${e.message}`));
  page.on('request', r => { if (/contratacao|orcamentos\/\d/i.test(r.url())) log.push({ req: r.method() + ' ' + r.url() }); });
  await prepararRotas(page);
  await abrirResultados(page);
  log.push({ indiceCard: await indiceCard(page) });
  await page.screenshot({ path: path.join(shotsDir, 'sonda-resultados.png') });
  try { await abrirOferta(page); } catch (e) { log.push({ erroOferta: e.message }); }
  log.push({ hash: await page.evaluate(() => location.hash) });
  await page.screenshot({ path: path.join(shotsDir, 'sonda-oferta.png'), fullPage: false });
  log.push({ estadoOferta: await page.evaluate(() => {
    const el = document.querySelector('app-index, app-oferta-index, [ng-version] app-index');
    const cmp = el && window.ng.getComponent(el);
    const orc = cmp?.responseOrcamento?.cotacao?.orcamento;
    return cmp ? { possuiPremioInformado: cmp.possuiPremioInformado, emFlex: cmp.analistaInternoService?.emFlexibilizacaoState,
      codigo: orc?.codigo, congel: orc?.congelamento, itens: orc?.itens?.length,
      flags: (orc?.itens || []).map(i => (i.coberturas || []).map(c => c.flagPremioInformado)),
      descontos: (cmp.objetoOrcamento?.itens?.[0]?.descontos || []).map(d => d.codigoDesconto) } : 'sem componente';
  }) });
  await context.close();
}

async function cardFlex(page) {
  const idx = await indiceCard(page);
  return page.locator('app-oferta-card-resultados').nth(idx);
}

async function abrirModalPagamentos(page) {
  const card = await cardFlex(page);
  // a API de planos de parcelamento não existe no mock-server; com lista vazia o modal abre sem formas de pagamento
  await card.evaluate(el => {
    const modal = window.ng.getComponent(el).modalFormasPagamentosDescontos;
    if (!modal.planosParcelamentos) modal.planosParcelamentos = [];
  });
  const botao = card.locator('#pagamentos-e-descontos');
  await botao.scrollIntoViewIfNeeded();
  await botao.click();
  try {
    await page.waitForSelector('#tabs-forma-de-pagamento-descontos-tab-3', { state: 'attached', timeout: 30000 });
  } catch (e) {
    await page.screenshot({ path: path.join(shotsDir, 'debug-modal-pagamentos.png') });
    log.push({ debugAbas: await page.evaluate(() => ({
      ids: [...document.querySelectorAll('[id^="tabs-forma"]')].map(e => e.id),
      flex: window.ng.getComponent(document.querySelectorAll('app-oferta-card-resultados')[1])?.emFlexibilizacaoRollout,
      roll: window.ng.getComponent(document.querySelectorAll('app-oferta-card-resultados')[1])?.rolloutAnalista,
    })) });
    fs.writeFileSync(path.join(outDir, 'debug.json'), JSON.stringify(log, null, 1));
    throw e;
  }
  await page.waitForTimeout(1500);
}

async function estadoAba(page) {
  return page.evaluate(() => {
    const b = document.querySelector('#tabs-forma-de-pagamento-descontos-tab-3');
    return {
      disabled: b?.disabled, ariaDisabled: b?.getAttribute('aria-disabled'), title: b?.getAttribute('title'),
      opacidade: b && getComputedStyle(b).opacity,
      conteudoDescontosAgravosVisivel: !!document.querySelector('.descontos-agravos.show-descontos-agravos, .descontos-agravos__erro.show-descontos-agravos'),
    };
  });
}

async function fecharModal(page) {
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);
}

function botaoEditarComissao(page) {
  return page.locator('.value-box__row.comissao fp-button.btn-comissao').nth(1).locator('button');
}

async function estadoComissao(page) {
  return page.evaluate(() => {
    const botoes = [...document.querySelectorAll('.value-box__row.comissao fp-button.btn-comissao button')];
    return { icone: !!document.querySelector('#tooltip-comissao-premio-informado'), editarDesabilitado: botoes[1] ? botoes[1].disabled : null };
  });
}

async function textoTooltip(page) {
  return page.evaluate(() => [...document.querySelectorAll('body *')]
    .filter(e => e.children.length === 0 && /Comissão e desconto não podem ser alterados/.test(e.textContent)
      && e.offsetParent !== null && !e.closest('#sdd-evidencia'))
    .map(e => e.textContent.trim())[0] || null);
}

async function abrirModalDescontos(page) {
  // a massa local deixa a oferta em "Recálculo necessário" (o recálculo não existe no mock); sem isso o botão chama o salvar
  await page.evaluate(() => {
    const cmp = window.ng.getComponent(document.querySelector('app-index'));
    cmp.ofertaStateService.isRecalculoState = false;
    cmp.ofertaStateService.isCalculoModularState = false;
  });
  await page.waitForTimeout(500);
  const botao = page.locator('#btnDarDescontoOferta');
  await botao.scrollIntoViewIfNeeded();
  await botao.click();
  const titulo = page.getByText('Descontos adicionais e agravos', { exact: true }).first();
  try {
    await titulo.waitFor({ timeout: 30000 });
  } catch (e) {
    await page.screenshot({ path: path.join(shotsDir, 'debug-modal-descontos.png') });
    fs.writeFileSync(path.join(outDir, 'debug.json'), JSON.stringify(await page.evaluate(() => {
      const cmp = window.ng.getComponent(document.querySelector('app-index'));
      const m = window.ng.getComponent(document.querySelector('app-modal-descontos-concedidos'));
      return { calc: cmp.isCalculoModularNecessario, showAplicacao: cmp.showAplicacao, modalAberto: !!document.querySelector('ngb-modal-window'),
        emFlex: m.emFlexibilizacaoAnalistaInt, analista: m.isAnalistaInterno, module: m.module, bloq: m.bloquearDescontosAgravos };
    }), null, 1));
    throw e;
  }
  await page.waitForTimeout(1200);
  await titulo.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
}

async function estadoSecaoAnalista(page) {
  return page.evaluate(() => {
    const secao = document.querySelector('.backdrop__container__agravo');
    const editar = secao && secao.querySelector('.btn-editar-desconto button');
    return {
      mensagem: secao?.querySelector('#mensagem-descontos-agravos-bloqueados')?.textContent.trim() || null,
      botaoAdicionar: !!secao?.querySelector('#btnAddDescontoAgravo'),
      itens: [...(secao?.querySelectorAll('.titulo-desconto') || [])].map(e => e.textContent.trim()),
      editarDesabilitado: editar ? editar.disabled : null,
    };
  });
}

async function cenario(browser, { prefixo, comPI, rotulo, cor, video }) {
  comPremioInformado = comPI;
  const opts = { viewport: { width: 1366, height: 900 } };
  if (video) opts.recordVideo = { dir: path.join(outDir, 'video'), size: { width: 1366, height: 900 } };
  const context = await browser.newContext(opts);
  const page = await context.newPage();
  const inicio = Date.now();
  page.on('console', m => { if (/ErrorHandler/.test(m.text())) consoleErrors.push(m.text().slice(0, 200)); });
  page.on('pageerror', e => consoleErrors.push(`pageerror: ${e.message}`));
  await prepararRotas(page);
  await abrirResultados(page);
  const inicioUtil = Date.now();
  const r = { rotulo };

  // 1) Resultados > Pagamentos e Descontos
  await abrirModalPagamentos(page);
  r.abaAoAbrir = await estadoAba(page);
  const aba = page.locator('#tabs-forma-de-pagamento-descontos-tab-3');
  await aba.hover({ force: true }).catch(() => {});
  await destacar(aba);
  await print(page, `${prefixo}1-resultados-aba-descontos-agravos`, `${rotulo} · Pagamentos e Descontos (resultados)`,
    `Aba "Adicionar descontos e agravos": ${r.abaAoAbrir.disabled ? 'DESABILITADA' : 'habilitada'}` +
    (r.abaAoAbrir.title ? `\ntitle: "${r.abaAoAbrir.title}"` : ''), cor);
  await aba.click({ force: true, timeout: 3000 }).catch(() => {});
  await page.waitForTimeout(1200);
  r.abaAposClique = await estadoAba(page);
  await destacar(aba);
  await print(page, `${prefixo}2-resultados-clique-na-aba`, `${rotulo} · Clique na aba Descontos e agravos`,
    r.abaAposClique.conteudoDescontosAgravosVisivel ? 'A aba abriu: dá para adicionar desconto/agravo' : 'A aba não abre: continua na aba anterior', cor);
  await fecharModal(page);

  // 2) /oferta > Comissão
  await abrirOferta(page);
  const linha = page.locator('.value-box__row.comissao');
  await linha.scrollIntoViewIfNeeded();
  r.comissao = await estadoComissao(page);
  if (r.comissao.icone) {
    await page.locator('#tooltip-comissao-premio-informado').hover();
    await page.waitForTimeout(800);
    r.tooltipHover = await textoTooltip(page);
  }
  await destacar(linha);
  await print(page, `${prefixo}3-oferta-comissao`, `${rotulo} · /oferta: linha Comissão`,
    `Ícone ⓘ: ${r.comissao.icone ? 'sim' : 'não'} · Editar comissão: ${r.comissao.editarDesabilitado ? 'INATIVO' : 'habilitado'}` +
    (r.tooltipHover ? `\nTooltip (mouse): "${r.tooltipHover}"` : ''), cor);
  if (r.comissao.icone) {
    await page.mouse.move(10, 450);
    await page.waitForTimeout(600);
    await page.locator('#tooltip-comissao-premio-informado').focus();
    await page.waitForTimeout(800);
    r.tooltipFoco = await textoTooltip(page);
    await print(page, `${prefixo}4-oferta-tooltip-teclado`, `${rotulo} · Tooltip pelo teclado (foco)`,
      `Foco no ícone ⓘ → "${r.tooltipFoco}"`, cor);
    await page.locator('#tooltip-comissao-premio-informado').blur();
  }
  if (r.comissao.editarDesabilitado) {
    // clique forçado no editar inativo: nada deve abrir
    await botaoEditarComissao(page).click({ force: true, timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(1500);
    r.modalCondicoesAbriuNoClique = await page.evaluate(() => !!document.querySelector('ngb-modal-window, .modal.show'));
    if (r.modalCondicoesAbriuNoClique) await fecharModal(page);
  }

  // 3) /oferta > Descontos > Descontos adicionais e agravos
  await abrirModalDescontos(page);
  r.secaoAnalista = await estadoSecaoAnalista(page);
  await destacar(page.locator('.backdrop__container__agravo'));
  await print(page, `${prefixo}5-oferta-modal-descontos-agravos`, `${rotulo} · /oferta > Descontos: seção do analista`,
    (r.secaoAnalista.mensagem ? `Mensagem: "${r.secaoAnalista.mensagem}"\n` : '') +
    `Itens aplicados: ${r.secaoAnalista.itens.join(', ') || '—'}\n` +
    `Editar: ${r.secaoAnalista.editarDesabilitado ? 'INATIVO' : 'habilitado'} · Botão "Adicionar": ${r.secaoAnalista.botaoAdicionar ? 'visível' : 'OCULTO'}`, cor);

  const v = page.video();
  await context.close();
  if (v) r.video = { arquivo: await v.path(), cortarSegundos: ((inicioUtil - inicio) / 1000).toFixed(1) };
  return r;
}

async function depois(browser) {
  const comPI = await cenario(browser, { prefixo: '1', comPI: true, rotulo: 'DEPOIS · com prêmio informado', video: true });
  const semPI = await cenario(browser, { prefixo: '2', comPI: false, rotulo: 'DEPOIS · sem prêmio informado (regressão)', cor: '#1f4e8c' });
  return { comPI, semPI };
}

async function antes(browser) {
  return { comPI: await cenario(browser, { prefixo: '0', comPI: true, rotulo: 'ANTES (tst, sem o card) · com prêmio informado', cor: '#8a1c1c' }) };
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/jhonnyscerni/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe',
  });
  let resultado = {};
  if (modo === 'sonda') await sonda(browser);
  else resultado = await (modo === 'antes' ? antes(browser) : depois(browser));
  await browser.close();
  fs.writeFileSync(path.join(outDir, `estado-${modo}.json`), JSON.stringify({ resultado, log, falhas, consoleErrors }, null, 2));
  console.log(JSON.stringify({ resultado, log, falhas, consoleErrors: consoleErrors.slice(0, 15) }, null, 1));
})().catch(e => { console.error('FALHA', e); process.exit(1); });
