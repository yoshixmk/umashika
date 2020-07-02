import React, { HTMLInputElement } from "https://dev.jspm.io/react@16.13.1";

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

const App = () => {
  const [count, setCount] = (React as any).useState(0);
  const [message, setMessage] = (React as any).useState("");

  return (
    <div>
      <h1>Hello DenoLand!</h1>
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
      <button onClick={() => setMessage(message.slice(0, -1))}>Del (future replace Send) 🦕</button>
    </div>
  );
};

/**
 * Export the component as the _default export_.
 */
export default App;
