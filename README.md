# Bootcamp +praTi - Desenvolvimento Full-Stack Junior

Repositório com atividades, exercícios e projetos desenvolvidos durante o Programa de Desenvolvimento Full-Stack Júnior da +praTi.

## Projetos e atividades

### [Lista_Exercicios_1](Lista_Exercicios_1)

15 exercícios de lógica de programação em JavaScript, com temas como estruturas condicionais, cálculos, validações, IMC, fatorial, tabuadas, ordenação e sequência de Fibonacci.

Tecnologias: JavaScript, Node.js e `prompt-sync`.

### [Lista_Exercicios2](Lista_Exercicios2)

Exercícios de JavaScript organizados em três seções:

- estruturas de controle avançadas;
- funções e recursão;
- arrays e objetos complexos.

Tecnologias: JavaScript e Node.js.

### [Lista_Exercicios_3](Lista_Exercicios_3)

Páginas estáticas para praticar desenvolvimento front-end: estrutura semântica, listas, navegação, formulário de feedback, galeria de imagens e menu responsivo.

Tecnologias: HTML5, CSS3, JavaScript, CSS Grid, Flexbox, Media Queries e DOM.

### [JavaOO](JavaOO)

Oito exercícios de programação orientada a objetos em Java, abordando classes, objetos, encapsulamento, herança, abstração, polimorfismo, `BigDecimal`, coleções, exceções personalizadas, interfaces, generics e repositório em memória.

Tecnologias: Java, JDK, orientação a objetos, Collections Framework, Generics e exceções.

Os arquivos compilados ficam em `bin/` e não fazem parte do código-fonte versionado.

### [Consultas_SQL_Cafeteria_BomGosto](Consultas_SQL_Cafeteria_BomGosto)

Scripts SQL de um sistema de comandas para uma cafeteria, incluindo criação das tabelas `Cardapio`, `Comanda` e `ItensComanda`, inserção de dados, consultas detalhadas, totais por comanda, filtros e faturamento por data.

Tecnologias: SQL, PostgreSQL, DDL, DML, `JOIN`, `GROUP BY`, `HAVING`, agregações e chaves estrangeiras.

### [Meu_app_Filmes](Meu_app_Filmes)

Aplicação web **CineBusca** para pesquisar filmes, visualizar detalhes e manter uma lista de favoritos.

Funcionalidades:

- busca de filmes e paginação dos resultados;
- visualização de detalhes, gêneros, duração e diretor;
- inclusão e remoção de favoritos;
- persistência dos favoritos no `localStorage`.

Tecnologias: React 19, JavaScript, JSX, Vite, Axios, React Router, React Icons, CSS, ESLint e API do The Movie Database (TMDB).

Para executar:

```bash
cd Meu_app_Filmes/meu-app-filmes
npm install
```

Crie um arquivo `.env` com a chave da API do TMDB:

```env
VITE_API_KEY=sua_chave_da_api
```

Comandos disponíveis:

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # gera a versão de produção
npm run lint     # executa o ESLint
npm run preview  # visualiza a build de produção
```

### [Minha_Loja](Minha_Loja)

Exemplos de uma interface de loja usados para praticar diferentes estratégias de estilização. As versões apresentam cards de produtos, avaliações, preços, skeleton loading, carrinho e alternância entre temas claro e escuro.

- `01-css-global`: estilos globais com CSS e JavaScript;
- `02-css-modules`: simulação de CSS Modules com classes isoladas;
- `03-tailwind`: implementação atual com React, Styled Components e Babel via CDN;
- `04-styled-components`: implementação com React, Styled Components e Babel via CDN.

Tecnologias: HTML5, CSS3, JavaScript, React via CDN, Styled Components, Babel, CSS Variables, Grid, Flexbox, responsividade e `localStorage`.

> Observação: apesar do nome `03-tailwind`, o código atual dessa pasta utiliza Styled Components e não Tailwind CSS.

### [Portfolio](Portfolio)

Portfólio pessoal com páginas de apresentação e informações sobre a trajetória profissional, incluindo links para redes sociais.

Tecnologias: HTML5, CSS3, Flexbox, layout responsivo, variáveis CSS e Google Fonts.

## Tecnologias do repositório

- JavaScript e Node.js;
- React, JSX e Vite;
- Axios, React Router e React Icons;
- HTML5 e CSS3;
- CSS Grid, Flexbox, Media Queries e CSS Variables;
- Java, JDK, orientação a objetos, Collections, Generics e exceções;
- SQL e PostgreSQL;
- ESLint, npm e APIs REST;
- Git e GitHub.

## Como clonar

```bash
git clone URL_DO_REPOSITORIO
cd Bootcamp_praTi_Desenvolvimento_Full_Stack_Junior
```

## Como executar

### Exercícios JavaScript

Instale o Node.js. Para os exercícios da `Lista_Exercicios_1`, instale a dependência na raiz do repositório:

```bash
npm install prompt-sync
node Lista_Exercicios_1/Questao1/Questao1.js
```

Os demais arquivos JavaScript que não dependem de entrada pelo terminal podem ser executados com:

```bash
node caminho/do/arquivo.js
```

### Páginas HTML

Abra os arquivos `index.html` diretamente no navegador. Isso se aplica à `Lista_Exercicios_3`, ao `Portfolio` e às versões da `Minha_Loja`.

### Exercícios Java

Tenha um JDK instalado e compile os arquivos a partir da pasta `JavaOO/Exercicio_1`, direcionando os arquivos compilados para `bin/`:

```bash
cd JavaOO/Exercicio_1
javac -d bin $(find src -name '*.java')
```

Depois, execute a classe de demonstração correspondente ao exercício:

```bash
java -cp bin exercicio_1.DemoProduto
```

O nome da classe principal varia conforme o exercício.

### Scripts SQL

Execute primeiro o script de criação, depois o script de inserção e, por fim, as consultas na ordem desejada em um banco PostgreSQL.

## Organização

Cada pasta representa uma etapa ou projeto do bootcamp. Dependências instaladas, configurações do VS Code, arquivos compilados e outros artefatos gerados não devem ser versionados; essas regras estão definidas no [`.gitignore`](.gitignore).

## Autoria

Helen Santos Rocha
