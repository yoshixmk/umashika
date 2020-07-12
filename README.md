# Umashika
[![(Deno)](https://img.shields.io/badge/deno-v1.1.3-green.svg?style=flat-square&logo=deno)](https://deno.land)
[![vr scripts](https://badges.velociraptor.run/flat.svg)](https://velociraptor.run)

## Prepare
- [Deno](https://deno.land/)
- [Velociraptor](https://github.com/umbopepato/velociraptor) (Optional)
- [Trex](https://nicedoc.io/crewdevio/Trex) (Only needs Development)

## Get Started
```Shell
$ deno run --allow-net --allow-read --importmap=import_map.json --unstable umashika.ts
```
or using vr
```Shell
$ vr start
```

Server is going to listen : `http://localhost:3000` and `ws://localhost:8080`

## Development
### Develop using Trex.
Download packages from an import_map.json file.
```Shell
$ Trex i
```
Other install, [how to use](https://github.com/crewdevio/Trex#how-to-use)

### Create lock.json
```Shell
$ Trex --lock --importmap umashika.ts
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

