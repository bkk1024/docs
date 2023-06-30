# react 使用 svg

## 安装依赖

`npm i svg-sprite-loader`

## 配置处理 svg 文件

这里使用的 craco 来进行添加新的配置，关于 craco 的其他点可以看[craco](./craco.md)。

```js
const path = require("path")
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
	webpack: {
		// alias: {
		// 	"@": resolve("src")
		// },
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig.module.rules[1].oneOf = [
				...[
					{
						test: /.svg$/,
						include: resolve("./src/assets/svgs/svg"), // 存放svg的文件夹
						loader: "svg-sprite-loader",
						options: {
							symbolId: "icon-[name]",
						},
					},
				],
				...webpackConfig.module.rules[1].oneOf,
			]
			return webpackConfig
		},
	},
}
```

## 在存放 svg 的文件夹中添加文件

这里存放 svg 文件的路径如下

```
├─assets
│  └─svgs
│      │  index.js
│      │
│      └─svg
│              其他svg文件
```

### 编写下 svgs/index.js

```js
// 读取所有的svg文件
const req = require.context("./svg", false, /.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)

requireAll(req)
```

## 编写 SvgIcon 组件

```jsx
import React, { memo, useMemo } from "react"
import "../assets/svgs/index.js"

const SvgIcon = memo((props) => {
	const { className, svgClick, name } = props

	return (
		<svg className={className || ""} onClick={svgClick}>
			<use xlinkHref={"#icon-" + name}></use>
		</svg>
	)
})

export default SvgIcon
```

## 在其他组件中中使用 SvgIcon

```jsx
import React from "react"
import SvgIcon from "../components/SvgIcon"

const MainContent = () => {
	return (
		<div>
      {/* 这里传入的 name 要跟 svg 文件名一致 */}
      <SvgIcon name="interview" className="w-12 h-12" />
		</div>
	)
}

export default MainContent
```



