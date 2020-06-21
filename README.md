# umashika

## Deno Instllation

```Shell
$ curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.1.1
```

### for Mac user

```Shell
brew install deno
```

### Umashika With [servest](https://github.com/keroxp/servest) and [transport](https://github.com/yoshixmk/transport)
```Shell
$ deno run --allow-net umashika.tsx
```

Server is going to listen : `http://localhost:3000` and `ws://localhost:8080`

If you send the following message using `client.ts`, a response will be returned.
```Shell
$ deno run --allow-net websockets/client.ts
```
```json:response
{"route": "UmaShikaRole_Response", "data": "uma"}
```

If you want to use your favorite websocket client please request below.  
Server is going to listen: `ws://localhost:8080`  
```json:request
{"route":"UmaShikaRole_Request","data":"Please tell me role."}
```

## Draft rules

### 馬鹿陣営 (Bakas)

#### 勝利条件

* 狼人を全員倒すこと

### 役

#### 馬人

* Horse persons
* Les personnes de cheval
* Las personas de caballo
* 马人

##### 人数

* 下記以外の残り全員

普通の馬。

#### 鹿人

* Deer persons
* Les personnes de biche
* Las personas de ciervo
* 鹿人

##### 人数

* 1

馬に見える鹿。すごく強力な能力(仮称)を持つ。

### 狼陣営 (Werewolves)

#### 勝利条件

* 生存している馬人と鹿人の合計人数が、生存している狼人と同じ人数になること

### 役

#### 狼人

* Werewolves
* Les loups-garous
* Las hombres lobo
* 狼人

##### 人数

* 1, 2, 3

馬人、鹿人にあだなす敵役。
毎日1馬鹿を食べることができる。

### 牛陣営 (Vacas)

#### 勝利条件

* 馬人の中にいる鹿人が倒された状態で、そのことを宣言して、鹿人が誰かを当てること

### 役

#### 牛人

* Cow persons
* Les personnes de vache
* Las personas de vaca
* 牛人

##### 人数

* 1

馬鹿陣営にいる鹿人の正体を推測する。その上で鹿人が倒されている状態で正体を公開し、宣言を行えば勝利。
正体の公開は夜以外のいつでも行うことができる。
宣言をはずしても試合は終了せず、1日に1回宣言ができる。

