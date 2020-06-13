const res = await fetch('https://raw.githubusercontent.com/denoland/deno_website2/master/database.json');

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
