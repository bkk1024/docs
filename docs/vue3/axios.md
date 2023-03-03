# axios

## 配置 axios

```js
// 配置 axios

import axios from "axios"

const request = axios.create({
	// baseURL: "http://127.0.0.1:5000",
	// 如果配置了代理跨域，其 target 与 baseURL 重复，就不需要重复配置
	timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
	console.log("config", config)
	return config
})

// 响应拦截器
request.interceptors.response.use(
	(res) => {
		//
		return res
	},
	(error) => {
		//
		return error
	}
)

export default request
```
