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

const App: React.FC = () => {
  const [count, setCount] = (React as any).useState(0);
  const [message, setMessage] = (React as any).useState("");
  const endpoint = "ws://127.0.0.1:8080";
  const [ws, setWS] = (React as any).useState(new WebSocket(endpoint));

  // ws.on("open", function () {
  //   console.log("connected");
  // });
  const handleSendMessageToServer = async () => {
    setMessage(message);
    await ws.send(message);
  };

  return (
    <div>
      <h1>Hello Umashika!</h1>
      <button onClick={() => setCount(count + 1)}>Click the 🦕</button>
      <p>You clicked the 🦕 {count} times</p>
      <input
        type="text"
        value={message}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(event.target.value)}
      >
      </input>
      <p>{message}</p>
      <button onClick={(event: React.MouseEvent<HTMLInputElement>) => handleSendMessageToServer()}>Send 🦕</button>
    </div>
  );
};

export default App;
