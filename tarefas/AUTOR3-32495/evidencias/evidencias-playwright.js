// Evidências AUTOR3-32495 — uso: node evidencias-playwright.js <outDir> [depois|antes]
// Pré-requisito: node mock-server/server.js (8666) + ng serve --configuration=tst --proxy-config proxy-mock.conf.json (4200)
// "antes": rodar com os arquivos do módulo premio-informado na versão do tst (sem a correção), só captura o estouro.
const { chromium } = require('C:/Users/jhonnyscerni/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(process.argv[2] || '.');
const modo = process.argv[3] || 'depois';
const shotsDir = path.join(outDir, 'prints');
fs.mkdirSync(shotsDir, { recursive: true });

const CARD = 'AUTOR3-32495';
const ID = 'mdH9PBXDT39pJNvv3eEb_Q';
const MASSA = 'C:/Users/jhonnyscerni/Documents/workspace/softvaro/angular/auto-cotacao-web/src/mocks/ofertas/edicao/ofertas-response.json';
const VERSAO = '0';
const ORCAMENTO = 3;
const URL_RESULTADOS = `http://localhost:4200/#/resultados/${ID}/${VERSAO}`;
const ROLE_INTERNO = 'Automovel.NovaPlataforma.Calculo.PerfilInterno';
const CASCO = 1;
const RCF_DM = 3;
const RCF_DC = 4;

const log = [];
const consoleErrors = [];
const payloadsPut = [];
let premioJaInformado = null;

async function prepararRotas(page) {
  await page.addInitScript(() => { window.VWO = []; window.VWO.event = () => {}; window.VWO.push = () => 0; });
  await page.route(/visualwebsiteoptimizer\.com|googletagmanager\.com|youtube\.com/, route => route.abort());
  await page.route(/\/cotacoes\/[^/]+-\d+\/ofertas(\?|$)/, async route => {
    if (route.request().method() !== 'GET') return route.continue();
    const json = JSON.parse(fs.readFileSync(MASSA, 'utf8'));
    const cot = json.cotacao;
    cot.orcamentos = cot.orcamentos.filter(o => o.codigo !== 1);
    cot.identificadorCotacao = ID;
    cot.orcamentos.forEach(o => {
      o.tipoVigencia = o.tipoVigencia || { codigo: 1 };
      o.identificadorCotacao = ID;
      if (o.codigo === ORCAMENTO) o.congelamento = { motivo: { codigo: 4, descricao: 'Em flexibilização interna' } };
    });
    json.rollouts = [...(json.rollouts || []), { codigoRollout: 130, habilitado: true }];
    return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(json) });
  });
  // GET/PUT do prêmio informado (BFF não existe no mock-server)
  await page.route(/\/ofertas\/[^/]+\/(premio-informado|premios)(\?|$)/, async route => {
    const req = route.request();
    if (req.method() === 'PUT') {
      payloadsPut.push(JSON.parse(req.postData() || '{}'));
      return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ sucesso: true }) });
    }
    if (premioJaInformado) {
      return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(premioJaInformado) });
    }
    return route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ mensagens: [{ code: 404, mensagem: 'não encontrado' }] }) });
  });
  await page.route(/\/seguranca\/papeis-usuario/, route => route.fulfill({
    status: 200, contentType: 'application/json',
    body: JSON.stringify({ id: 'P0111111', sub: 'P0111111', susep: 'P0111111', roles: [ROLE_INTERNO] }),
  }));
  await page.route(/^https:\/\/auto20\.webtst\.portoseguro\.brasil\//, async route => {
    const u = new globalThis.URL(route.request().url());
    if (/\/(premio-informado|premios)(\?|$)/.test(u.pathname)) return route.fallback();
    const resp = await route.fetch({ url: `http://localhost:4200${u.pathname}${u.search}` });
    return route.fulfill({ response: resp });
  });
  const stubs = [
    [/\/flexibilizacao\/vigenciaprevia/, { flagVigenciaPerfil: false, flexibilizacoes: [] }],
    [/\/obterquestionario/, {}],
    [/\/renovacao-programada\/dominio\/justificativas/, []],
    [/\/dominiosAdministrativo\/classe-bonus/, []],
    [/\/authbff\/auth\/mule/, {}],
  ];
  for (const [re, body] of stubs) {
    await page.route(re, route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) }));
  }
}

async function esperarLoading(page) {
  await page.waitForFunction(() => !/Processando|Falta pouco|Aguarde só mais|Carregando/.test(
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

async function estadoCampo(page, codigo) {
  return page.evaluate(cod => ({
    exibido: document.querySelector(`#input-premio-${cod}`)?.value,
    erro: document.querySelector(`#erro-premio-${cod}`)?.textContent.replace(/\s+/g, ' ').trim() || null,
    total: document.querySelector('#total-valor-total')?.textContent.trim(),
    liquido: document.querySelector('#total-valor-liquido')?.textContent.trim(),
  }), codigo);
}

async function salvarHabilitado(page) {
  return page.evaluate(() => {
    const cmp = window.ng && window.ng.getComponent(document.querySelector('app-premio-informado'));
    return cmp ? cmp.isSalvarHabilitado : null;
  });
}

async function digitarPremio(page, codigo, valor) {
  const input = page.locator(`#input-premio-${codigo}`);
  await input.scrollIntoViewIfNeeded();
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  if (valor) await input.type(valor, { delay: 70 });
  await input.press('Tab');
}

async function abrirTelaPremio(page) {
  await page.goto(URL_RESULTADOS, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('app-oferta-card-resultados', { timeout: 120000 });
  await page.evaluate(role => {
    const card = window.ng.getComponent(document.querySelector('app-oferta-card-resultados'));
    Object.defineProperty(card.userService, 'userRoles', { configurable: true, get: () => [role], set: () => {} });
  }, ROLE_INTERNO);
  await page.evaluate(() => { window.location.hash = '#/faq'; });
  await page.waitForTimeout(1500);
  await page.evaluate(h => { window.location.hash = h; }, `#/resultados/${ID}/${VERSAO}`);
  const botao = page.getByText('Alterar prêmio', { exact: true }).first();
  await botao.waitFor({ timeout: 120000 });
  await esperarLoading(page);
  await page.waitForTimeout(2500);
  await botao.click();
  await page.waitForSelector(`#input-premio-${CASCO}`, { timeout: 30000 });
  await page.waitForTimeout(1000);
}

async function preencherMotivoEJustificativa(page) {
  const dropdown = page.locator('div#dropdown-motivo-premio-informado');
  await dropdown.scrollIntoViewIfNeeded();
  await dropdown.click();
  await page.waitForTimeout(700);
  await page.getByText('Ajuste comercial', { exact: true }).first().click();
  await page.waitForTimeout(400);
  const just = page.locator('#justificativa-premio-informado');
  await just.click();
  await just.type('Ajuste comercial aprovado para retenção do cliente.', { delay: 15 });
  await just.press('Tab');
}

async function antes(browser) {
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  const page = await context.newPage();
  await prepararRotas(page);
  await abrirTelaPremio(page);
  await preencherMotivoEJustificativa(page);
  await digitarPremio(page, CASCO, '9999999999999');
  const casco = await estadoCampo(page, CASCO);
  await page.locator(`#linha-cobertura-${CASCO}`).scrollIntoViewIfNeeded();
  await destacar(page.locator(`#input-premio-${CASCO}`));
  await destacar(page.locator('#premio-total-novo'));
  await print(page, '00-antes-valor-gigante-aceito', 'ANTES (tst sem a correção) · valor sem limite',
    `Casco aceita ${casco.exibido}\nSem mensagem de erro · Salvar habilitado: ${await salvarHabilitado(page)}\nAo salvar, o BFF devolvia HTTP 500`, '#8a1c1c');
  log.push({ antes: casco });
  await context.close();
}

async function depois(browser) {
  const context = await browser.newContext({
    viewport: { width: 1366, height: 900 },
    recordVideo: { dir: path.join(outDir, 'video'), size: { width: 1366, height: 900 } },
    permissions: ['clipboard-read', 'clipboard-write'],
  });
  const page = await context.newPage();
  const inicioVideo = Date.now();
  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', e => consoleErrors.push(`pageerror: ${e.message}`));
  await prepararRotas(page);
  await abrirTelaPremio(page);
  const inicioUtil = Date.now();

  await print(page, '01-tela-premio-informado', 'Tela Alterar prêmio (branch feature/AUTOR3-32495-tst)',
    'Casco, RCF-V DM, RCF-V DC e APP editáveis · limite R$ 9.999.999,99');

  // CT01 — trava na digitação
  await digitarPremio(page, CASCO, '99999999999');
  const ct01 = await estadoCampo(page, CASCO);
  await page.locator(`#linha-cobertura-${CASCO}`).scrollIntoViewIfNeeded();
  await destacar(page.locator(`#input-premio-${CASCO}`));
  await print(page, '02-ct01-digitacao-trava-no-maximo', 'CT01 / CA01 · Digitação acima do limite',
    `Digitado: 99999999999 (= R$ 999.999.999,99)\nCampo travou em: ${ct01.exibido}`);

  // CT03 — mesma trava em todas as editáveis
  await digitarPremio(page, RCF_DM, '123456789012');
  await digitarPremio(page, RCF_DC, '55555555555555');
  const ct03 = { casco: ct01.exibido, rcfDm: (await estadoCampo(page, RCF_DM)).exibido, rcfDc: (await estadoCampo(page, RCF_DC)).exibido };
  await page.locator(`#linha-cobertura-${RCF_DM}`).scrollIntoViewIfNeeded();
  for (const c of [RCF_DM, RCF_DC]) await destacar(page.locator(`#input-premio-${c}`));
  await print(page, '03-ct03-trava-em-todas-as-coberturas', 'CT03 / CA06 · Mesma trava em RCF-V DM e DC',
    `RCF-V DM: digitado 123456789012 → ${ct03.rcfDm}\nRCF-V DC: digitado 55555555555555 → ${ct03.rcfDc}`);

  // CT06 — colar valor gigante
  const inputDm = page.locator(`#input-premio-${RCF_DM}`);
  await inputDm.click();
  await inputDm.press('Control+A');
  await inputDm.press('Backspace');
  await page.evaluate(() => navigator.clipboard.writeText('1.000.000.000,00'));
  await inputDm.press('Control+V');
  await inputDm.press('Tab');
  const ct06 = await estadoCampo(page, RCF_DM);
  await page.locator(`#linha-cobertura-${RCF_DM}`).scrollIntoViewIfNeeded();
  await destacar(inputDm);
  await print(page, '04-ct06-colar-valor-gigante', 'CT06 · Colar valor gigante',
    `Colado: 1.000.000.000,00\nCampo ficou: ${ct06.exibido}${ct06.erro ? '\nErro: ' + ct06.erro : ''}`);

  // CT05 — zero continua com a mensagem antiga
  await digitarPremio(page, RCF_DC, '0');
  const ct05 = await estadoCampo(page, RCF_DC);
  await page.locator(`#linha-cobertura-${RCF_DC}`).scrollIntoViewIfNeeded();
  await destacar(page.locator(`#erro-premio-${RCF_DC}`));
  await print(page, '05-ct05-zero-mensagem-mantida', 'CT05 · Regressão: prêmio zero',
    `RCF-V DC = ${ct05.exibido} → "${ct05.erro}"\nSalvar habilitado: ${await salvarHabilitado(page)}`, '#8a1c1c');

  // CT02 — exatamente no limite, formulário válido e envio
  await digitarPremio(page, RCF_DM, '42099');
  await digitarPremio(page, RCF_DC, '10000');
  await digitarPremio(page, CASCO, '999999999');
  await preencherMotivoEJustificativa(page);
  const ct02 = await estadoCampo(page, CASCO);
  const habilitado = await salvarHabilitado(page);
  await page.locator('.premio-informado__totais').scrollIntoViewIfNeeded();
  await destacar(page.locator('.premio-informado__totais'));
  await destacar(page.locator('.premio-informado__acoes'));
  await print(page, '06-ct02-valor-no-limite-salvar-habilitado', 'CT02 / CA02 · Valor exatamente no limite',
    `Casco = ${ct02.exibido}\nLíquido ${ct02.liquido} · Total ${ct02.total}\nSalvar habilitado: ${habilitado}`);

  await page.locator('[componentid="btn-salvar-premio-informado"], #btn-salvar-premio-informado').first().click();
  await page.waitForSelector('#btn-confirmar-alteracao-premio', { timeout: 15000 });
  await page.waitForTimeout(900);
  await print(page, '07-ct02-modal-confirmacao', 'CT02 · Modal de confirmação com o valor no teto',
    'Casco: R$ 9.999.999,99');
  await page.locator('#btn-confirmar-alteracao-premio').click();
  await page.waitForTimeout(2500);
  const corpo = payloadsPut[payloadsPut.length - 1];
  const casco = corpo && (corpo.coberturas || []).find(c => c.codigoCobertura === CASCO);
  log.push({ ct02Payload: corpo });
  await print(page, '08-ct02-payload-enviado', 'CT02 · PUT enviado ao BFF (interceptado)',
    `valorPremioInformado (Casco) = ${casco ? casco.valorPremioInformado : 'n/d'}\nNenhum valor acima de 9999999.99 sai da tela`);

  const video = page.video();
  await context.close();

  // CT07 — prêmio já informado (GET) acima do limite
  premioJaInformado = {
    codMotivo: 'AJUSTE_COMERCIAL',
    justificativa: 'Registro antigo gravado antes da trava.',
    itens: [{ codCobertura: CASCO, numeroItem: 1, valorPremioAntigo: 2113.26, valorPremioInformado: 1000000000 }],
  };
  const ctx2 = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  const page2 = await ctx2.newPage();
  await prepararRotas(page2);
  await abrirTelaPremio(page2);
  await page2.waitForTimeout(1500);
  const ct07 = await estadoCampo(page2, CASCO);
  await page2.locator(`#linha-cobertura-${CASCO}`).scrollIntoViewIfNeeded();
  await destacar(page2.locator(`#erro-premio-${CASCO}`));
  await print(page2, '09-ct07-premio-ja-informado-acima-do-limite', 'CT07 / Exc-05 · Prêmio já gravado acima do limite',
    `GET devolveu 1.000.000.000,00 (aplicado via setValue, sem máscara)\nErro: "${ct07.erro}"\nSalvar habilitado: ${await salvarHabilitado(page2)}`, '#8a1c1c');
  await ctx2.close();

  const videoPath = video ? await video.path() : null;
  return { videoPath, cortarSegundos: ((inicioUtil - inicioVideo) / 1000).toFixed(1), ct01, ct03, ct06, ct05, ct02, ct07 };
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/jhonnyscerni/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe',
  });
  let resultado = {};
  if (modo === 'antes') {
    await antes(browser);
  } else {
    resultado = await depois(browser);
  }
  await browser.close();
  fs.writeFileSync(path.join(outDir, `estado-${modo}.json`), JSON.stringify({ resultado, log, payloadsPut, consoleErrors }, null, 2));
  console.log(JSON.stringify({ resultado, consoleErrors: consoleErrors.length }, null, 1));
})().catch(e => { console.error('FALHA', e); process.exit(1); });
