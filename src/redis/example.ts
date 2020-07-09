import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
import { redisHost, redisPort } from "./coffee.ts";
const redis = await connect({
  hostname: redisHost,
  port: redisPort,
});
const ok = await redis.set("hoge", "fuga");
const fuga = await redis.get("hoge"); // fuga
const bar = await redis.get("bar"); // undefined

console.log(fuga);
console.log(bar);
