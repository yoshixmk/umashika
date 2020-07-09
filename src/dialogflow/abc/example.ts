import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
const app = new Application();

app.post("/", async (ctx: Context) => {
  const { queryResult } = await (ctx.body());

  await ctx.json({
    fulfillmentText: `'${queryResult.queryText}' from Deno`,
  });
});

app.start({ port: 3000 });
