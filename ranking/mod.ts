import { GithubDatabaseEntry } from "./github.ts";
import { encode } from "https://deno.land/std/encoding/base64.ts";

if (Deno.args.length < 2) {
  console.log(Deno.args);
  console.info(
    "Please input your github account. Limit 5000 req per hour by GitHub.",
  );
  console.info("ex: deno run --allow-net <username> <password>");
  Deno.exit(1);
}

const username = Deno.args[0];
const password = Deno.args[1];

const databaseUrl =
  "https://raw.githubusercontent.com/denoland/deno_website2/master/database.json";
const res = await fetch(databaseUrl);

const entries: Readonly<Record<string, GithubDatabaseEntry>> = await res.json();

// 表示させたいリポジトリ情報
type Repository = {
  name: string;
  full_name: string // owner name +  repository name
  ;
  html_url: string;
  // description: string,
  stargazers_count: number;
  forks: number;
  watchers: number;
  subscribers_count: number;
  archived: boolean;
};

type RepositoryKey = keyof Repository;

const result: Repository[] = [];
for (const key of Object.keys(entries)) {
  //console.dir(entries[key]);

  const fetchUrl = `https://api.github.com/repos/${entries[key].owner}/${
    entries[key].repo
  }`;

  const json = await fetch(fetchUrl, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${encode(username + ":" + password)}`,
    },
  }).then((r) => r.json());

  result.push(json as Repository);

  if (result.length > 2) {
    break;
  }
}

// result.sort(
//     (a, b) =>
//     a.stargazers_count > b.stargazers_count ||
//     a.forks > b.forks ||
//     a.watchers > b.watchers ||
//     a.subscribers_count > b.subscribers_count
// )

console.table(result, [
  "name",
  "full_name",
  "html_url",
  "stargazers_count",
  "forks",
  "watchers",
  "subscribers_count",
  "archived",
]);
