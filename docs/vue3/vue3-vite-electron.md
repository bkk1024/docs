# vue+vite+electron

## 安装插件

1. `electron`：`npm install electron -D`。

   这个安装时可能会有安装不上的问题，大部分都是因为网络问题，可以先执行以下命令：

   ```
   npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
   // 这是单独设置了 electron 的下载源，这是国内的非 cdn 源
   ```

2. `vite-plugin-electron`：`npm install vite-plugin-electron -D`。

   这是将 vite 和 electron 结合在一起的，可以让我们非常方便的结合 electron 和 vue，需要做一些指定的配置：

   ```js
   /* vite.config.js */

   import { defineConfig } from "vite"
   import vue from "@vitejs/plugin-vue"
   import electron from "vite-plugin-electron"

   // https://vitejs.dev/config/
   export default defineConfig({
   	plugins: [
   		vue(),
   		electron({
   			entry: "electron/index.ts",
   		}),
   	],
   })
   ```

3. `electron-builder`：`npm install electron-builder -D`

   electron 打包工具。

> 文档书写时各个插件的版本如下：
>
> 1. `electron`：23.1.1
> 2. `vite-plugin-electron`：0.11.1
> 3. `electron-builder`：23.6.0

## 第一步配置 vite

这一步在上面安装插件`vite-plugin-electron`时已经写了。

## 第二步书写 electron 中的 index 文件

`electron`文件夹与`src`文件夹同级，文件结构如下

```
├─electron
├─public
└─src
    ├─assets
    └─components
```

```typescript
/* electron/index.ts */

import { app, BrowserWindow } from "electron"
/**
 * app：控制应用程序的时间生命周期
 * BrowserWindow：创建并控制浏览器窗口
 */
import path from "path"

let win: BrowserWindow | null
// 定义全局变量获取窗口实例

const createWindow = () => {
	win = new BrowserWindow({
		width: 1000, // 应用打开时的宽度
		height: 700, // 应用打开时的高度
		minWidth: 500, // 最小高度
		minHeight: 500, // 最小高度
		/**
		 * 由于桌面应用窗体有边框和 title 区域、menu 区域等，这一部分也是算入宽高的，因此这个参数就用来控制这些不显示 html 的部分是否算入上面写的宽高中
		 * true：配置的宽高就是整个显示 html 区域的宽高
		 * false：配置的宽高为整个应用的整体宽高
		 */
		useContentSize: false,
		// frame: false, // 默认 true，false 为去掉顶部导航，即包含最小化、最大化和关闭按钮的区域，去掉工具栏
		// minimizable: false, // 是否禁用最小化按钮，默认true，即不禁用
		// maximizable: false, // 是否禁用最大化按钮，默认true，即不禁用
		// resizable: false, // 是否可以改变应用窗体大小，默认true，可以改变
		webPreferences: {
			// devTools: false, // 是否开启开发者工具，默认true
			contextIsolation: false,
			nodeIntegration: true,
			// 允许 html 页面上的 JavaScript 代码访问 nodejs 环境 api 代码的能力，即与 node 集成的意思
		},
		// 配置窗口图标核心代码
		icon: path.join(__dirname, "../public/icon.ico"),
	})
	// if (app.isPackaged) {
	// 	win.loadFile(path.join(__dirname, "../index.html"))
	// } else {
	// 	win.loadURL(process.env.VITE_DEV_SERVER_URL as string)
	// }
	if (process.env.NODE_ENV !== "development") {
		win.setMenu(null) // 隐藏顶部工具栏，或者说顶部菜单
		win.loadFile(path.join(__dirname, "../dist/index.html"))
	} else {
		// VITE_DEV_SERVER_HOST 如果是undefined 换成  VITE_DEV_SERVER_HOSTNAME
		// 当前 vite-plugin-electron@0.11.1，上面两个都是 undefined，现在直接使用 process.env.VITE_DEV_SERVER_URL 就能获取完整的开发环境路径

		win.loadURL(process.env.VITE_DEV_SERVER_URL as string)
	}
}

// 在 electron 完成初始化时被触发
app.whenReady().then(createWindow)
```

> 上面代码中的注释提到`app.isPackaged`可能有问题，因此使用了`cross-env`插件来判断当前是为生产环境还是开发环境。
>
> 1. 安装插件：`npm install cross-env -D`
>
> 2. 修改`package.json`文件中`dev`的配置语句
>
>    ```json
>    {
>    	"scripts": {
>    		"dev": "cross-env NODE_ENV=development vite",
>    		"build": "vue-tsc --noEmit && vite build",
>    		"preview": "vite preview"
>    	}
>    }
>    ```
>
> 上面给开发环境的命令添加了`NODE_ENV`变量，这样在`js | ts`文件中即可使用`process.env.NODE_ENV`获取传入进来的值，以便判断当前环境。

## 第三步修改 package.json 文件

1. 目前，`electron`尚未支持 `"type": "module"`，因此要删除`package.json`中的相关配置，并将其更改为`"main": "dist-electron/index.js"`，因此我们在运行了`npm run dev`命令后，会生成`dist-electron`文件夹（`vite-plugin-electron@0.11.1`插件版本生成的文件夹），其中的`index.js`文件是`electron`应用的入口文件。

   ```json
   {
   	"name": "vite-electron",
   	"private": true,
   	"version": "0.0.0",
   	// "type": "module", // 删除这句话
   	"main": "dist-electron/index.js" // 添加这句话，记得删除注释
   }
   ```

2. 上面安装了`electron-builder`插件，因此先修改`build`命令语句

   ```json
   {
   	"scripts": {
   		"dev": "cross-env NODE_ENV=development vite",
   		"build": "vue-tsc --noEmit && vite build  &&  electron-builder",
   		"preview": "vite preview"
   	}
   }
   ```

3. `electron-builder`有很多打包配置，如下：

   ```json
   {
   	"build": {
   		"appId": "com.electron.desktop",
   		"productName": "electron",
   		"asar": true,
   		"copyright": "Copyright © 2022 electron",
   		"directories": {
   			"output": "release/"
   		},
   		"files": [
   			"dist",
   			"dist-electron"
   			// 因为 vite-plugin-electron@0.11.1 版本的插件生成的入口文件在这个文件夹下，因此要将其添加上去
   		],
   		"mac": {
   			"artifactName": "${productName}_${version}.${ext}",
   			"target": ["dmg"]
   		},
   		"win": {
   			"target": [
   				{
   					"target": "nsis",
   					"arch": ["x64"]
   				}
   			],
   			"artifactName": "${productName}_${version}.${ext}"
   		},
   		"nsis": {
   			"oneClick": false,
   			"perMachine": false,
   			"allowToChangeInstallationDirectory": true,
   			"deleteAppDataOnUninstall": false
   		},
   		"publish": [
   			{
   				"provider": "generic",
   				"url": "http://127.0.0.1:8080"
   			}
   		],
   		"releaseInfo": {
   			"releaseNotes": "版本更新的具体内容"
   		}
   	}
   }
   ```

## 配置窗口标题和应用图标

1. 窗口标题修改`index.html`中的 title 即可。

2. 首先应用图标要为`.ico`格式，其次，图标大小最小不能小于`256 * 256`。获取到图标后将其放在根目录下的其中一个文件夹中即可，这里我放在`public`文件夹下

3. 修改`package.json`配置

   <img src="electron - vite.assets/image-20230227235000910.png" alt="image-20230227235000910" style="zoom:50%;" />

4. 在`electron/index.ts`中添加一行代码：

   ```typescript
   import { app, BrowserWindow } from "electron"
   /**
    * app：控制应用程序的时间生命周期
    * BrowserWindow：创建并控制浏览器窗口
    */
   import path from "path"

   let win: BrowserWindow | null
   // 定义全局变量获取窗口实例

   const createWindow = () => {
   	win = new BrowserWindow({
   		// ... 其他配置

   		// 配置窗口图标核心代码
   		icon: path.join(__dirname, "../public/icon.ico"),
   	})
   	// ... 其他代码
   }

   // 在 electron 完成初始化时被触发
   app.whenReady().then(createWindow)
   ```
