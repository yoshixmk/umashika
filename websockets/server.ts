import {  Socket } from "https://raw.githubusercontent.com/yoshixmk/transport/master/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";
import {
  acceptWebSocket
} from "https://deno.land/std/ws/mod.ts";

export class Transport {
  private sockets: Array<Socket>;
  private port: number;
  constructor(port: number = 8080) {
    this.sockets = [];
    this.port = port;
  }
  public async on(route: string, cb: Function) {
    if (route === "connection") {
      for await (const req of serve({ port: this.port })) {
        const { conn, r: bufReader, w: bufWriter, headers } = req;
        const sock = await acceptWebSocket({
          conn,
          bufReader,
          bufWriter,
          headers,
        });
        const socket = new Socket(sock);
        this.sockets.push(socket);
        cb(socket);
      }
    }
  }
}

const transport = new Transport();

transport.on("connection", (socket: Socket) => {
  socket.on("test", (data: string) => {
    console.log(socket.id);
    console.log(data);
    socket.emit("RES_TEST", "response");
  });

  socket.on("UmaShikaRole_Request", (data: string) => {
    console.log(socket.id);
    console.log(data);
    socket.emit("UmaShikaRole_Response", "uma");
  });
});
