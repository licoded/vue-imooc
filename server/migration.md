> From https://github.com/wangtunan/vue-mooc/tree/9ad269e/server

### Packages Installation

```bash
npm i --save koa koa-json koa-session koa-bodyparser koa-router
npm i --save mongoose axios crypto-js
```

### Replace Import Paths

> use vscode `Ctrl+Shift+F`

```
'../../src/utils/utils.js' -> '../utils/utils.js'
```

### Replace MongoDB connection URL

First, start a docker instance of MongoDB.

> [Docker 安装 MongoDB | 菜鸟教程](https://www.runoob.com/docker/docker-install-mongodb.html)

```bash
docker pull mongo:latest
docker run -itd --name mongo -p 27017:27017 mongo
```

Then, open `config.js` file and replace dbs URL configuration.

### Fix Errors

- MongoParseError: option usecreateindex is not supported

  I annotated relevant code accroding to this [stackoverflow issue](https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported).
