# nodejs + express + history模式

## 前提

这里有个前提，即前端页面路由开启了`history`模式。

## 安装依赖

```sh
npm install express -S
npm install connect-history-api-fallback -S
```

## 配置如下

这里的代码中，我们的代码结构如下：

```
├──index.js
├──package.json
│
├─dist
│  │──index.html
│  │──vite.svg
│  │
│  └─assets
│       └─静态资源如js、css
```

配置如下：

```js
const express = require("express")
const path = require("path")
const history = require("connect-history-api-fallback")

const app = express()
const HTML_PATH = path.join(__dirname + "/dist/index.html")
// 这是静态资源的目录，即前端打包后的文件的目录
const staticFileMiddleware = express.static(
	path.join(__dirname + "/dist")
)

app.use(staticFileMiddleware)
app.use(
	history({
		disableDotRule: true,
		verbose: true,
	})
)
app.use(staticFileMiddleware)

app.get("/", (req, res) => {
	return res.sendFile(HTML_PATH)
  // 下面这个代码也行
	// return res.render(HTML_PATH)
})

app.listen(5001, () => {
	console.log(
		"服务器启动成功，地址：http://127.0.0.1:5001"
	)
})
```

