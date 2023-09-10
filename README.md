# Linkr
  Vai ai uma prévia do nosso Linkr!
  
  <img src="/image-readme.jpg">

  
  Quer testar e ver funcionando?
  [Linkr](https://linkr-front-bay.vercel.app)

  
## Descrição

O "Linkr" é uma rede social de compartilhamento de links! Aproveite e compartilhe aqueles materiais irados que você encontrar sobre desenvolvimento <3 

Os usuários podem criar publicações personalizadas com os links que desejam compartilhar.

Para fazer parte desta rede social você deve fazer seu cadastro utilizando e-mail, senha, username e um link de uma imagem que será sua foto de perfil.

Além disso você pode:
  - Seguir pessoas de seu interesse.
  - Visualizar no feed em ordem cronológica (mais novos primeiro) as postagens das pessoas que você segue.
  - Visualizar no quadro à diretia as trending hashtags, ou seja, as hashtags mais utilizadas até o momento.
  - Clicar na hashtag desejada é ver a lista de postagens que utilizam a hashtag selecionada.
  - Curtir, comentar e compartilhar as postagens.
  - Buscar na barra de pesquisa os usuários que você desejar.
  - Exibir a página pessoal de um usuário onde contem apenas os posts desta pessoa.


## Tecnologias usadas

  - Front-end: utilize React e styled-components
  - Back-end: utilize Node, Express e Postgres.

Este é um projeto em React. Segue abaixo as instruções de configuração:

Certifiquse-se de ter as seguintes ferramentas instaladas e atualizadas no seu sistema: 

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

Quer conhecer o back-end deste projeto? <https://github.com/anarehder/linkr-api>

## Instalação

Siga estas etapas para configurar e executar o projeto localmente:

```bash
   git clone https://github.com/anarehder/linkr-front.git
   cd linkr-front
```

### 1 - Instalar as dependencias

```bash
  npm install
```

### 2 - Configurar a variavel de ambiente

Crie um arquivo .env na raiz do projeto com a variavel de ambiente necessária.

Neste projeto você deve utilizar a variável REACT_APP_API_URL = enderecoDoBackEnd;

### 3 - Execute o projeto em modo desenvolvimento

```bash
  npm start
```

A porta utilizada padrão é a porta 3000.

## 4 - Para subir o projeto no modo de produção

```bash
  npm run build
```
