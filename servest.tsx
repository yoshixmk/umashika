// @deno-types="https://servestjs.org/@v1.1.0/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://servestjs.org/@v1.1.0/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://servestjs.org/@v1.1.0/mod.ts";

export function startServest(port: number = 3000) {
  const app = createApp();
  app.handle("/", async (req) => {
    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html; charset=UTF-8",
      }),
      body: (ReactDOMServer as any).renderToString(
        <html>
          <head>
            <meta charSet="utf-8" />
            <title>servest</title>
          </head>
          <body>Hello Servest!</body>
        </html>,
      ),
    });
  });
  app.listen({ port });
}
