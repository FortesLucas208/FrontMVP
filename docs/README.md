# Impacto na Prática (EcoVida)

Site de incentivo e conscientização ambiental, interativo e responsivo, que conduz o usuário por **Aprender → Responder → Agir**.

🌐 **Site publicado:** https://ecovidaproject.up.railway.app  
📦 **Repositório:** https://github.com/FortesLucas208/U-UNICID-CC-FRONTEND-2260022-N7-2-2026-NT-EcoVida-Portal-de-Sustentabilidade

## Autores

| Nome | RGM |
|---|---:|
| Felipe Piazza Bononi | 47349361 |
| Guilherme Ricardo Santos Schiavinato| 47769068 |
| Lucas Fortes de Melo | 46761977 |
| Vinicius Passos Macedo | 47116871 |

## Instituição e Curso

- **Instituição:** UNICID — Universidade Cidade de São Paulo
- **Curso:** Bacharel em Ciência da Computação
- **Disciplina:** Desenvolvimento Front-End para Web
- **Professor orientador:** Paulo Sergio Fratta Junior
- **Atividade:** A2 — Entrega 02

## Licença

Projeto desenvolvido para fins acadêmicos, no âmbito da Atividade A2 da disciplina de Front-End.

---

## Descrição

**Impacto na Prática** (marca **EcoVida**) é um projeto web sobre sustentabilidade e impacto social. O site transforma a consulta de informações em uma experiência guiada, na qual o usuário aprende sobre um tema, responde a um quiz e recebe um desafio prático compatível com o tempo disponível.

**Aprender → Responder → Agir**

## Contextualização e Problema

Grande parte do conteúdo sobre sustentabilidade é expositiva e exige apenas leitura passiva, o que pode gerar baixo engajamento e pouca mudança de comportamento. Há uma lacuna entre o acesso à informação e a adoção de práticas conscientes no dia a dia, especialmente entre jovens e estudantes.

## Justificativa

Ao transformar a informação em uma experiência guiada — contextualização, quiz e ação prática —, o projeto busca aumentar o engajamento e incentivar pequenas mudanças de comportamento com potencial impacto coletivo. A acessibilidade é tratada como requisito central da aplicação.

## Objetivo Geral

Desenvolver um site completo, com páginas interligadas e navegáveis, que aborde sustentabilidade e impacto social conectando aprendizado, reflexão e ação prática, com recursos de acessibilidade e layout responsivo.

## Objetivos Específicos

- Apresentar de forma acessível problemas de sustentabilidade e impacto social;
- Estruturar uma experiência com contextualização, quiz e desafio prático;
- Aplicar HTML5 semântico, formulários com validação e recursos multimídia;
- Adotar medidas de acessibilidade digital, como texto alternativo, contraste, navegação por teclado e atributos ARIA;
- Disponibilizar uma interface adaptável a computadores, tablets e celulares;
- Documentar o projeto, incluindo escopo, orçamento de hospedagem e evidências de testes.

## Público-Alvo

Jovens e estudantes; pessoas interessadas em sustentabilidade, hábitos conscientes e impacto social; e pessoas com deficiência (PCD), público prioritário dos requisitos de acessibilidade.

## Conceito da Experiência

Pergunta orientadora: **"Quanto tempo você tem para causar um impacto?"**

1. **Contextualização:** explicação curta sobre um problema, suas consequências e relevância.
2. **Quiz:** pergunta para estimular a reflexão antes da ação.
3. **Desafio prático:** ação simples, compatível com o tempo escolhido (5, 15 ou 30 minutos ou mais).
4. **Impacto:** explicação de como a ação individual pode contribuir para resultados coletivos.

Áreas disponíveis: Reciclagem, Economia de água, Consumo consciente, Desperdício de alimentos e Impacto social.

## Fluxo do Usuário

```text
Entra no site → Escolhe o tempo → Escolhe a área → Contextualização
→ Quiz → Desafio prático → Realiza a ação → Conhece o impacto
```

## Mapa do Site (10 páginas)

| Nº | Página | Conteúdo |
|---:|---|---|
| 1 | `index.html` | Apresentação do projeto, pergunta sobre o tempo disponível, tópicos em destaque, dica sustentável e acesso às demais páginas |
| 2 | `sobre.html` | História, missão, visão, valores, método e público-alvo |
| 3 | `projetos.html` | Experiência interativa: escolha de tempo e área, contextualização, quiz, desafio e impacto |
| 4 | `impacto.html` | Relação entre ação individual e impacto coletivo, dados de apoio e simulador de economia de água |
| 5 | `acessibilidade.html` | Recursos de acessibilidade, ajuste de fonte, redução de animações, contraste e atalhos de teclado |
| 6 | `galeria.html` | Galeria de imagens com legendas, fontes e visualização ampliada |
| 7 | `midia.html` | Vídeo incorporado (YouTube, via `<iframe>`) e mapa incorporado (OpenStreetMap) |
| 8 | `noticias.html` | Artigos informativos sobre os temas do projeto |
| 9 | `contato.html` | Formulário validado, dados fictícios de contato e apresentação da equipe |
| 10 | `orcamento_hospedagem.html` | Comparativo de hospedagem e domínio, com a opção adotada |

## Funcionalidades Implementadas

- Navegação entre as 10 páginas, com links internos e indicação da página atual;
- Menu de navegação responsivo, com menu móvel e submenu "Mais" na versão para computadores;
- Controles de navegação por teclado, incluindo fechamento dos menus pela tecla `Esc`;
- Experiência interativa em `projetos.html`, com seleção de tempo (5, 15 ou 30 minutos ou mais) e de uma das cinco áreas temáticas;
- Apresentação dinâmica de contextualização, quiz com feedback imediato, desafio prático e explicação do impacto;
- Bloqueio de respostas adicionais após a seleção de uma alternativa do quiz;
- Opção para concluir o desafio e iniciar uma nova experiência;
- Possibilidade de abrir a experiência com parâmetros de tempo e área pela URL;
- Dica sustentável aleatória na página inicial;
- Simulador de impacto coletivo em `impacto.html`, com cálculo automático de litros de água economizados a partir do número de pessoas, litros por pessoa/dia e quantidade de dias;
- Formulário de contato com validação nativa HTML5 (`required`, `email`, `tel` com `pattern`, `date`, `number`, `select`, `radio` e `checkbox`);
- Galeria com visualização ampliada de imagens por meio de `<dialog>`;
- Preferências de acessibilidade para ajuste do tamanho do texto e redução de animações;
- Armazenamento local das preferências de acessibilidade por meio de `localStorage`;
- Conteúdo multimídia com vídeo do YouTube e mapa do OpenStreetMap;
- Layout adaptável a diferentes tamanhos de tela, com estilos específicos em `css/responsive.css`.

## Acessibilidade

- Texto alternativo (`alt`) em imagens e ícones decorativos identificados com `aria-hidden`;
- Contraste de cores com razões superiores a 4,5:1, conforme apresentado na página de acessibilidade;
- Navegação por teclado, foco visível e link "Pular para o conteúdo principal";
- `lang="pt-BR"` em todas as páginas e HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`);
- Associação de `<label for>` aos campos de formulário e uso de `aria-describedby` em textos de ajuda;
- Uso de atributos ARIA para identificação e estado de componentes interativos;
- Tabelas com `caption` e `scope`, além de atributo `title` descritivo nos `<iframe>`;
- Atalhos de teclado documentados na página de acessibilidade;
- Respeito à preferência de movimento reduzido do sistema e opção para desativar animações;
- Preferências de tamanho de fonte e movimento armazenadas no navegador.

## Tecnologias Utilizadas

- **HTML5**, **CSS3** e **JavaScript**, sem framework JavaScript;
- **Tailwind CSS** (via CDN) para estilização, complementado por `css/style.css` e `css/responsive.css`;
- **Google Fonts** (Inter) e **Phosphor Icons** (via CDN);
- Imagens do **Unsplash**;
- Mapa do **OpenStreetMap**;
- Vídeo incorporado do **YouTube**.

Não há backend, banco de dados nem APIs próprias. Por utilizar CDNs e conteúdo externo, o site precisa de conexão com a internet para carregar todos os recursos externos.

## Estrutura do Projeto

As imagens do site vêm de fontes externas (Unsplash), portanto não há pasta de imagens local.

```text
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

1. Baixe ou clone o repositório:

   ```bash
   git clone https://github.com/FortesLucas208/FrontMVP.git
   ```

2. Abra `index.html` em um navegador. Recomenda-se servir a pasta localmente, por exemplo, com `python -m http.server`, para facilitar o funcionamento dos recursos incorporados.
3. Mantenha a conexão com a internet para carregar Tailwind CSS, fontes, ícones, imagens, vídeo e mapa.

## Hospedagem

O projeto está publicado no **Railway**, no endereço:

https://ecovidaproject.up.railway.app

O comparativo de hospedagem e domínio está disponível em `orcamento_hospedagem.html` e em `docs/orcamento-hospedagem-dominio.md`.

## Documentação (pasta `/docs`)

- **README.md:** visão geral e documentação do projeto;
- **diario-de-bordo.md:** registro de decisões, aprendizados e dificuldades;
- **orcamento-hospedagem-dominio.md:** comparação de opções de hospedagem e domínio, com justificativa da escolha;
- **evidencias-de-testes/:** registros dos testes realizados, incluindo validação do código, navegação, responsividade e acessibilidade.

## Metodologia de Desenvolvimento

Desenvolvimento incremental: definição do conteúdo e do fluxo da experiência; criação da página inicial e da identidade visual; desenvolvimento das demais páginas com HTML semântico; implementação das interações em JavaScript; aplicação de recursos de acessibilidade e responsividade; realização de verificações e publicação da aplicação.

## Limitações

- Não há backend nem banco de dados: o progresso dos desafios não é salvo entre sessões; apenas as preferências de acessibilidade são armazenadas localmente no navegador;
- Não há autenticação nem cadastro;
- O formulário de contato é demonstrativo, realiza validação no navegador, mas não envia dados;
- O conjunto de desafios é limitado aos conteúdos definidos no projeto;
- Há dependência de CDNs e de conteúdo externo;
- Estatísticas e valores de hospedagem são referências aproximadas e devem ser conferidos nas fontes oficiais.

## Possíveis Melhorias Futuras

- Armazenar localmente o progresso e o histórico de desafios;
- Ampliar o banco de desafios e conteúdos;
- Implementar sistema de conquistas (gamificação) e compartilhamento em redes sociais;
- Desenvolver backend e banco de dados para persistência e envio real do formulário;
- Produzir conteúdo próprio em áudio e vídeo, com legendas e transcrições;
- Registrar um domínio próprio (por exemplo, `.com.br`).

Relação com os ODS

O EcoVida se relaciona com cinco Objetivos de Desenvolvimento Sustentável da Agenda 2030 (ONU). A seção completa está em impacto.html.

Área do site	ODS	Como contribui
Alimentos	ODS 2 e ODS 12	Reduz o desperdício de alimentos no consumo
Água	ODS 6	Incentiva o uso eficiente da água
Reciclagem e cidade	ODS 11 e ODS 12	Orienta a separação e a redução de resíduos
Consumo consciente	ODS 12 e ODS 13	Estimula escolhas de menor impacto ambiental
Impacto social	ODS 4 e ODS 13	Educação e conscientização para a ação climática
2) docs/diario-de-bordo.md: nova entrada (ajuste data e detalhes ao que a equipe fez de fato)
11. Validação do formulário em JavaScript e ajustes finais: 16/11/2026
O que foi feito: o formulário de contato passou a ser validado por js/validacao-formulario.js (novalidate + preventDefault), com mensagem de erro por campo, destaque visual, resumo de erros e foco no primeiro campo inválido. O último envio (nome, assunto e data) é guardado no localStorage.
Decisões: o script antigo que ficava dentro de contato.html foi removido; as cores foram centralizadas em variáveis CSS (:root em css/style.css).
Uso de IA: o código-base da validação foi gerado com apoio de IA (Claude) a partir da descrição do formulário. A equipe leu o código, ajustou-o à página e testou os casos: envio vazio, e-mail inválido, telefone fora do formato, mensagem curta e envio correto.
Evidências: prints dos testes em docs/evidencias-de-testes/.
Problemas encontrados: o envio com campos inválidos não deve acionar o tratador antigo; resolvido com um único tratador de envio.

## Status do Projeto

**Entrega 02 (Atividade A2) concluída e publicada.** O projeto conta com 10 páginas integradas, recursos interativos, medidas de acessibilidade, layout responsivo e hospedagem online. A versão entregue está disponível no site publicado e no repositório GitHub.

**Disciplina:** Desenvolvimento Front-End para Web — Bacharelado em Ciência da Computação, UNICID.
