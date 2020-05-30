import baseServer from "https://raw.githubusercontent.com/asos-craigmorten/deno-react-base-server/master/mod.tsx";

baseServer({
  appModulePath: "https://raw.githubusercontent.com/yoshixmk/umashika/feature/deno/websockets/app.tsx",
  port: 3000,
});
