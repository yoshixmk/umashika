# Dialogflow with http servers at local

## Prepare
- Dialogflow
  - Setup by [this](https://qiita.com/h-takauma/items/0971927a9b6e6193331c#2-1-agent%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B)
- ngrok by 3000
```Shell
$ ngrok http --region jp 3000
```

## Using abc
```
$ deno run --allow-net abc/example.ts
```
