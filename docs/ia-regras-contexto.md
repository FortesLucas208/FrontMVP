# Registro de Uso de Inteligência Artificial — `ia-regras-contexto.md`

## 1. Ferramenta utilizada

**Ferramenta:** ChatGPT (OpenAI).

**Finalidade:** Apoio ao desenvolvimento Front-End do projeto Impacto na Prática (EcoVida), principalmente na correção e melhoria de códigos JavaScript, identificação de problemas de implementação e sugestões de responsividade e experiência do usuário.

A inteligência artificial foi utilizada como ferramenta auxiliar durante o desenvolvimento, sem substituir as decisões técnicas e a implementação realizadas pelos integrantes do grupo.

## 2. Etapas em que a IA foi utilizada

### 2.1. Correção e aprimoramento de JavaScript

A IA foi utilizada para analisar trechos de JavaScript, identificar possíveis erros de lógica e sugerir correções nas funcionalidades interativas do site.

**Exemplos de prompts utilizados:**

- "Analise este código JavaScript e identifique possíveis erros que possam impedir o funcionamento dos eventos e das interações da página."
- "Corrija a lógica de seleção de opções e exibição condicional dos conteúdos, mantendo a estrutura original do código."
- "Verifique se os elementos HTML estão sendo selecionados corretamente pelo JavaScript e se os eventos estão associados aos elementos correspondentes."
- "Revise a funcionalidade de armazenamento de preferências utilizando localStorage, garantindo que as configurações sejam mantidas após atualizar a página."

**Sugestões aceitas:**

- Correções na seleção de elementos HTML por meio de métodos como `querySelector` e `getElementById`.
- Melhorias na associação de eventos, especialmente eventos de clique e envio de formulários.
- Ajustes nas condições responsáveis por exibir ou ocultar elementos conforme as escolhas do usuário.
- Melhorias na organização da lógica JavaScript para facilitar a manutenção.
- Orientações para utilização de `localStorage` no armazenamento das preferências de acessibilidade.

**Correções e adaptações realizadas:**

- Algumas respostas apresentavam alterações mais amplas do que o necessário. Nesses casos, foram priorizadas modificações pontuais, preservando a estrutura original.
- Sugestões que substituíam trechos funcionais foram revisadas para evitar regressões em outras funcionalidades.
- Códigos sugeridos foram adaptados aos identificadores, classes e elementos efetivamente existentes nas páginas do projeto.
- A lógica proposta foi considerada em conjunto com o comportamento esperado da interface, evitando implementar soluções incompatíveis com a estrutura existente.

### 2.2. Responsividade e adaptação para dispositivos móveis

A IA também foi utilizada para avaliar possibilidades de melhoria na apresentação do site em diferentes resoluções, principalmente em celulares e tablets.

**Exemplos de prompts utilizados:**

- "Analise a estrutura CSS desta página e sugira melhorias para que ela funcione corretamente em celulares, tablets e computadores."
- "Como adaptar o menu de navegação para telas menores sem comprometer os submenus e os links existentes?"
- "Sugira ajustes de CSS para evitar que cards, imagens, formulários e tabelas ultrapassem os limites da tela."
- "Revise as media queries e indique possíveis melhorias na organização dos breakpoints."

**Sugestões aceitas:**

- Utilização de media queries para adaptar os elementos conforme a largura da tela.
- Ajustes na organização de grids e elementos flexíveis.
- Redimensionamento de imagens e elementos multimídia.
- Adaptação de espaçamentos, fontes e dimensões dos componentes.
- Melhorias na disposição de cards, formulários e elementos de navegação.
- Orientações para evitar rolagem horizontal indesejada.

**Correções e adaptações realizadas:**

- As sugestões foram avaliadas conforme a identidade visual e a estrutura já estabelecidas no projeto.
- Foram evitadas alterações que prejudicassem a versão para computadores em favor da versão mobile.
- Breakpoints e dimensões sugeridos foram tratados como referências, não como valores obrigatórios.
- As alterações foram consideradas em conjunto com os arquivos de estilo existentes, principalmente `style.css` e `responsive.css`.

### 2.3. Acessibilidade e experiência do usuário

A IA também serviu como apoio na identificação de melhorias relacionadas à navegação e à acessibilidade digital.

**Exemplos de prompts utilizados:**

- "Quais melhorias podem ser aplicadas para tornar a navegação do site mais acessível por teclado?"
- "Verifique possíveis problemas de acessibilidade em elementos interativos, formulários e imagens."
- "Sugira melhorias para os atributos ARIA e para a identificação dos elementos da interface."

**Sugestões aproveitadas:**

- Melhor utilização de textos alternativos em imagens.
- Identificação de elementos decorativos com `aria-hidden`.
- Associação de campos de formulário aos seus respectivos labels.
- Melhorias na identificação de elementos interativos.
- Atenção ao contraste, foco visível e navegação por teclado.

**Adaptações realizadas:**

As recomendações foram confrontadas com os requisitos de acessibilidade do projeto. Foram priorizadas aquelas compatíveis com a estrutura HTML existente, evitando a utilização desnecessária de atributos ou recursos que já possuíam soluções nativas.

## 3. Critérios para aceitação das respostas

As respostas fornecidas pela inteligência artificial não foram consideradas automaticamente corretas ou definitivas.

Para aproveitar uma sugestão, foram considerados os seguintes critérios:

1. Compatibilidade com a estrutura HTML, CSS e JavaScript já desenvolvida.
2. Preservação das funcionalidades existentes.
3. Coerência com a identidade visual e os objetivos do projeto.
4. Simplicidade e facilidade de manutenção do código.
5. Compatibilidade com diferentes tamanhos de tela.
6. Atendimento aos requisitos de acessibilidade.

Sugestões incompatíveis com esses critérios foram descartadas, modificadas ou utilizadas apenas como referência.

## 4. Limitações identificadas

Durante o uso da ferramenta, foram consideradas algumas limitações:

- A IA pode sugerir identificadores, classes ou elementos inexistentes no projeto.
- Algumas correções podem resolver um problema específico, mas provocar alterações indesejadas em outras funcionalidades.
- Valores de breakpoints e dimensões sugeridos nem sempre correspondem às necessidades reais do layout.
- Códigos aparentemente corretos podem apresentar problemas quando executados em conjunto com os demais arquivos.
- Recomendações de acessibilidade precisam ser verificadas na interface, não apenas no código.

Por esses motivos, as respostas foram utilizadas como apoio técnico e não como substitutas dos testes e da validação humana.

## 5. Validação das sugestões

Após avaliar as recomendações, foram considerados os seguintes procedimentos de validação:

- Verificação do funcionamento das interações JavaScript.
- Navegação entre as páginas e conferência dos links.
- Testes dos formulários e de seus campos obrigatórios.
- Verificação da persistência das preferências de acessibilidade.
- Observação do comportamento do menu e dos elementos interativos.
- Avaliação da apresentação em diferentes resoluções.
- Conferência da navegação por teclado e dos elementos de acessibilidade.

## 6. Considerações finais

A utilização da inteligência artificial contribuiu para agilizar a identificação de problemas, apoiar a correção de códigos JavaScript, por falta de habilidades próprias do programador principal do projeto e ampliar as possibilidades de melhoria da responsividade e da acessibilidade do projeto.

Seu uso ocorreu de maneira complementar ao desenvolvimento realizado pelo grupo. As sugestões foram analisadas, adaptadas e consideradas conforme as necessidades reais da aplicação.

O resultado final permaneceu sob responsabilidade do integrante Lucas Fortes, que avaliou e auditou a compatibilidade das alterações e a adequação das soluções a todos os objetivos do projeto.

**Repositório:** https://github.com/FortesLucas208/FrontMVP

**Projeto publicado:** https://ecovidaproject.up.railway.app