import { GithubDatabaseEntry } from "./github.ts";

const databaseUrl =
  "https://raw.githubusercontent.com/denoland/deno_website2/master/database.json";
const res = await fetch(databaseUrl);

const entries: Readonly<Record<string, GithubDatabaseEntry>> = await res.json();

for (const key of Object.keys(entries)) {
  //console.dir(entries[key]);

  const fetchUrl = `https://api.github.com/repos/${entries[key].owner}/${
    entries[key].repo
  }`;

  const repositories = await fetch(fetchUrl).then((r) => r.json());
  console.log(repositories.message)
  const starCount: number = repositories.stargazers_count;
  console.log(`${entries[key].owner} : ${entries[key].repo} : ${starCount}`);
}
