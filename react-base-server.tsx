import {
  opine,
  serveStatic,
  React,
  ReactDOMServer,
} from "./deps.ts";
import { dirname, join } from "https://deno.land/std@0.60.0/path/mod.ts";

const browserBundlePath = "/browser.js";
const __dirname = dirname(import.meta.url);

const baseServer = async ({
  appModulePath,
  port,
  wsPort,
  hostname,
}: Readonly<{
  appModulePath: string;
  port: number;
  wsPort: number;
  hostname: string;
}>) => {
  const app = opine();

  const { default: App } = await import(appModulePath);

  const js =
    `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App, {wsPort: ${wsPort}, hostname: '${hostname}'}, null), document.getElementById("react-root"));`;

  const html =
    `<html><head><script type="module" src="${browserBundlePath}"></script><style>* { font-family: Helvetica; }</style></head><body><div id="react-root">${
      (ReactDOMServer as any).renderToString(
        <App wsPort={wsPort} hostname={hostname} />,
      )
    }</div></body></html>`;

  app.use(browserBundlePath, (req, res, next) => {
    res.type("application/javascript").send(js);
  });

  app.use(serveStatic(__dirname));

  app.use("/", (req, res, next) => {
    res.type("text/html").send(html);
  });

  app.listen({ port });

  return app;
};

export default baseServer;
