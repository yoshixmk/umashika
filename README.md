# How to use

## Instration
```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.0.0 
```

## Using [servest](https://github.com/keroxp/servest)
```bash
$ deno run --allow-net index.tsx
```
listen: `http:localhost:3000`

## Using [oak](https://deno.land/x/oak)
```bash
$ deno run --allow-net --allow-write oak.tsx
```
listen: `http:localhost:4000`
