# エンジニアの人権
エンジニアはブログ持ってないと女の子にモテません   

## このリポジトリについて
1レポジトリで作る軽めのWebアプリケーションの例です   
以下の利点があります
- デプロイが一回で済む
- http-proxyのこととか考えなくていい
- レポジトリ数が少ない
- 共通の`.env`を持てる
- インフラ設計が少なくて済む(VPCとかやってられないよね)

**現在開発中に付き本番での仕様は想定していません**

- Nuxt
- Express
- Sequelize

## Usage
`.env`を用意する必要があります

```:./env
# Dockerで動かすPostgreSQL用
POSTGRES_USER=[username]
POSTGRES_PASSWORD=[password]
POSTGRES_DB=[database]

# TODO: ここは共通化できる
# Sequelize用
DB_NAME=[database]
DB_PASSWORD=[password]
DB_USER=[username]
DB_HOST=[host]

# APIではGET以外のメソッドを保護するためAPIKeyを設定します
API_KEY=[適当なランダム文字列]
```

```bash
$ yarn install
$ docker-compose up -d
$ ./node_modules/.bin/sequelize db:migrate
$ yarn dev
```

## 本番へのデプロイ
Herokuの仕様を想定しています   
ただし`.env`の内容を本番用に変えて、一つずつ環境変数に設定する必要があります