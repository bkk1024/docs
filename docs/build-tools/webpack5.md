# webpack5

[概念 | webpack 中文文档 | webpack 中文文档 | webpack 中文网 (webpackjs.com)](https://www.webpackjs.com/concepts/)

`webpack`是一个静态资源打包工具，它会以一个或多个文件作为打包的入口，将整个项目的所有文件编译组合成一个或多个文件输出出去。输出的文件就是编译好的文件(即浏览器能识别的文件)，就可以在浏览器端运行了。

我们将`webpack`输出的文件叫做`bundle`。

## 功能介绍

`webpack`本身功能是有限的：

- 开发模式：仅能编译 JS 中的`ES Module`语法
- 生产模式：能编译 JS 中的`ES Module`语法，还能压缩 JS 代码

# 基本配置

## 5 大核心概念

1. entry（入口）：指示`webpack`从哪个文件开始打包
2. output（输出）：指示`webpack`打包完之后的文件输出到哪里去，如何命名等
3. loader（加载器）：`webpack`本身只能处理 JS、JSON、等资源，其他资源需要借助 loader，`webpack`才能解析
4. plugins（插件）：拓展`webpack`的功能
5. mode（默认）：主要有两种模式：开发模式（development）、生产模式（production）

## 准备 webpack 配置文件

在项目根目录下创建文件：`webpack.config.js`

# 处理 css/less/sass 资源

[css-loader](https://www.webpackjs.com/loaders/css-loader/) 官方 loader

[less-loader](https://www.webpackjs.com/loaders/less-loader/) 官方 loader

[sass-loader](https://www.webpackjs.com/loaders/sass-loader/) 官方 loader

`webpack`本身是不能识别样式资源的，因此我们需要借助 loader 来解析样式资源。

我们找 loader 都应该去官方文档中找到对应的 loader ，然后使用。官方文档中没有的话可以去社区的 github 中搜索查询。

## css

1. 下载包

   ```
   npm install --save-dev css-loader style-loader
   // 官方中只让我们下载 css-loader，但是下面配置时其实还使用了 style-loader，所以这里同时也需要下载 style-loader
   ```

2. 引入 css 文件

   ```js
   /* main.js 中引入，这里文件其实也不一定叫 main.js，主要看你自己的入口文件命名 */
   import "common.css" // 这里的文件路径写自己的 css 文件的路径，我们这里只是演示所以就只写了文件名
   ```

3. 配置

   ```js
   /* 在 webpack.config.js 中进行配置 */
   module.exports = {
   	module: {
   		rules: [
   			{
   				test: /\.css$/i, // 这里使用正则匹配所有文件后缀为 .css 的文件，i 用来忽略大小写
   				use: ["style-loader", "css-loader"], // loader 的执行顺序是从后往前，即先 css-loader
   			},
   		],
   	},
   }
   ```

## less 和 sass

`less 和 sass`的整体流程与`css`一致，只是下载的 loader 有所区别

1. 下载包

   ```
   /* less */
   npm install less less-loader css-loader style-loader --save-dev
   // 因为 less 文件最终会被编译成 css 文件，因此我们也需要下载 css-loader 和 style-loader

   /* sass */
   npm install sass-loader sass css-loader style-loader --save-dev
   // 因为 sass 文件最终会被编译成 css 文件，因此我们也需要下载 css-loader 和 style-loader

   // 上面的步骤都安装了 css-loader 和 style-loader，如果你已经提前安装过了，可以将这个 npm 语句中的对应 loader 删除掉，以免重复安装
   ```

2. 引入文件

   ```js
   /* main.js 中引入 */
   import "common.less" // 这里的文件路径写自己的文件的路径，我们这里只是演示所以就只写了文件名
   import "common.sass"
   import "common.scss"
   ```

3. 配置

   ```js
   /* 在 webpack.config.js 中进行配置 */
   module.exports = {
   	module: {
   		rules: [
   			{
   				test: /\.less$/i,
   				use: ["style-loader", "css-loader", "less-loader"],
   			},
   			{
   				test: /\.s[ac]ss$/i, // sass 文件的后缀可能是 sass 也可能是 scss
   				use: ["style-loader", "css-loader", "sass-loader"],
   			},
   		],
   	},
   }
   ```

# 处理图片资源

项目文件中可能会有一些图片资源，这些图片资源有大有小，现在`webpack5`已经内置了处理图片文件的功能，但是，其中有一些配置也可以用来优化性能，如某些配置可以将文件转换为 base64 格式，[general-asset-type](https://www.webpackjs.com/guides/asset-modules#general-asset-type)。

当文件被转换为 base64 格式之后，其大小可能会比原先大 1/3 左右。对于一些较大的文件，这样做无疑是不好的，但是对一些小文件，其转为 base64 格式后也只增大了几 kb，这样对于包大小的影响不大，但是可以较少请求数量，减轻一些服务器的压力，无疑是可取的。

- 配置

  ```js
  module.exports = {
  	module: {
  		rules: [
  			{
  				test: /\.(png|jpe?g|gif|webp|svg)$/,
  				type: "asset",
  				paeser: {
  					dataUrlCondition: {
  						maxSize: 10 * 1024, // 10kb 以内的图片文件，会转换为 base64
  					},
  				},
  			},
  		],
  	},
  }
  ```

# 修改输出文件目录

在打包后将对应的文件输出到对应的文件夹下，`filename`配置可以指定输出路径。

这里处理 js 文件和图片文件，其他文件后续会有

```js
module.exports = {
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "static/js/main.js", // js 文件输出到 js 文件夹下
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|webp|svg)$/,
				type: "asset",
				paeser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 10kb 以内的图片文件，会转换为 base64
					},
				},
				generator: {
					filename: "static/images/[hash][ext][query]", // 图片资源输出到 images 文件夹下
				},
			},
		],
	},
}
```

# 自动清空上次打包内容

```js
module.exports = {
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "static/js/main.js",
		clean: true, // 自动清空上次打包内容
	},
}
```

# 处理字体图标资源

在阿里矢量库中下载字体图标资源，将其放入到对应的文件夹下：

- 将 iconfont.css 文件放入项目 css 文件夹下

- 将 .ttf .woff .woff2 字体文件放入项目 font 文件夹下

- 修改 iconfont.css 文件中引入的字体文件路径

- 配置

  ```js
  module.exports = {
  	module: {
  		rules: [
  			{
  				test: /\.(ttf|woff2?)$/,
  				type: "asset/resource",
  				generator: {
  					filename: "static/media/[hash][ext][query]", // 字体资源输出到 media 文件夹下
  				},
  			},
  		],
  	},
  }
  ```

# 处理其他资源

开发中可能还存在一些其他资源，如音频视频等。

在上面处理字体图标的配置中添加上响应的文件类型就行了

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
				type: "asset/resource",
				generator: {
					filename: "static/media/[hash][ext][query]", // 字体资源输出到 media 文件夹下
				},
			},
		],
	},
}
```

# 处理 js 资源

`webpack`其实已经对 js 资源有了自己默认的处理方式，但是其对 js 资源的处理是有限的，有时候我们为了兼容一些低版本的浏览器，也需要再对 js 做一些其他的处理。其次，在开发中，不同的人有不同的开发习惯，我们需要对其进行格式统一，因此也需要使用其他的一些工具。

## eslint

解决代码格式问题

1. 配置文件：eslint 的配置文件有很多写法：`.eslintrc | .eslintrc.js | .eslintrc.json` ，它们的区别在于格式不同

2. 具体配置：这里以`.eslintrc.js`为例

   ```js
   module.exports = {
   	// 解析选项
   	parserOptions: {
   		ecmaVersion: 6, // ES 语法版本
   		sourceType: "module", // ES 模块化
   		ecmaFeatures: {
   			// ES 其他特性
   			jsx: true, // 如果是 React 项目，就需要开启 jsx 语法
   		},
   	},
   	// 具体规则
   	rules: {
   		/*
           	"off" 或 0 - 关闭规则
   			"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   			"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   			规则文档：https://eslint.bootcss.com/docs/rules/
           */
   		semi: "error", // 禁止使用分号
   		"array-callback-return": "warn", // 强制数组方法的回调函数中有 return 语句，否则警告
   		"default-case": [
   			"warn", // 要求 switch 语句中有 default 分支，否则警告
   			{ commentPattern: "^no default$" }, // 允许在最后注释 no default, 就不会有警告了
   		],
   		eqeqeq: [
   			"warn", // 强制使用 === 和 !==，否则警告
   			"smart", // https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
   		],
   	},
   	// 继承
   	extends: [
   		/*
           	Eslint 官方的规则：eslint:recommended
           		https://eslint.bootcss.com/docs/rules/
   			Vue Cli 官方的规则：plugin:vue/essential
   				https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-eslint
   			React Cli 官方的规则：react-app
   				https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app
           */
   		"eslint:recommended",
   	],
   	// ...
   	// 其他详见 https://eslint.bootcss.com/docs/user-guide/configuring
   }
   ```

3. 因为开发中一点点写规则太费劲了，因此我们一般继承一个现有的规则，然后添加一点我们自己写的规则进行覆盖即可。

### eslint 在 webpack 中的使用

[EslintWebpackPlugin](https://www.webpackjs.com/plugins/eslint-webpack-plugin/#root) 官方文档

1. 安装 eslint 插件

   ```
   npm install eslint-webpack-plugin --save-dev

   // 如果未安装的 eslint>=7，那么还要先安装 eslint
   // npm install eslint --save-dev
   ```

2. 使用：插件都需要在配置文件中先引入，然后进行 new 调用

   ```js
   /* webpack.config.js */
   const ESLintPlugin = require("eslint-webpack-plugin")
   const path = require("path")

   module.exports = {
   	plugins: [
   		new ESLintPlugin({
   			// 检测哪些文件
   			context: path.resolve(__dirname, "src"),
   		}),
   	],
   }
   ```

3. 在项目根目录创建`.eslintrc.js`文件，然后编写检测规则：

   ```js
   module.exports = {
   	extends: ["eslint:recommended"],
   	env: {
   		node: true, // 启用 node 中全局变量
   		borwser: true, // 启用浏览器中全局变量
   	},
   	parserOptions: {
   		ecmaVersion: 6, // ES6
   		sourceType: "module", // ES module
   	},
   	rules: {
   		"no-var": 2, // 不能使用 var 创建变量
   	},
   }
   ```

4. `.eslintignore`文件可以让我们在 vscode 中安装的 eslint 插件忽视某些文件夹中的检测

   ```
   dist
   ```

## babel

解决兼容性问题，它可以将一些高版本的 js 语法转换为低版本的 js 语法，以兼容低版本浏览器

### 具体配置：

我们以`babel.config.js`文件配置为例

```js
module.exports = {
	// 预设
	presets: [],
}
```

- presets 预设简单说就是一组 babel 插件，拓展功能
- `@babel/preset-env`: 一个智能预设，允许您使用最新的 JavaScript。
- `@babel/preset-react`：一个用来编译 React jsx 语法的预设
- `@babel/preset-typescript`：一个用来编译 TypeScript 语法的预设

### 在 webpack 中使用

[babel-loader](https://www.webpackjs.com/loaders/babel-loader/)

1. 安装

   ```
   npm install -D babel-loader @babel/core @babel/preset-env
   ```

2. 配置

   ```js
   module.exports = {
   	module: {
   		rules: [
   			{
   				test: /\.js$/,
   				exclude: /node_modules/, // 不处理 node_modules 文件夹下的 js 文件
   				use: {
   					loader: "babel-loader",
   					options: {
   						// options 选项可以写在这里，也可以写在 babel.config.js 文件中，写在外部文件中主要是为了以后修改更加方便
   						presets: ["@babel/preset-env"],
   					},
   				},
   			},
   		],
   	},
   }
   ```

3. 在`babel.config.js`中写配置

   ```js
   /* babel.config.js */
   module.exports = {
   	presets: ["@babel/preset-env"], // 能编译 ES6 语法
   }
   ```

# 处理 html

使用插件让其能自动引入我们处理好的文件，如 js 文件，css 文件

[HtmlWebpackPlugin](https://www.webpackjs.com/plugins/html-webpack-plugin/#root)

1. 安装

   ```
   npm install --save-dev html-webpack-plugin
   ```

2. 使用

   ```js
   const HtmlWebpackPlugin = require("html-webpack-plugin")
   const path = require("path")

   module.exports = {
   	plugins: [
   		new HtmlWebpackPlugin({
   			// template：让插件生成 html 时以原先的 html 为模板
   			template: path.resolve(__dirname, "public/index.html"),
   		}),
   	],
   }
   ```

# 搭建开发服务器

[DevServer](https://www.webpackjs.com/configuration/dev-server/#root) 是 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 的配置，可以用于快速开发应用程序。

1. 安装

   ```
   npm install webpack-dev-server --save-dev
   ```

2. 使用

   ```js
   module.exports = {
   	devServer: {
   		host: "localhost", // 域名
   		port: "3000", // 端口号
   		open: true, // 自动打开浏览器
   	},
   }
   ```

3. 启动命令：`npx webpack server`

# 提取 css 成单独文件

目前 css 是被打包在了 js 文件中，当 js 文件加载时，会创建一个 style 来生成样式，这样对网站来说会出现闪屏现象，对用户体验不好，因此我们需要将 css 文件单独打包成一个文件，然后通过 link 标签来引入。

1. 安装包：[MiniCssExtractPlugin](https://www.webpackjs.com/plugins/mini-css-extract-plugin/)，这个插件会将 css 提取到单独的文件中

   ```
   npm install mini-css-extract-plugin --save-dev
   ```

2. 使用

   ```js
   const MiniCssExtractPlugin = require("mini-css-extract-plugin")

   module.exports = {
   	plugins: [
   		new MiniCssExtractPlugin({
   			filename: "static/css/main.css",
   		}),
   	],
   	module: {
   		rules: [
   			{
   				test: /\.css$/,
   				use: [MiniCssExtractPlugin.loader, "css-loader"],
   				// 这里将 style-loader 改成了 MiniCssExtractPlugin.loader，配置中其他用到了 style-loader 的地方也要相应的进行修改
   			},
   		],
   	},
   }
   ```

# 样式兼容性处理

使用`postcss`进行样式处理，让其能兼容低版本浏览器

1. 安装

   ```
   npm install --save-dev postcss-loader postcss postcss-preset-env
   ```

2. 使用：`postcss`的配置需要写在 css-loader 配置的下面，less-loader 等的配置的上面

   ```js
   module.exports = {
       plugins: [
           new MiniCssExtractPlugin()
       ],
       module: {
           rules: [
               {
                   test: /\.css$/,
                   use: [
                       MiniCssExtractPlugin.loader,
                       'css-loader',
                       // postcss 的配置，这个配置不光要写在 css 文件处理这里，如果用到了 less、sass 等，在它们的配置处也需要写
                       {
                           loader: 'postcss-loader',
                           options: {
                               postcssOptions: {
                                   plugins: [
                                       'postcss-preset-env' // postcss 的预设，能解决大多数样式兼容问题
                                   ]
                               }
                           }
                       }
                   ],
               },
               {
                   test: /\.less$/i,
                   use: [
                       MiniCssExtractPlugin.loader,
                       'css-loader',
                       // postcss 的配置
                       {
                           loader: 'postcss-loader',
                           options: {
                               postcssOptions: {
                                   plugins: [
                                       'postcss-preset-env' // postcss 的预设，能解决大多数样式兼容问题
                                   ]
                               }
                           }
                       }
                       'less-loader',
                   ],
               },
           ]
       }
   }
   ```

3. 上面的配置中，虽然我们使用了 postcss 的预设，但是并没有规定样式兼容要做到什么程度，因此，我们需要在`package.json`文件中添加一项配置：

   ```json
   {
   	// ...
   	"browserslist": [
   		// 'ie >= 8' // 兼容性做到 ie8 及以上
   		/* 实际我们一般不会做到 ie8 级别的兼容性，因此会用以下写法 */
   		"last 2 version", // 每个浏览器的最近两个版本
   		"> 1%", // 覆盖 99% 的浏览器
   		"not dead" // 在发布过程中没有死掉的浏览器的版本
   		// 最后的兼容会在这三个条件中取交集
   	]
   	// ...
   }
   ```

# 封装样式 loader 函数

即将一些重复性的配置代码提取出来封装为一个函数，函数中返回响应配置，这样能让配置文件更小一点

```js
// 获取处理样式的 loader
function getStyleLoader(pre) {
	return [
		MiniCssExtractPlugin.loader,
		"css-loader",
		{
			loader: "postcss-loader",
			options: {
				postcssOptions: {
					plugins: [
						"postcss-preset-env", // postcss 的预设，能解决大多数样式兼容问题
					],
				},
			},
		},
		pre,
	].filter(Boolean) // 用来过滤是否传参
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: getStyleLoader(),
			},
			{
				test: /\.less$/,
				use: getStyleLoader("less-loader"),
			},
		],
	},
}
```

# css 压缩

使用 [CssMinimizerWebpackPlugin](https://www.webpackjs.com/plugins/css-minimizer-webpack-plugin/#root) 来优化和压缩 css

1. 安装

   ```
   npm install css-minimizer-webpack-plugin --save-dev
   ```

2. 使用

   ```js
   const MiniCssExtractPlugin = require("mini-css-extract-plugin")
   const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

   module.exports = {
       module: {
           rules: {
               {
                   test: /\.css$/,
                   use: [MiniCssExtractPlugin.loader, "css-loader"],
               },
           }
       },
       optimization: {
           minimizer: [
               new CssMinimizerPlugin(),
           ]
       },
       plugins: [
           new MiniCssExtractPlugin()
       ]
   }
   ```

# html 和 js 压缩

默认生产模式就会进行 html 和 js 压缩。

# SourceMap

默认情况下，运行的代码经过编译后是非常难以阅读的，所有的文件都合并成了一个文件，因此一旦代码出错，我们要定位错误时是非常困难的，因此我们就需要 SourceMap，让后续代码出错后浏览器能快速的告诉我们具体出错的地方，以便我们进行错误定位，并进行修改。

SourceMap 会生成一个编译后的代码和源代码的一个映射文件（xxx.map），它能将编译后的代码和源代码联系起来。

[Devtool](https://www.webpackjs.com/configuration/devtool/) ，这个选项控制是否生成以及如何生成 SourceMap

- 开发模式下：

  ```js
  module.exports = {
  	mode: "development",
  	devtool: "cheap-module-source-map",
  }
  ```

- 生产模式下：

  ```js
  module.exports = {
      mode: 'production',
      devtool; 'source-map'
  }
  ```

# 提升构建打包速度

## HMR（HotModuleReplacement）

热模块替换（[devServer.hot](https://www.webpackjs.com/configuration/dev-server/#devserverhot)），其实在项目代码改变时，不再重新打包整个文件进行替换，而是只替换有改变的部分，这样能加快项目构建速度

```js
module.exports = {
	devServer: {
		host: "localhost", // 域名
		port: "3000", // 端口号
		open: true, // 自动打开浏览器
		hot: true, // 开启webpack的热模块替换特性
	},
}
```

> 这个特性从 webpack4 开始都是默认开启的，但是在这里，我们的 css 样式是经过 style-loader 处理过的，已经具备了 HMR 功能了，但是 js 还不行，因此我们可以在 main.js 文件中进行一步配置：
>
> ```js
> /* main.js */
> import demo from "js/demo"
>
> // 判断是否支持 HMR 功能
> if (module.hot) {
> 	module.hot.accept("js/demo")
> 	// 后续如果有其他 js 文件需要实现 HMR 功能的，也需要添加进来
> }
> ```
>
> 上面的代码片段给我们规定的 js 文件也实现了 HMR 功能，但是如果文件很多，我们每一个都需要进行配置的话就非常耗时间，因此在实际开发中，如果我们使用 vue 或者 react 进行开发时，我们会使用 [vue-loader](https://github.com/vuejs/vue-loader) 或 [react-hot-loader](https://github.com/gaearon/react-hot-loader) 来解决。

## OneOf

我们在`webpack.config.js`中配置了很多的 loader ，在默认情况下，每个文件都会按顺序去比对这些 loader ，这样是非常消耗性能的，因为每种文件都只有对应的一个 loader 能处理它，所以它根本就不需要去对比每一个 loader。

```js
module.exports = {
	module: {
		rules: [
			{
				oneOf: [
					{
						/* loader 配置 */
					},
					// ...
				],
			},
		],
	},
}
```

## Include & Exclude

我们在开发项目时，会用到很多的第三方库，这些第三方库都会被下载到`mode_modules`文件夹下，而这些文件时不需要进行编译可以直接使用的。因此我们在对文件进行处理时，要排除掉`node_modules`。

- Include：只处理某些文件
- Exclude：不处理某些文件
- 上面这两个只能写一个，要么包含，要么排除，同时使用会报错

```js
const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/, // 排除 node_modules
				// include: path.resolve(__dirname, '../src')
			},
		],
	},
	plugins: [
		new ESLintPlugin({
			context: path.resolve(__dirname, "../src"),
			exclude: /node_modules/, // 默认值
		}),
	],
}
```

## Eslint 和 Babel 的缓存

每次打包时，js 文件都要进行 eslint 检查和 babel 编译，速度比较慢，因此我们可以缓存之前的检查和编译结果，以便后续加快后续打包速度。

- babel

  ```js
  /* webpack.config.js */

  module.exports = {
  	module: {
  		rules: [
  			{
  				test: /\.js$/,
  				exclude: /node_modules/,
  				loader: "babel-loader",
  				options: {
  					// 开启 babel 缓存
  					cacheDirectory: true,
  					// 关闭缓存文件压缩
  					cacheCompression: false,
  				},
  			},
  		],
  	},
  }
  ```

- eslint

  ```js
  /* webpack.config.js */

  const ESLintPlugin = require("eslint-webpack-plugin")
  const path = require("path")

  module.exports = {
  	plugins: [
  		new ESLintPlugin({
  			context: path.resolve(__dirname, "./src"),
  			exclude: "node_modules",
  			cache: true, // 开启缓存
  			cacheLocation: path.resolve(__dirname, "./node_modules/.cache/eslintcache"), // 设置缓存保存位置
  		}),
  	],
  }
  ```

## 多进程打包

当项目越来越大时，打包速度就会越来越慢，我们想要继续提升打包速度，其实就是要提升 js 文件的打包速度，因为 js 文件是整个项目中最多的。而对 js 文件处理主要就是 eslint、babel、terser 三个工具，所以我们要提升它们的运行速度。

我们可以开启多进程打包，它的速度比单进程打包要快很多。

> 注：
>
> 1. 多进程打包要在项目打包特别耗时时使用，因为每个进程启动就要大约耗时 600ms。
> 2. 启动的进程数量就是 cpu 的核心数量，不同的 cpu 的核心数量不一样，因此不要开多了。

1. 获取 cpu 的核心数量，nodejs 的`os`模块可以直接使用，它能用来获取 cpu 信息。

   ```js
   const os = require("os")
   const threads = os.cpus().length // 获取 cpu 核心数量
   ```

2. 安装包

   ```
   npm install thread-loader --save-dev
   ```

3. 使用

   ```js
   /* webpack.config.js */

   const os = require("os")
   const threads = os.cpus().length // 获取 cpu 核心数量
   // terser-webpack-plugin 这个插件是 webpack 内置的，不需要进行安装
   // https://www.webpackjs.com/plugins/terser-webpack-plugin/#root
   const TerserWebpackPlugin = require("terser-webpack-plugin")

   module.exports = {
   	module: {
   		rules: [
   			{
   				test: /\.js$/,
   				exclude: /node_modules/,
   				use: [
   					{
   						loader: "thread-loader",
   						options: {
   							workers: threads, // 开启多进程数量
   						},
   					},
   					{
   						loader: "babel-loader",
   						options: {
   							cacheDirectory: true,
   							// ...
   						},
   					},
   				],
   			},
   		],
   	},
   	plugins: [
   		new ESLintPlugin({
   			context: path.resolve(__dirname, "./src"),
   			exclude: "node_modules",
   			cache: true, // 开启缓存
   			cacheLocation: path.resolve(__dirname, "./node_modules/.cache/eslintcache"),
   			threads, // 开启多线程
   		}),
   		// 这个插件用来压缩 js，是 webpack 内置的，虽然它可以用这种写法，但是我们更推荐下面的写法
   		// new TerserWebpackPlugin({
   		//     parallel: threads, // 开启多进程
   		// }),
   	],
   	optimization: {
   		minimize: true,
   		minimizer: [
   			new TerserWebpackPlugin({
   				parallel: true, // 开启多进程
   			}),
   			// ... 这里还有压缩 css 等就省略了
   		],
   	},
   }
   ```

# 减少代码体积

开发时我们定义了一些工具函数库，或者会引入第三方库。而这些库中的方法或组件我们可能并不会全部用上，但是在打包时，如果没有特殊处理的话，将这些库全部引入打包，这样就会造成打包的文件很大，但是实际上其中有很多没用的内容。因此我们就需要减少打包后的代码体积。

## TreeShaking

`Tree Shaking`是一个术语，通常用于描述移除 js 中没有使用的代码。它依赖`ES Module`。

_webpack 以及默认开启了这个功能，无需其他的配置_

## 减少 Babel 生成文件体积

babel 会为每个编译的文件插入辅助代码，这样会使得代码体积过大。我们需要将这些辅助代码单独打包为一个模块，以免重复使用。

`@babel/plugin-transform-runtime`: 禁用了 Babel 自动对每个文件的 runtime 注入，而是引入 `@babel/plugin-transform-runtime` 并且使所有辅助代码从这里引用。

1. 下载包：

   ```
   npm install @babel/plugin-transform-runtime --save-dev
   ```

2. 配置

   ```js
   module.exports = {
   	module: {
   		rules: [
   			{
   				test: /\.js$/,
   				exclude: /node_modules/,
   				use: [
   					// ...
   					{
   						loader: "babel-loader",
   						options: {
   							cacheDirectory: true,
   							cacheCompression: false,
   							plugins: ["@babel/plugin-transform-runtime"], // 使用插件
   						},
   					},
   				],
   			},
   		],
   	},
   }
   ```

## 压缩图片

开发时如果引入了大量的图片，那么图片资源的体积会很大，将来请求时速度也会比较慢，因此我们可以对图片进行压缩，减少图片体积。

> 注：这里压缩的是项目本地的图片资源。

[ImageMinimizerWebpackPlugin](https://www.webpackjs.com/plugins/image-minimizer-webpack-plugin/#root): 用来压缩图片的插件。

图片压缩有两种模式：

1. 无损压缩：

   ```
   npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
   ```

2. 有损压缩：

   ```
   npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D
   ```

3. [无损压缩和有损压缩的区别](https://baike.baidu.com/item/%E6%97%A0%E6%8D%9F%E3%80%81%E6%9C%89%E6%8D%9F%E5%8E%8B%E7%BC%A9)

4. 使用

   ```js
   const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")

   module.exports = {
   	optimization: {
   		minimizer: [
   			// ... 这里有 css 和 js 压缩配置
   			// 这里使用的是无损压缩
   			new ImageMinimizerPlugin({
   				minimizer: {
   					implementation: ImageMinimizerPlugin.imageminGenerate,
   					options: {
   						plugins: [
   							["gifsicle", { interlaced: true }],
   							["jpegtran", { progressive: true }],
   							["optipng", { optimizationLevel: 5 }],
   							[
   								"svgo",
   								{
   									plugins: [
   										"preset-default",
   										"prefixIds",
   										{
   											name: "sortAttrs",
   											params: {
   												xmlnsOrder: "alphabetical",
   											},
   										},
   									],
   								},
   							],
   						],
   					},
   				},
   			}),
   		],
   	},
   }
   ```

5. 配置完成后进行打包可能会出现报错

   ```
   Error: Error with 'src\images\1.jpeg': '"C:\Users\86176\Desktop\webpack\webpack_code\node_modules\jpegtran-bin\vendor\jpegtran.exe"'
   Error with 'src\images\3.gif': spawn C:\Users\86176\Desktop\webpack\webpack_code\node_modules\optipng-bin\vendor\optipng.exe ENOENT
   ```

   这里报错的原因是有两个文件没有下载下来，因此我们需要手动将其下载，并放到对应的目录下

   [jpegclub 官网地址](http://jpegclub.org/jpegtran/)

   [optipng 官网地址](http://optipng.sourceforge.net/)

> 注：如果项目中的所有图片在前期已经被压缩过了，那么也可以不使用这些插件进行压缩。

# 优化代码运行性能

## CodeSplit 代码分割

打包代码时会将所有的 js 文件打包到同一个文件中，导致这个文件的体积太大了，我们如果只要渲染首页，就应该只加载首页的 js 文件，其他文件不应该加载。

因此我们需要进行代码分割，在打包时生成多个 js 文件，渲染哪个页面就加载哪个 js 文件，这样加载的资源就更少，速度更快。

1. 多入口

   ```js
   const path = require("path")

   module.exports = {
   	// 有多个入口文件
   	entry: {
   		app: "./src/app.js",
   		main: "./src/main.js",
   	},
   	output: {
   		path: path.resolve(__dirname, "dist"),
   		filename: "[name].js",
   	},
   }
   ```

2. 多入口提取公共模块

   ```js
   const path = require("path")

   module.exports = {
   	// 有多个入口文件
   	entry: {
   		app: "./src/app.js",
   		main: "./src/main.js",
   	},
   	output: {
   		path: path.resolve(__dirname, "dist"),
   		filename: "[name].js",
   	},
   	optimization: {
   		// 代码分割配置
   		splitChunks: {
   			chunks: "all", // 对所有模块都进行分割
   			// 以下是默认值
   			// minSize: 20000, // 分割代码最小的大小
   			// minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
   			// minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
   			// maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
   			// maxInitialRequests: 30, // 入口js文件最大并行请求数量
   			// enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
   			// cacheGroups: { // 组，哪些模块要打包到一个组
   			//   defaultVendors: { // 组名
   			//     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
   			//     priority: -10, // 权重（越大越高）
   			//     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
   			//   },
   			//   default: { // 其他没有写的配置会使用上面的默认值
   			//     minChunks: 2, // 这里的minChunks权重更大
   			//     priority: -20,
   			//     reuseExistingChunk: true,
   			//   },
   			// },
   			// 修改配置
   			cacheGroups: {
   				// 组，哪些模块要打包到一个组
   				// defaultVendors: { // 组名
   				//   test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
   				//   priority: -10, // 权重（越大越高）
   				//   reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
   				// },
   				// 实际开发中用默认配置就足够了
   				default: {
   					// 其他没有写的配置会使用上面的默认值
   					minSize: 20, // 打包的最小文件体积
   					minChunks: 2,
   					priority: -20,
   					reuseExistingChunk: true,
   				},
   			},
   		},
   	},
   }
   ```

3. 按需加载，动态导入

   ```js
   // import 动态导入语法，会将动态导入的文件代码拆分为一个单独的模块，在需要使用时自动加载
   // 它的返回值是一个 promise
   import("./demo.js")
   	.then((res) => {
   		console.log(res)
   	})
   	.catch((error) => error)
   ```

   > 注：eslint 不识别 import 动态导入语法，这里会报错，因此我们需要在 eslint 的配置文件中添加一项配置
   >
   > ```js
   > /* .eslintrc.js */
   >
   > module.exports = {
   > 	// ... 其他配置
   > 	plugins: ["import"], // 使 eslint 识别 import 动态导入语法
   > }
   > ```

4. 上面第一点和第二点都是多入口文件的处理，这里我们进行单入口文件的处理。

   ```js
   const path = require("path")

   module.exports = {
   	entry: "./src/main.js",
   	output: {
   		path: path.resolve(__dirname, "dist"),
   		filename: "js/[name].js",
   		clean: true,
   	},
   	optimization: {
   		// 代码分割配置
   		splitChunks: {
   			chunks: "all", // 对所有模块都进行分割
   			// 以下是默认值
   			// minSize: 20000, // 分割代码最小的大小
   			// minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
   			// minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
   			// maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
   			// maxInitialRequests: 30, // 入口js文件最大并行请求数量
   			// enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
   			// cacheGroups: { // 组，哪些模块要打包到一个组
   			//   defaultVendors: { // 组名
   			//     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
   			//     priority: -10, // 权重（越大越高）
   			//     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
   			//   },
   			//   default: { // 其他没有写的配置会使用上面的默认值
   			//     minChunks: 2, // 这里的minChunks权重更大
   			//     priority: -20,
   			//     reuseExistingChunk: true,
   			//   },
   			// },
   		},
   	},
   }
   ```

5. 给动态导入的模块打包后的 js 文件进行统一命名

   ```js
   // /* webpackChunkName: 'name' */：这是 webpack 的命名规则，是固定语法，也叫做魔法命名
   // 这里只是进行了命名，我们还需要在配置中进行使用，看下面的配置代码
   import(/* webpackChunkName: 'demo' */ "./demo.js")
   	.then((res) => {
   		console.log(res)
   	})
   	.catch((error) => error)
   ```

   ```js
   /* webpack.config.js */

   module.exports = {
   	output: {
   		// ...
   		chunkFilename: "js/[name].js", // 给打包输出的其他文件命名
   	},
   }
   ```

6. 统一命名：

   ```js
   const path = require("path")
   const MiniCssExtractPlugin = require("mini-css-extract-plugin")

   module.exports = {
   	entry: "./src/main.js",
   	output: {
   		path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
   		filename: "static/js/[name].js", // 入口文件打包输出资源命名方式
   		chunkFilename: "static/js/[name].chunk.js", // 动态导入输出资源命名方式
   		assetModuleFilename: "static/media/[name].[hash][ext]",
   		// 图片、字体等资源命名方式（注意用hash）
   		// 这里给图片字体等资源命名之后，就不需要在 module.rules 中对这些资源进行处理时书写 generator.filename 配置进行命名了
   		clean: true,
   	},
   	plugins: [
   		// 提取css成单独文件
   		new MiniCssExtractPlugin({
   			// 定义输出文件名和目录
   			filename: "static/css/[name].css",
   			chunkFilename: "static/css/[name].chunk.css",
   		}),
   	],
   }
   ```

## Preload & Prefetch

我们前面已经做了代码分割，同时会使用 import 动态导入语法来进行代码按需加载（我们也叫懒加载，比如路由懒加载就是这样实现的）。

但是加载速度还不够好，比如：是用户点击按钮时才加载这个资源的，如果资源体积很大，那么用户会感觉到明显卡顿效果。

我们想在浏览器空闲时间，加载后续需要使用的资源。我们就需要用上 `Preload` 或 `Prefetch` 技术。

它们区别：

- `Preload`加载优先级高，`Prefetch`加载优先级低。
- `Preload`只能加载当前页面需要使用的资源，`Prefetch`可以加载当前页面资源，也可以加载下一个页面需要使用的资源。

它们的问题：兼容性较差。

- 我们可以去 [Can I Useopen in new window](https://caniuse.com/) 网站查询 API 的兼容性问题。
- `Preload` 相对于 `Prefetch` 兼容性好一点。

使用：

1. 下载包：

   ```
   npm i @vue/preload-webpack-plugin -D
   ```

2. 配置：

   ```js
   const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin")

   module.exports = {
   	plugins: [
   		new PreloadWebpackPlugin({
   			rel: "preload", // preload兼容性更好
   			as: "script",
   			// rel: 'prefetch' // prefetch兼容性更差
   		}),
   	],
   }
   ```

## Network Cache

将来开发时我们对静态资源会使用缓存来优化，这样浏览器第二次请求资源就能读取缓存了，速度很快。

但是这样的话就会有一个问题, 因为前后输出的文件名是一样的，都叫 main.js，一旦将来发布新版本，因为文件名没有变化导致浏览器会直接读取缓存，不会加载新资源，项目也就没法更新了。

所以我们从文件名入手，确保更新前后文件名不一样，这样就可以做缓存了。

```js
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
		// [contenthash:8]使用contenthash，取8位长度
		// contenthash：当文件内容发生变化时才会生成新的 hash 值
		filename: "static/js/[name].[contenthash:8].js", // 入口文件打包输出资源命名方式
		chunkFilename: "static/js/[name].[contenthash:8].chunk.js", // 动态导入输出资源命名方式
		assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
		clean: true,
	},
	plugins: [
		// ...
		new MiniCssExtractPlugin({
			// 定义输出文件名和目录
			filename: "static/css/[name].[contenthash:8].css",
			chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
		}),
	],
	optimization: {
		// ... 其他配置
		// 将所有打包后的文件的hash值提取成一个单独的文件进行保管
		runtimeChunk: {
			name: (entrypoint) => `runtime~${entrypoint.name}.js`,
		},
	},
}
```

## 解决 js 兼容性问题 CoreJS

过去我们使用 babel 对 js 代码进行了兼容性处理，其中使用@babel/preset-env 智能预设来处理兼容性问题。

它能将 ES6 的一些语法进行编译转换，比如箭头函数、点点点运算符等。但是如果是 async 函数、promise 对象、数组的一些方法（includes）等，它没办法处理。

所以此时我们 js 代码仍然存在兼容性问题，一旦遇到低版本浏览器会直接报错。所以我们想要将 js 兼容性问题彻底解决。

`core-js` 是专门用来做 ES6 以及以上 API 的 `polyfill`。

`polyfill`翻译过来叫做垫片/补丁。就是用社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性。

使用：

1. 下载包

   ```
   npm i @babel/eslint-parser -D
   npm i core-js
   ```

2. 修改配置文件：eslint

   ```js
   /* .eslintrc.js */

   module.exports = {
   	// ... 其他配置
   	parser: "@babel/eslint-parser", // 支持最新的最终 ECMAScript 标准
   }
   ```

3. 引入 core-js

   - 手动全部引入

     ```js
     /* 非配置文件的 js 文件中 */

     import "core-js"
     ```

   - 手动按需引入：例如这里使用了 promise

     ```js
     /* 非配置文件的 js 文件中 */

     import "core-js/es/promise"
     ```

   - 自动按需引入：需要使用到 babel 的预设配置

     ```js
     /* babel.config.js */

     module.exports = {
     	presets: [
     		[
     			"@babel/preset-env",
     			{
     				useBuiltIns: "usage", // 按需引入 core-js
     				corejs: {
     					version: "3", //  core-js 的版本，根据版本填写，目前是 3
     					proposals: true,
     				},
     			},
     		],
     	],
     }
     ```

## PWA

开发 Web App 项目，项目一旦处于网络离线情况，就没法访问了。

我们希望给项目提供离线体验。

渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。其中最重要的是，在 **离线(offline)** 时应用程序能够继续运行功能。内部通过 Service Workers 技术实现的。

[渐进式网络应用程序](https://www.webpackjs.com/guides/progressive-web-application/)

_PWA 的问题是兼容性比较差_

使用：

1. 下载包

   ```
   npm i workbox-webpack-plugin -D
   ```

2. 配置

   ```js
   /* webpack.config.js */
   const WorkboxPlugin = require("workbox-webpack-plugin")

   module.exports = {
   	// ...
   	plugins: [
   		// ... 其他配置
   		new WorkboxPlugin.GenerateSW({
   			// 这些选项帮助快速启用 ServiceWorkers
   			// 不允许遗留任何“旧的” ServiceWorkers
   			clientsClaim: true,
   			skipWaiting: true,
   		}),
   	],
   }
   ```

   ```js
   /* main.js */

   // 判断当前环境 serviceWorker 是否可用
   if ("serviceWorker" in navigator) {
   	window.addEventListener("load", () => {
   		navigator.serviceWorker
   			.register("/service-worker.js")
   			.then((registration) => {
   				console.log("SW registered: ", registration)
   			})
   			.catch((registrationError) => {
   				console.log("SW registration failed: ", registrationError)
   			})
   	})
   }
   ```

# ReactCli

[react-cli 的各项示例配置](https://yk2012.github.io/sgg_webpack5/project/react-cli.html#%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F%E9%85%8D%E7%BD%AE)

`react-cli`进行配置时与上述基础配置和优化的区别如下：

1. `eslint`的配置文件中，`extends`继承的规则变为`react-app`，这是 react 的官方规则。

   这里改完之后页面也能会有报错，因此需要继续更改配置`parserOptions.babelOptions.presets`为`[['babel-preset-react-app', false], 'babel-preset-react-app/prod']`。

   完整如下：

   ```js
   /* .eslintrc.js */

   module.exports = {
   	extends: ["react-app"], // 继承 react 官方规则
   	parserOptions: {
   		babelOptions: {
   			presets: [
   				// 解决页面报错问题
   				["babel-preset-react-app", false],
   				"babel-preset-react-app/prod",
   			],
   		},
   	},
   }
   ```

2. `webpack.config.js`中`module.rules`中对 js 的配置要更改为 react 的 jsx 语法的配置，即将`test`的配置更改为`/\.(jsx|js)$/`。

   上面在`webpack`中对 js 或者 jsx 进行处理的 loader 为 babel-loader，因此我们对`babel.config.js`中的配置也需要做一些修改，完整如下：

   ```js
   /* babel.config.js */

   module.exports = {
   	// 使用react官方规则
   	presets: ["react-app"],
   }
   ```

3. 在第一步的改动中，我们使用了`babel-preset-react-app`，而它需要环境变量`NODE_ENV`或`BABEL_ENV`来说明现在是开发环境还是生产环境还是测试环境。如果没有说明，则运行时会报错阻塞运行。虽然我们在配置时，会在配置文件中指明`mode: 'development'`或者`mode: 'production'`，但是这个配置是`webpack`运行时读取的，`babel`并不能通过这个配置知道当前的环境。因此我们还需要安装一个包 [cross-env](https://www.npmjs.com/package/cross-env)，这个是专门用来定义环境变量的一个库。

   安装完成后，修改`package.json`文件中的`scripts`，如将 dev 更改为`'dev': 'cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.js'`。生产环境（production）报错的修改也是类似。

4. 第三步完成后再次运行依然会报错，错误为无法解析`./App`这个组件，即我们在`main.js`中导入的`App`这个文件它无法解析。原因是我们在导入这个组件时只写了它的组件名，没有写后缀，所以在运行时`webpack`会自动帮我们补全这个后缀，但是这个组件的后缀为 .jsx，而`webpack`自动补全的文件名只能为 .js，因此报错。所以我们需要在`webpack`的配置文件中添加一项配置`'resolve': {extensions: ['.jsx', '.js', '.json']}`，让`webpack`自动补全时先补全 .jsx，如果不行则补全 .js，还不行则补全 .json，这三个都无法解析时，则报错。

5. 上面的步骤都做完后，我们测试`HMR`功能时发现，当修改样式时，它可以自动实现`HMR`，但是当修改 .jsx 文件时，整个页面都会刷新，说明它默认不能实现 .jsx 或者 .js 文件的`HMR`功能，虽然我们可以通过前面章节的方式实现这个功能，但是这样有些繁琐，而类似 react/vue 这种框架其实都提供了一些插件实现这个功能，因此我们这里去使用这些插件`react-refresh-webpack-plugin`。

6. 当我们完成了路由功能后(History 模式)，正常使用的时候没什么问题，但是当刷新页面时，可能会返回 404 错误。例如此时我们的路径为`localhost:3000/home`，当我们刷新页面时，浏览器会去`devServer`即`Sources`中找这个 home，但是它并不在其中，因为我们打包后的文件有 index、static 等等，但是不会有 home，因此我们需要让浏览器在刷新后去到 index 中，通过 index 定位到 home 资源。[devServer.historyApiFallback](https://www.webpackjs.com/configuration/dev-server/#devserverhistoryapifallback) 。

7. 最后一步，我们的`public`文件夹下可能会有一些资源（如网站的图标），在打包时我们希望它同步打包到`dist`目录下，但是实际上我们此时打包后，`dist`目录下并没有这些资源，因此我们需要使用一个插件`copy-webpack-plugin`，通过这个插件将我们希望保留的资源在打包时自动复制到`dist`目录下。但是这样也会有问题，因为`public`文件夹下的`index.html`文件我们已经处理过了，我们不希望它被这个插件再次处理，因此我们需要使用这个插件提供的一项配置`globOptions.ignore`来设置需要忽略的文件。

8. 生产模式和开发模式有些配置不同，因此我们需要获取到当前的环境，来判断使用哪套配置。在第三步中，我们使用了`NODE_ENV`这个变量来设置了不同的环境，因此我们在`webpack`的配置文件中，可以通过`process.env.NODE_ENV`来获取到我们在终端中敲入命令后，项目的运行环境。

9. 后续项目使用到的库越来越多时，`node_modules`中所有的文件打包到一起后，那个 js 文件会非常大，导致加载时间太长，因此我们需要将`node_modules`中一些较大的模块提取出来单独打包，最后再将其他的一起打包。

   ```js
   /* webpack.config.js */

   module.exports = {
       // ... 其他配置
       optimization: {
           splitChunks: {
               chunks: 'all',
               cacheGroups: {
                   // 这里的单独打包根据项目具体分析
                   // 将 react react-dom react-router-dom 单独打包成一个文件
                   react: {
                       test: /[//\]node_modules[//\]react(.*)?[//\]/,
                       name: 'chunk-react',
                       priority: 40, // 设置打包优先级
                   },
                   // 将 antd 单独打包
                   antd: {
                       test: /[//\]node_modules[//\]antd[//\]/,
                       name: 'chunk-antd',
                       priority: 30,
                   },
                   // 将 node_modules 剩余模块一起打包
                   libs: {
                       test: /[//\]node_modules[//\]/,
                       name: 'chunk-libs',
                       priority: 20,
                   },
               }
           }
       }
   }
   ```

# VueCli

[vue-cli 的各项示例配置](https://yk2012.github.io/sgg_webpack5/project/vue-cli.html)

`vue-cli`进行配置时与上述`react-cli`配置和优化的区别如下：

1. `webpack`自动补全部分将 .jsx 更改为 .vue，`module.rules`中处理 jsx 文件也更改为处理 js 文件（`test: /\.js$/`）。

2. 后续我们书写的文件为 .vue 文件，而这里没有编译 .vue 文件的 loader，因此我们需要添加一个编译 .vue 文件的 loader：[Vue Loader](https://vue-loader.vuejs.org/zh/)。

3. 在 vue 项目中，css 一般都是写在 .vue 文件中的，因此我们处理 css 的`style-loader`也需要改成`vue-style-loader`。

4. `.eslintrc.js`文件中的配置修改如下：

   ```js
   module.exports = {
   	root: true,
   	env: {
   		node: true,
   	},
   	extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
   	parserOptions: {
   		parser: "@babel/eslint-parser", // 这个包需要下载
   	},
   }
   ```

5. `babel.config.js`文件中的配置修改如下：

   ```js
   module.exports = {
   	presets: ["@vue/cli-plugin-babel/preset"],
   }
   ```

6. 此时运行项目会有警告，说明有两个环境变量标识没有定义，分别是`__VUE_OPTIONS_API__`和`__VUE_PROD_DEVTOOLS__`。

   在`webpack`中有一个插件`DefinePlugin`专门用来处理环境变量，我们这里使用它：

   ```js
   const { DefinePlugin } = require("webpack")

   module.exports = {
   	plugins: [
   		new DefinePlugin({
   			__VUE_OPTIONS_API__: true, // 是否使用选项式 API 书写方式，如果设置为 false，则在打包时不会将 vue3 中支持 vue2 选项式书写方式的代码打包
   			__VUE_PROD_DEVTOOLS__: false, // 生产模式不出现开发工具
   		}),
   	],
   }
   ```

   > 这里大家可能有疑问，上面不是使用了一个`cross-env`插件吗，为什么不使用它去解决这个问题？
   >
   > 这是因为`cross-env`定义的环境变量是给打包工具使用的，而这里我们需要的环境变量是给源代码使用的，因此需要使用额外的插件`DefinePlugin`。

# 原理部分

## loader

[Loader 原理 | 尚硅谷 Web 前端之 Webpack5 教程 (yk2012.github.io)](https://yk2012.github.io/sgg_webpack5/origin/loader.html#loader-概念)

## plugin

[Plugin 原理 | 尚硅谷 Web 前端之 Webpack5 教程 (yk2012.github.io)](https://yk2012.github.io/sgg_webpack5/origin/plugin.html#plugin-的作用)
