import baseServer from "./mod.tsx";

baseServer({
  appModulePath: "./websockets/app.tsx",
  port: 5000,
});
