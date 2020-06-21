import baseServer from "./mod.tsx";
import { websocketServer } from "./websockets/server.ts";

// start react server for websocket frontend
baseServer({
  appModulePath: "./websockets/app.tsx",
  port: 5000,
});

// start websocket server
websocketServer();
