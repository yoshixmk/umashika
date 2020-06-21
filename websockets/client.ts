import { TransportClient } from "../deps.ts";

const transport = await TransportClient("127.0.0.1:8080");

// game
transport.on("UmaShikaRole_Response", (data: string) => {
  console.log(data);
});
transport.emit("UmaShikaRole_Request", "Please tell me role.");

export function send() {
  transport.emit("join", '{"username": "yoshixmk"}');
}
