import { TransportClient } from "https://raw.githubusercontent.com/yoshixmk/transport/master/mod.ts";

const transport = await TransportClient("127.0.0.1:8080");

// test
// transport.on("RES_TEST", (data: string) => {
//   console.log(data);
// });
// transport.emit("test", "Hello World !");

// game
transport.on("UmaShikaRole_Response", (data: string) => {
  console.log(data);
});
transport.emit("UmaShikaRole_Request", "Please tell me role.");

export function send() {
  transport.emit("join", '{"username": "yoshixmk"}');
}
