import { Transport } from "../mod.tsx";
import { Socket } from "../deps.ts";

type User = {
  username: string;
};

const users = new Map<string, User>();

export function websocketServer(port: number = 8080) {
  const transport = new Transport(port);
  transport.on("connection", (socket: Socket) => {
    socket.on("test", (data: string) => {
      console.log(socket.id);
      console.log(data);
      socket.emit("RES_TEST", "response");
    });

    // {"route":"join","data": {"username": "yoshixmk"}}
    socket.on("join", (user: User) => {
      console.log(socket.id);
      console.log("join: " + user.username);
      users.set(socket.id, user);
      socket.emit("join_done", "ok");
    });

    // {"route":"leave","data": {"username": "yoshixmk"}}
    socket.on("leave", (data: string) => {
      console.log(socket.id);
      users.delete(socket.id);
      socket.emit("leave_done", "ok");
    });

    // {"route":"clear","data": "clear"}}
    socket.on("clear", (data: string) => {
      console.log(socket.id);
      users.clear();
      socket.emit("clear_done", "ok");
    });

    type Message = {
      text: string;
      openRange?: string;
    };
    type UserMessage = {
      user: User;
      message: Message;
    };
    // {"route":"chat","data": {"text": "message"}}
    socket.on("chat", (message: Message) => {
      console.log(socket.id);

      for (const user of users.values()) {
        const userMessage = { user, message };
        socket.emit("chat_broad", userMessage);
      }
    });

    socket.on("UmaShikaRole_Request", (data: string) => {
      console.log(socket.id);
      console.log(data);
      socket.emit("UmaShikaRole_Response", "uma");
    });
  });
}