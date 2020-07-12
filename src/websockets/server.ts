import { WebSocket, WebSocketServer } from "websocket";
import { Roles } from "../models/Roles.ts";
import { decideRoles } from "./role_service.ts";
import { shuffle } from "./role_service.ts";

type User = {
  username: string;
};

const users = new Map<string, User>();

export const websocketServer = (port: number): void => {
  const wss = new WebSocketServer(port);
  wss.on("connection", function (ws: WebSocket) {
    ws.on("message", function (message: string) {
      console.log(message);
      if (message.includes("umashika")) {
        let users: WebSocket[] = [];
        wss.clients.forEach((wsClient) => {
          if (!wsClient.isClosed) users.push(wsClient);
        });
        const roles: Roles = shuffle(
          decideRoles(users.length),
        );
        console.dir(roles);
        users.forEach((wsClient, i) => {
          return wsClient.send(
            JSON.stringify({ username: "umashika", message: roles[i].name }),
          );
        });
      }
      wss.clients.forEach((wsClient) => {
        if (!wsClient.isClosed) return wsClient.send(message);
      });
    });
  });
};
