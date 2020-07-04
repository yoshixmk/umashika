import { WebSocket, WebSocketServer } from "../../deps.ts";

type User = {
  username: string;
};

const users = new Map<string, User>();

export const websocketServer = (): void => {
  const wss = new WebSocketServer(8080);
  wss.on("connection", function (ws: WebSocket) {
    ws.on("message", function (message: string) {
      console.log(message);
      wss.clients.forEach((wsClients) => wsClients.send(message));
    });
  });
};
