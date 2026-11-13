# Evidências — AUTOR3-31676 (bloqueio de comissão e descontos/agravos com prêmio informado)

Capturadas em 2026-11-13 com o app local (`ng serve --configuration=tst` + `mock-server`), via Playwright (`evidencias-playwright.js`).
- **Depois:** branch `feature/AUTOR3-31676-tst`, commit `ff0757f08d` (MR !15924).
- **Antes:** os mesmos arquivos-fonte na versão do `tst`, sem o card.

Massa: cotação com o orçamento 3 em **flexibilização interna** (analista interno), coberturas com `flagPremioInformado: true` (cenários "com prêmio informado") ou `false` (regressão), e um agravo já concedido pelo analista ("Agravo de perfil (já aplicado)", 5%).

## Antes (tst, sem o card): oferta com prêmio informado

| Arquivo | O que mostra |
|---|---|
| `prints/01-resultados-aba-descontos-agravos.png` | Resultados > Pagamentos e Descontos: aba "Adicionar descontos e agravos" **habilitada** |
| `prints/02-resultados-clique-na-aba.png` | O clique abre a aba, e dá para selecionar e adicionar desconto/agravo |
| `prints/03-oferta-comissao.png` | `/oferta`: sem ícone ⓘ, **editar comissão habilitado** |
| `prints/05-oferta-modal-descontos-agravos.png` | `/oferta` > Descontos: seção "Descontos adicionais e agravos" com editar e "Adicionar descontos e agravos" disponíveis |

## Depois: oferta com prêmio informado

| Arquivo | Cenário | O que mostra |
|---|---|---|
| `prints/11-resultados-aba-descontos-agravos.png` | CT05 / CA03 | Aba "Adicionar descontos e agravos" **desabilitada** (esmaecida, `disabled`, `aria-disabled`, `title` = "Comissão e desconto não podem ser alterados") |
| `prints/12-resultados-clique-na-aba.png` | CT05 | Clique na aba: **não abre**, continua em "Formas de pagamento" |
| `prints/13-oferta-comissao.png` | CT01 / CT02 / CA01 / CA02 | `/oferta`: ícone ⓘ ao lado de "Comissão", editar **inativo**, tooltip no mouse com a mensagem. Clique forçado no editar não abre nada; o "olho" do percentual continua ativo (CT04) |
| `prints/14-oferta-tooltip-teclado.png` | CT03 / RN03 | Foco de teclado no ícone ⓘ → tooltip "Comissão e desconto não podem ser alterados" |
| `prints/15-oferta-modal-descontos-agravos.png` | CT11 / CA03 | `/oferta` > Descontos: mensagem "Comissão e desconto não podem ser alterados", agravo já aplicado **visível** (5%), editar **inativo**, **sem** o botão "Adicionar descontos e agravos" |
| `AUTOR3-31676-bloqueio-premio-informado.mp4` | CT01–CT05, CT11 | Vídeo (21 s) do fluxo acima |

## Depois: oferta sem prêmio informado (regressão)

| Arquivo | Cenário | O que mostra |
|---|---|---|
| `prints/21-resultados-aba-descontos-agravos.png` | CT08 / CA04 | Aba "Adicionar descontos e agravos" habilitada |
| `prints/22-resultados-clique-na-aba.png` | CT08 | O clique abre a aba normalmente |
| `prints/23-oferta-comissao.png` | CT08 | Sem ícone ⓘ; editar comissão habilitado |
| `prints/25-oferta-modal-descontos-agravos.png` | CT12 | Seção do analista como hoje: editar habilitado e "Adicionar descontos e agravos" visível; sem mensagem |

O estado lido da tela em cada cenário está em `estado-antes.json` e `estado-depois.json` (`resultado.comPI` / `resultado.semPI`).

## Observações
- **Dados pessoais mascarados:** o nome e o CPF do segurado (massa de mock) estão cobertos por uma faixa cinza nos prints e no vídeo.
- **Ajustes do script para a massa local (não afetam o card):**
  - a API de planos de parcelamento não existe no mock-server: o modal de pagamentos abre com lista vazia ("Não existem formas de pagamento disponíveis");
  - a massa deixa a `/oferta` em "Recálculo necessário", o que já inativa o editar comissão por outro motivo (`isInativoCondicoesComerciais`). O script zera esse estado ao abrir a página, para isolar o efeito do card: com isso, sem prêmio informado o editar fica habilitado (print 23) e com prêmio informado fica inativo só pelo card (print 13);
  - a consulta de saldo de descontos (`/orcamento/{n}/item/{n}/descontos`) é respondida vazia.
- **Ruído do mock local:** "Não foi possível carregar os valores", "Oferta pendente" e o alerta de outros corretores vêm da massa local.
- **Perfil:** o Analista Interno é aplicado no `UserService` pelo script, porque o build tst usa perfil fixo.
- **Pendente em TST (CT-QA04):** confirmar que a resposta real de `/orcamentos/{n}/personalizacao/` (que alimenta a `/oferta`) traz `flagPremioInformado` nas coberturas. Aqui ela foi simulada.

## Como reproduzir
```bash
node mock-server/server.js                                                        # porta 8666
ng serve --configuration=tst --proxy-config proxy-mock.conf.json --port 4200
node evidencias-playwright.js <pasta-saida>            # depois (com e sem prêmio informado)
node evidencias-playwright.js <pasta-saida> antes      # com os arquivos-fonte do card na versão do tst
```
