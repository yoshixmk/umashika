import coffee from "https://deno.land/x/coffee/mod.ts";

export const redisHost: string = coffee.get("database.redis.hostname").string();
export const redisPort: number = coffee.get("database.redis.port").number();
