import { Application } from "https://deno.land/x/oak/mod.ts";

// @deno-types="https://servestjs.org/@/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://servestjs.org/@/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = ReactDOMServer.renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>servest</title>
      </head>
      <body>Hello Oak!</body>
    </html>,
  );
});

await app.listen({ port: 4000 });
