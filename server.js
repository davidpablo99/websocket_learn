const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let clients = [];

wss.on("connection", (ws) => {
  console.log("Novo Cliente conectado");
  clients.push(ws);

  ws.on("message", (message) => {
    console.log("Mensagem recebida", message.toString());

    // enviar a mensagem para todos
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    clients = clients.filter(c => c !== ws)
    console.log("Cliente saiu");
  });
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
