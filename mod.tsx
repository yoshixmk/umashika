import {
  Socket,
  serve,
  acceptWebSocket,
  opine,
  ReactDOMServer,
  NextFunction,
  Response,
  Request,
  React
} from "./deps.ts";

// websocket server
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

const browserBundlePath = "/browser.js";
// react server
const baseServer = async ({
  appModulePath,
  port = 8080,
}: {
  appModulePath: string;
  port: number;
}) => {
  const app = opine();

  const { default: App } = await import(appModulePath);

  const js =
    `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.body);`;

  const html =
    `<html><head><script type="module" src="${browserBundlePath}"></script><style>* { font-family: Helvetica; }</style></head><body>${
      (ReactDOMServer as any).renderToString(<App />)
    }</body></html>`;

  app.use(
    browserBundlePath,
    (req: Request, res: Response, next: NextFunction) => {
      res.type("application/javascript").send(js);
    },
  );

  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.type("text/html").send(html);
  });

  app.listen({ port });

  return app;
};

export default baseServer;
