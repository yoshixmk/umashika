# deno redis examples

## Get Starting

### Work redis
Start redis server on docker.
```Shell
docker run -p 6379:6379 -d -t redis:5
```

### Work example codes
Connect to redis server.  
load configuration from config/default.yml.  
```Shell
$ deno run --allow-net --allow-read=config/ --allow-env example.ts
```
