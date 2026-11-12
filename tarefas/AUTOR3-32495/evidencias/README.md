# Evidências — AUTOR3-32495 (limite do "Valor do prêmio")

Capturadas em 2026-11-12 com o app local (`ng serve --configuration=tst` + `mock-server`), via Playwright (`evidencias-playwright.js`).
- **Depois:** branch `feature/AUTOR3-32495-tst`, commit `d86a2d7e7b` (MR !15915).
- **Antes:** os mesmos arquivos do módulo `premio-informado` na versão do `tst`, sem a correção.

| Arquivo | Cenário | O que mostra |
|---|---|---|
| `prints/00-antes-valor-gigante-aceito.png` | Antes | Sem a correção, o Casco aceita **R$ 99.999.999.999,99**, sem erro e com Salvar habilitado. Esse é o valor que estourava 500 no BFF |
| `prints/01-tela-premio-informado.png` | Depois | Tela Alterar prêmio: Casco, RCFA DM, RCFA DC e APP editáveis |
| `prints/02-ct01-digitacao-trava-no-maximo.png` | CT01 / CA01 | Digitado 99999999999 (R$ 999.999.999,99) → o campo trava em **R$ 9.999.999,99** |
| `prints/03-ct03-trava-em-todas-as-coberturas.png` | CT03 / CA06 | A mesma trava em RCFA Danos Materiais e Danos Corporais |
| `prints/04-ct06-colar-valor-gigante.png` | CT06 | Colar (Ctrl+V) "1.000.000.000,00" → o campo fica em **R$ 9.999.999,99** |
| `prints/05-ct05-zero-mensagem-mantida.png` | CT05 (regressão) | Prêmio R$ 0,00 → "Informe um valor maior que zero." e Salvar desabilitado (comportamento anterior mantido) |
| `prints/06-ct02-valor-no-limite-salvar-habilitado.png` | CT02 / CA02 | Casco exatamente em R$ 9.999.999,99 com motivo e justificativa → Salvar habilitado |
| `prints/07-ct02-modal-confirmacao.png` | CT02 | Modal de confirmação com Compreensiva R$ 3.092,86 → R$ 9.999.999,99 |
| `prints/08-ct02-payload-enviado.png` | CT02 | PUT `/ofertas/{cotacao}-{versao}-{orcamento}/premios` interceptado com `valorPremioInformado: 9999999.99`; volta para Resultados |
| `prints/09-ct07-premio-ja-informado-acima-do-limite.png` | CT07 / Exc-05 | GET de prêmio já informado devolvendo 1.000.000.000,00 (aplicado via `setValue`, sem máscara) → mensagem **"O valor do prêmio não pode ser maior que R$ 9.999.999,99."** e Salvar desabilitado |
| `AUTOR3-32495-trava-premio-informado.mp4` | CT01–CT02 | Vídeo (23 s) do fluxo: trava na digitação, nas outras coberturas e na colagem, zero, valor no teto, modal e envio |

## Payload enviado no CT02 (interceptado)
```json
{
  "coberturas": [
    { "codigoCobertura": 3, "nome": "RCFA - Danos Materiais", "numeroItem": 1, "valorPremioAnterior": 833.49, "valorPremioInformado": 420.99 },
    { "codigoCobertura": 4, "nome": "RCFA - Danos Corporais", "numeroItem": 1, "valorPremioAnterior": 53.06, "valorPremioInformado": 100 },
    { "codigoCobertura": 1, "nome": "Compreensiva", "numeroItem": 1, "valorPremioAnterior": 3092.86, "valorPremioInformado": 9999999.99 }
  ],
  "justificativa": "Ajuste comercial aprovado para retenção do cliente.",
  "motivo": "AJUSTE_COMERCIAL",
  "susep": "COL10J"
}
```

## Observações
- **BFF não testado:** o GET/PUT do prêmio informado foi interceptado (o mock-server não tem esses endpoints). A resposta real do BFF para R$ 9.999.999,99 precisa ser validada em TST (CT02), e o 400 para valores acima do limite depende do card de follow-up no `auto-cotacaobff-app`.
- **CT07 (achado visual):** quando o prêmio salvo vem do servidor acima do limite, o campo **exibe** R$ 9.999.999,99 (a máscara formata no teto), mas o valor do formulário continua 1.000.000.000,00. Por isso o Prêmio total mostra R$ 1,07 bi. O erro e o Salvar desabilitado impedem o envio; o usuário precisa redigitar o valor. Cenário improvável na prática: só ocorre com registro gravado antes da trava.
- **Ruído do mock local, não da feature:** "Não foi possível carregar os valores", "Invalid date" e "undefined% OFF" em Resultados vêm da massa local incompleta.
- **Perfil:** o Analista Interno é aplicado no `UserService` pelo script, porque o build tst usa perfil fixo.

## Como reproduzir
```bash
node mock-server/server.js                                                        # porta 8666
ng serve --configuration=tst --proxy-config proxy-mock.conf.json --port 4200
node evidencias-playwright.js <pasta-saida>            # depois
node evidencias-playwright.js <pasta-saida> antes      # com o módulo premio-informado na versão do tst
```
