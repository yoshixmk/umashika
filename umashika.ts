import baseServer from "./react-base-server.tsx";
// import { websocketServer } from "./websockets/server.ts";

// start react server for websocket frontend
baseServer({
  appModulePath: "./front_end/app.tsx",
  port: 5000,
});

// start websocket server
// websocketServer();
