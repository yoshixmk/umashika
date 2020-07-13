// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "react";
// @deno-types="https://deno.land/x/types/react/v16.13.1/react_global.d.ts"
import {
  HTMLInputElement,
  componentWillMount,
} from "react";
import { WebSocket } from "websocket";
import { Role, RoleType } from "../models/Roles.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
      input: any;
      img: any;
    }
  }
}

type Props = {
  children?: React.ReactNode;
  isServer: boolean;
  wsPort: number;
  hostname: number;
};

type Message = {
  username: string;
  message: string;
};

let websocket: WebSocket;
function wsFactory(endpoint: string) {
  if (websocket === undefined) {
    websocket = new WebSocket(endpoint);
  }
  return websocket;
}
const App: React.FC<Props> = (
  { children, isServer, wsPort, hostname }: Readonly<Props>,
) => {
  const endpoint = `ws://${hostname}:${wsPort}`;
  // const [ws, setWS]: [WebSocket, (arg: WebSocket) => void] = (React as any)
  //   .useState(new WebSocket(endpoint));
  const ws = wsFactory(endpoint);

  const [username, setUsername]: [string, (arg: string) => void] =
    (React as any).useState("");

  const [message, setMessage]: [string, (arg: string) => void] = (React as any)
    .useState("");

  // Messages
  const [messages, setMessages]: [Message[], (arg: Message[]) => void] =
    (React as any).useState([]);
  const messagesLocal: Message[] = [];

  const [role, setRole]: [RoleType, (arg: RoleType) => void] = (React as any)
    .useState("uma");

  (React as any).useEffect(() => {
    if (!isServer) {
      (ws as any).addEventListener("open", () => {
        console.log("ws connected!");
      });
      (ws as any).addEventListener("message", (message: MessageEvent) => {
        console.log(message.data);
        const m = (JSON.parse(message.data) as Message);
        if (m.username == "umashika") {
          setRole(m.message as RoleType);
        } else {
          messagesLocal.push(m);
          setMessages([...messagesLocal]);
        }
      });
    }
  }, []);

  const handleSendMessageToServer = async () => {
    const m: Message = { username, message };
    setMessage(message);
    await ws.send(JSON.stringify(m));
  };

  return (
    <div>
      <h1>🦕 Umashika 🦕</h1>
      <input
        type="text"
        value={username}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(event.target.value)}
      />
      <p>My name is {username}</p>
      <img src={`/static/images/${role}.png`} width="30"></img>
      <input
        type="text"
        value={message}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(event.target.value)}
      />
      <button
        onClick={(event: React.MouseEvent<HTMLInputElement>) =>
          handleSendMessageToServer()}
      >
        Send 🦕
      </button>
      {messages.map((message: Message, index: number) =>
        <div key={index.toString()}>{message.username}: {message.message}</div>
      )}
    </div>
  );
};

export default App;
