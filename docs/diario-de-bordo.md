# Diário de Bordo — Impacto na Prática (EcoVida)

**Disciplina:** Desenvolvimento Front-End para Web · **Atividade:** A2 — Entrega 01
**Equipe:** Felipe Piazza Bononi (47349361), Lucas Fortes de Melo (46761977), Vinicius Passos Macedo (47116871)
**Professor orientador:** Paulo Sergio Fratta Junior

---

## 1. Definição do tema e do escopo — 26/10/2026
**O que fizemos:** leitura dos requisitos da A2 e escolha do tema (sustentabilidade e impacto social). Definimos a ideia central, **Aprender → Responder → Agir**, e a pergunta orientadora "Quanto tempo você tem para causar um impacto?". Listamos as 10 páginas mínimas.
**Decisões:** foco em jovens e estudantes, com pessoas com deficiência como público prioritário de acessibilidade.
**Dificuldade:** transformar um tema amplo em algo que o usuário consiga *fazer*, e não só ler.
**Aprendizado:** limitar o escopo (5 áreas de desafio) torna o projeto viável no prazo.

## 2. Estrutura do README e do fluxo do usuário — 28/10/2026
**O que fizemos:** escrevemos o README com problema, justificativa, objetivos, público e fluxo do usuário. Desenhamos o fluxo em etapas (tempo → área → contexto → quiz → desafio → impacto).
**Decisões:** o JavaScript era opcional na entrega, mas decidimos implementar a interatividade principal.
**Aprendizado:** documentar o fluxo antes de programar facilitou a divisão das páginas.

## 3. Página inicial e identidade visual — 30/10/2026
**O que fizemos:** criamos o `index.html` com hero, tópicos em destaque e "Dica Eco do Dia". Definimos a paleta (verdes e tons terrosos), a fonte Inter e os ícones Phosphor.
**Decisões:** usar Tailwind CSS via CDN para agilizar o layout responsivo e manter um visual moderno, e não infantil.
**Dificuldade:** equilibrar o visual com a legibilidade e o contraste.
**Aprendizado:** definir cores e componentes (cards, botões) uma vez e reutilizar em todas as páginas.

## 4. Padronização das páginas — 01/11/2026
**O que fizemos:** definimos o menu, o rodapé e o cabeçalho de página iguais em todo o site, com `css/style.css`, `css/responsive.css` e `js/main.js`.
**Decisões:** menu principal com submenu "Mais" para não sobrecarregar a barra com 10 itens; menu móvel separado.
**Dificuldade:** o menu com 10 links não cabia em telas médias.
**Aprendizado:** vale concentrar o comportamento compartilhado em um único arquivo JS.

## 5. Páginas de conteúdo — 03/11/2026
**O que fizemos:** `sobre.html` (história, missão, visão e valores), `impacto.html` (cadeia de impacto, dados de apoio e simulador) e `noticias.html` (artigos com "ler mais").
**Decisões:** citar a fonte dos dados e avisar que os valores são aproximados.
**Dificuldade:** encontrar estatísticas confiáveis e escrever textos curtos sem perder a precisão.
**Aprendizado:** é preferível poucos dados bem atribuídos a muitos sem fonte.

## 6. Núcleo interativo — 05/11/2026
**O que fizemos:** construímos `projetos.html` com seleção de tempo e área, quiz com feedback imediato, desafio compatível com o tempo, botão de conclusão e tela de impacto. Criamos conteúdo para 5 áreas × 3 tempos.
**Decisões:** o desafio só aparece depois da resposta do quiz; aceitamos `?tempo=` na URL para ligar a página inicial à experiência.
**Dificuldade:** manter o fluxo claro para leitores de tela (uso de `aria-pressed` e regiões `aria-live`).
**Aprendizado:** separar os dados (conteúdo das áreas) da lógica deixa fácil acrescentar novos desafios.

## 7. Formulário, galeria e multimídia — 06/11/2026
**O que fizemos:** `contato.html` com validação nativa HTML5 e apresentação da equipe; `galeria.html` com legendas, fontes e visualização ampliada; `midia.html` com vídeo e mapa incorporados.
**Decisões:** o áudio foi retirado da página de mídia por falta de um arquivo adequado ao tema; o vídeo passou a ser incorporado do YouTube por `<iframe>`.
**Dificuldade:** escolher imagens que combinassem com os temas e escrever `alt` descritivo.
**Aprendizado:** todo conteúdo incorporado precisa de `title` descritivo e de um link alternativo.

## 8. Acessibilidade — 07/11/2026
**O que fizemos:** criamos `acessibilidade.html`, com as medidas adotadas, ajuste do tamanho do texto, opção de reduzir animações, tabela de contraste e atalhos de teclado. Revisamos foco visível, link "Pular para o conteúdo", `labels` e `lang="pt-BR"`.
**Decisões:** calcular a razão de contraste das cores principais (todas acima de 4,5:1).
**Aprendizado:** acessibilidade deve entrar desde o início do projeto, e não só como ajuste final.

## 9. Orçamento e hospedagem — 08/11/2026
**O que fizemos:** comparamos 3 hospedagens (Railway, GitHub Pages e hospedagem compartilhada) e 3 domínios. Escolhemos o **Railway (plano gratuito)**, publicado em `https://ecovidaproject.up.railway.app`.
**Decisões:** custo zero e possibilidade de evoluir para backend; domínio próprio fica como melhoria futura.
**Dificuldade:** valores variam com promoções; tratamos os preços como estimativas.

## 10. Testes e entrega — 09/11/2026
**O que fizemos:** testamos a navegação entre as 10 páginas, a responsividade (celular, tablet e desktop), o formulário com dados válidos e inválidos, o fluxo do quiz e a acessibilidade (teclado e relatório Lighthouse). Reunimos os prints em `docs/evidencias-de-testes/`. Ajustamos o README ao que foi implementado e publicamos o site.
**Dificuldade:** o site depende de CDNs e conteúdo externo; um plano de reserva é ter a versão publicada e prints.
**Aprendizado:** testar em dispositivos diferentes revela problemas que passam despercebidos no computador.

---

## Divisão de responsabilidades
| Área | Responsável |
|---|---|
| Conteúdo e textos | Equipe |
| HTML e CSS | Equipe |
| JavaScript (quiz, formulário, menu) | Equipe |
| Acessibilidade e testes | Equipe |
| Documentação e publicação | Equipe |

## Principais aprendizados
- Planejar o fluxo do usuário antes de programar economiza retrabalho.
- Reaproveitar componentes mantém o visual consistente entre as páginas.
- Acessibilidade e responsividade devem ser verificadas a cada página.
- Documentar decisões ajuda a explicar o projeto na apresentação.

## Principais dificuldades
- Escolher e conferir imagens e dados de fontes externas.
- Manter 10 páginas consistentes (menu, rodapé e estilos).
- Tornar a experiência interativa compreensível para leitores de tela.

## Melhorias futuras
- Salvar o progresso do usuário e acrescentar mais desafios.
- Conteúdo próprio em áudio e vídeo, com legendas e transcrição.
- Domínio próprio e envio real do formulário de contato.
