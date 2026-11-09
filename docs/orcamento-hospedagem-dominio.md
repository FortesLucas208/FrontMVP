# Orçamento de Hospedagem e Domínio — EcoVida (Impacto na Prática)

> Valores **estimados**, para comparação acadêmica. Podem variar com promoções e reajustes; confirmar nos sites oficiais.

## Premissas

O site é **estático** (HTML, CSS e JavaScript no navegador), sem backend nem banco de dados. Por isso, exige poucos recursos de servidor e comporta opções gratuitas.

## Hospedagem

| Critério | A · Railway (escolhida) | B · GitHub Pages | C · Hospedagem compartilhada (ex.: Hostinger) |
|---|---|---|---|
| Custo estimado | Gratuito (plano/créditos iniciais, com limites) | Gratuito | ≈ R$ 10–25/mês |
| Tipo de site | Estático e dinâmico | Somente estático | Estático e dinâmico (PHP, banco) |
| HTTPS | Incluso | Incluso | Incluso |
| Endereço | Subdomínio `.up.railway.app`; domínio próprio opcional | `github.io`; domínio próprio opcional | Domínio próprio |
| Facilidade | Deploy a partir de repositório Git | Publicação via Git | Painel com upload |
| Pontos fortes | Sem custo inicial, rápido, pronto para evoluir | Custo zero, estável | Flexível, com suporte |
| Pontos fracos | Uso limitado por créditos no plano gratuito | Sem backend | Preço sobe na renovação |

## Domínio

| Critério | 1 · ecovidaproject.up.railway.app (escolhido) | 2 · ecovida.com.br | 3 · ecovida.com |
|---|---|---|---|
| Registro | Fornecido pelo Railway | Registro.br | Registradores internacionais |
| Custo estimado | Gratuito | ≈ R$ 40/ano | ≈ R$ 60–100/ano |
| Identidade | Adequado a projeto acadêmico | Foco no público brasileiro | Global |
| Observações | Depende da plataforma | Exige CPF/CNPJ | Pode já estar registrado |

## Escolha e justificativa

**Railway (plano gratuito) + `https://ecovidaproject.up.railway.app`**

- **Custo:** R$ 0, dentro dos limites do plano gratuito.
- **Adequação:** projeto acadêmico, sem necessidade de domínio próprio nesta etapa.
- **Boas práticas:** HTTPS incluso e publicação a partir de repositório Git.
- **Evolução:** é possível adicionar backend/banco e apontar um domínio `.com.br` (≈ R$ 40/ano) para o mesmo serviço.

| Cenário | Custo anual estimado |
|---|---|
| Railway + subdomínio (adotado) | R$ 0 |
| Railway + .com.br | ≈ R$ 40 |
| Hospedagem compartilhada + .com | ≈ R$ 180–400 |
