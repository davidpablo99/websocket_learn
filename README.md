# LiveDesk - WebSocket Chat

Este é um projeto simples de chat em tempo real desenvolvido com **Node.js**, **Express** e **WebSocket (ws)**. Ele permite que múltiplos usuários se conectem e troquem mensagens instantaneamente.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para servir os arquivos estáticos.
- **ws**: Biblioteca WebSocket simples e eficiente para Node.js.
- **HTML/CSS/JS**: Frontend básico para interface do chat.

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/davidpablo99/websocket_learn.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd websocket_learn
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## ▶️ Como Executar

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

O servidor iniciará em `http://localhost:3000`.

## 🖥️ Como Usar

1. Abra o navegador e acesse `http://localhost:3000`.
2. Abra outra aba ou navegador e acesse o mesmo endereço.
3. Digite uma mensagem no campo de texto e clique em **Enviar**.
4. A mensagem aparecerá instantaneamente em todas as abas conectadas.

## 📂 Estrutura do Projeto

- `server.js`: Arquivo principal do servidor (Express + WebSocket).
- `public/index.html`: Interface do chat (Frontend).
- `package.json`: Gerenciamento de dependências e scripts.

## 🤝 Contribuição

Sinta-se à vontade para fazer um fork deste projeto e enviar pull requests. Qualquer melhoria é bem-vinda!

---
Desenvolvido por David Pablo
