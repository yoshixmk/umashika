// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
// @deno-types="https://deno.land/x/types/react/v16.13.1/react_global.d.ts"
import {
  HTMLInputElement,
  componentWillMount,
} from "https://dev.jspm.io/react@16.13.1";
import { WebSocket } from "../../deps.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
      input: any;
    }
  }
}

type Message = {
  username: string;
  data: string;
};

const App: React.FC = () => {
  const endpoint = "ws://127.0.0.1:8080";
  const [ws, setWS]: [WebSocket, (arg: WebSocket) => void] = (React as any)
    .useState(
      new WebSocket(endpoint),
    );
  const [count, setCount]: [number, (arg: number) => void] = (React as any)
    .useState(0);

  const [username, setUsername]: [string, (arg: string) => void] =
    (React as any).useState("");

  const [message, setMessage]: [string, (arg: string) => void] = (React as any)
    .useState("");

  // Messages
  const [messages, setMessages]: [Message[], (arg: Message[]) => void] =
    (React as any).useState([]);
  const messagesLocal: Message[] = [];

  (React as any).useEffect(() => {
    // if (ws) ws.close()
    // ws = new WebSocket(endpoint)

    (ws as any).addEventListener("open", () => {
      console.log("ws connected!");
    });
    (ws as any).addEventListener("message", (message: MessageEvent) => {
      console.log(message.data);
      messagesLocal.push(JSON.parse(message.data) as Message);
      setMessages([...messagesLocal]);
    });
  }, [ws]);

  const handleSendMessageToServer = async () => {
    const m: Message = { username, data: message };
    setMessage(message);
    await ws.send(JSON.stringify(m));
  };

  return (
    <div>
      <h1>Hello Umashika!</h1>
      <input
        type="text"
        value={username}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(event.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click the 🦕</button>
      <p>My name is {username} / I clicked the 🦕 {count} times</p>
      <input
        type="text"
        value={message}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(event.target.value)}
      />
      <p>{message}</p>
      <button
        onClick={(event: React.MouseEvent<HTMLInputElement>) =>
          handleSendMessageToServer()}
      >
        Send 🦕
      </button>
      {messages.map((message: Message, index: number) =>
        <div key={index.toString()}>{message.username}: {message.data}</div>
      )}
    </div>
  );
};

export default App;
