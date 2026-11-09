# Impacto na Prática (EcoVida)

Site de incentivo e conscientização ambiental, interativo e passivo, que conduz o usuário por **Aprender → Responder → Agir**.

🌐 **Site publicado:** https://ecovidaproject.up.railway.app  
📦 **Repositório:** https://github.com/FortesLucas208/FrontMVP

## Autores

| Nome                            | RGM      |
|---------------------------------|----------|
| Felipe Piazza Bononi            | 47349361 |
| Lucas Fortes de Melo            | 46761977 |
| Vinicius Passos Macedo          | 47116871 |

## Instituição e Curso

- **Instituição:** UNICID — Universidade Cidade de São Paulo
- **Curso:** Bacharel em Ciência da Computação
- **Disciplina:** Desenvolvimento Front-End para Web
- **Professor orientador:** Paulo Sergio Fratta Junior
- **Atividade:** A2 — Entrega 01

## Licença

Projeto desenvolvido para fins acadêmicos, no âmbito da Atividade A2 da disciplina de Front-End.

---

## Descrição

**Impacto na Prática** (marca **EcoVida**) é um projeto web sobre sustentabilidade e impacto social. O usuário não apenas lê informações: é conduzido por uma experiência que envolve aprendizado, reflexão e ação prática.

**Aprender → Responder → Agir**

## Contextualização e Problema

Grande parte do conteúdo sobre sustentabilidade é expositiva e exige só leitura passiva, o que gera baixo engajamento e pouca mudança de comportamento. Há uma lacuna entre o acesso à informação e a adoção de práticas conscientes no dia a dia, especialmente entre jovens e estudantes.

## Justificativa

Ao transformar a informação em uma experiência guiada (contextualização, quiz e ação prática), é possível aumentar o engajamento e incentivar pequenas mudanças de comportamento com potencial impacto coletivo. O projeto atende ao tema obrigatório da A2 (sustentabilidade e impacto social) e trata a acessibilidade como requisito central.

## Objetivo Geral

Desenvolver a primeira versão de um site completo, com páginas interligadas e navegáveis, que aborde sustentabilidade e impacto social conectando aprendizado, reflexão e ação prática, com acessibilidade para pessoas com deficiência.

## Objetivos Específicos

- Apresentar de forma acessível problemas de sustentabilidade e impacto social;
- Estruturar uma experiência com contextualização, quiz e desafio prático;
- Aplicar HTML5 semântico, formulário validado e recursos multimídia;
- Adotar medidas de acessibilidade digital (texto alternativo, contraste, teclado, ARIA);
- Garantir layout responsivo;
- Documentar o projeto, incluindo escopo, orçamento de hospedagem e evidências de testes.

## Público-Alvo

Jovens e estudantes; pessoas interessadas em sustentabilidade, hábitos conscientes e impacto social; e pessoas com deficiência (PCD), público prioritário dos requisitos de acessibilidade.

## Conceito da Experiência

Pergunta orientadora: **"Quanto tempo você tem para causar um impacto?"**

1. **Contextualização:** explicação curta sobre um problema, suas consequências e relevância.
2. **Quiz:** pergunta para estimular a reflexão antes da ação.
3. **Desafio prático:** ação simples, compatível com o tempo escolhido (5, 15 ou 30 min ou mais).
4. **Impacto:** por que a ação importa, ligando a atitude individual ao impacto coletivo.

Áreas disponíveis: Reciclagem, Economia de água, Consumo consciente, Desperdício de alimentos e Impacto social.

## Fluxo do Usuário

```
Entra no site → Escolhe o tempo → Escolhe a área → Contextualização
→ Quiz → Desafio prático → Realiza a ação → Conhece o impacto
```

## Mapa do Site (10 páginas)

| Nº | Página | Conteúdo |
|----|--------|----------|
| 1 | `index.html` | Apresentação, pergunta sobre o tempo disponível, tópicos em destaque, dica do dia e menu |
| 2 | `sobre.html` | História, missão, visão, valores, método e público-alvo |
| 3 | `projetos.html` | Experiência interativa: tempo, área, contexto, quiz, desafio e impacto |
| 4 | `impacto.html` | Da ação individual ao impacto coletivo, dados de apoio e simulador de litros poupados |
| 5 | `acessibilidade.html` | Medidas de acessibilidade, ajuste de fonte e animações, contraste e atalhos de teclado |
| 6 | `galeria.html` | Galeria de imagens com legendas, fontes e visualização ampliada |
| 7 | `midia.html` | Vídeo incorporado (YouTube, via `<iframe>`) e mapa incorporado (OpenStreetMap) |
| 8 | `noticias.html` | Artigos informativos sobre os temas do projeto |
| 9 | `contato.html` | Formulário validado, dados fictícios de contato e apresentação da equipe |
| 10 | `orcamento_hospedagem.html` | Comparativo de hospedagem e domínio, com a opção adotada |

## Funcionalidades Implementadas

- Navegação entre as 10 páginas, com menu responsivo e submenu "Mais";
- Experiência completa em `projetos.html` (seleção de tempo e área, quiz com feedback imediato, exibição condicional do desafio e do impacto, e reinício);
- Link de entrada pela página inicial com tempo pré-selecionado (`projetos.html?tempo=15`);
- Dica sustentável aleatória na página inicial;
- Simulador de impacto coletivo em `impacto.html`;
- Formulário de contato com validação nativa HTML5 (`required`, `email`, `tel` com `pattern`, `date`, `number`, `select`, `radio`, `checkbox`);
- Galeria com visualização ampliada (`<dialog>`);
- Preferências de acessibilidade (tamanho do texto e redução de animações) salvas no navegador (`localStorage`).

## Acessibilidade

- Texto alternativo (`alt`) em imagens; ícones decorativos com `aria-hidden`;
- Contraste de cores acima de 4,5:1 (razões calculadas na página de acessibilidade);
- Navegação completa por teclado, foco visível e link "Pular para o conteúdo principal";
- `lang="pt-BR"` em todas as páginas e HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`);
- `<label for>` associado a cada campo e `aria-describedby` em textos de ajuda;
- Tabelas com `caption` e `scope`; `title` descritivo nos `<iframe>`;
- Respeito à preferência de movimento reduzido do sistema.

## Tecnologias Utilizadas

- **HTML5**, **CSS3** e **JavaScript** (sem framework JS);
- **Tailwind CSS** (via CDN) para estilização, complementado por `css/style.css` e `css/responsive.css`;
- **Google Fonts** (Inter) e **Phosphor Icons** (via CDN);
- Imagens do **Unsplash**; mapa do **OpenStreetMap**; vídeo do **YouTube**.

Não há backend, banco de dados nem APIs próprias. Por usar CDNs e conteúdo externo, o site precisa de conexão com a internet para exibir todos os recursos.

## Estrutura do Projeto

As imagens do site vêm de fontes externas (Unsplash), portanto não há pasta de imagens local.

```
FrontMVP/
├── index.html
├── sobre.html
├── projetos.html
├── impacto.html
├── acessibilidade.html
├── galeria.html
├── midia.html
├── noticias.html
├── contato.html
├── orcamento_hospedagem.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
└── docs/
    ├── README.md
    ├── diario-de-bordo.md
    ├── orcamento-hospedagem-dominio.md
    └── evidencias-de-testes/
```

## Como Executar

**Online:** acesse https://ecovidaproject.up.railway.app

**Localmente:**
1. Baixe ou clone o repositório (`git clone https://github.com/FortesLucas208/FrontMVP.git`);
2. Abra `index.html` em um navegador (de preferência servindo a pasta, por exemplo com `python -m http.server`, para que o vídeo incorporado funcione);
3. É necessária conexão com a internet para carregar Tailwind, fontes, ícones, imagens, vídeo e mapa.

## Hospedagem

Publicado no **Railway** (plano gratuito), no endereço `https://ecovidaproject.up.railway.app`. O comparativo completo de hospedagem e domínio está em `orcamento_hospedagem.html` e em `docs/orcamento-hospedagem-dominio.md`.

## Documentação (pasta /docs)

- **README.md:** visão geral do projeto;
- **diario-de-bordo.md:** registro de decisões, aprendizados e dificuldades;
- **orcamento-hospedagem-dominio.md:** comparação de 3 hospedagens e 3 domínios, com a justificativa da escolha;
- **evidencias-de-testes/:** prints dos testes realizados (validação do código, navegação, responsividade e acessibilidade).

## Metodologia de Desenvolvimento

Desenvolvimento incremental: definição do conteúdo e do fluxo da experiência; página inicial e identidade visual; demais páginas com HTML semântico; interatividade em JavaScript; acessibilidade, testes e publicação.

## Limitações

- Não há backend nem banco de dados: o progresso do usuário não é salvo entre sessões (apenas preferências de acessibilidade, no navegador);
- Não há autenticação nem cadastro; o formulário de contato é demonstrativo e não envia dados;
- O conjunto de desafios é limitado ao definido no projeto;
- Dependência de CDNs e conteúdo externo;
- Estatísticas e valores de hospedagem são referências aproximadas, a serem conferidas nas fontes oficiais.

## Possíveis Melhorias Futuras

- Armazenar localmente o progresso e o histórico de desafios;
- Ampliar o banco de desafios e conteúdos;
- Sistema de conquistas (gamificação) e compartilhamento em redes sociais;
- Backend e banco de dados para persistência e envio real do formulário;
- Conteúdo próprio em áudio e vídeo, com legendas e transcrições;
- Domínio próprio (por exemplo, `.com.br`).

## Status do Projeto

Entrega 01 (Atividade A2) concluída e publicada — Disciplina de Front-End, Ciência da Computação, UNICID.
