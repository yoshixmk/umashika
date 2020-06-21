import { startServest } from "./servest.tsx";
import { websocketServer } from "./websockets/server.ts";

// start react server for websocket frontend
startServest();

// start websocket server
websocketServer();
