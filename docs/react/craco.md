# craco

在使用`npx create-react-app 项目名`创建 react 项目后，它默认会将 webpack 的配置给隐藏，我们需要使用其`eject`命令才能查看和编辑 webpack 配置，这很麻烦，且其自己生成的 webpack 配置也很繁琐。

因此，我们可以使用`craco`，它让我们无需使用`eject`显示 webpack，也可以去编辑 webpack 配置。

## 安装

`npm i @craco/craco --save`

## 配置

1. 首先在项目根目录创建一个配置文件`craco.config.js`，并导出一个默认配置

   ```js
   /* craco.config.js */
   
   module.exports = {
     // 这里书写一些要添加的配置
   }
   ```

2. 修改`package.json`中的`scripts`

   ```json
   // 这里是将原来的 react-scripts 改为了 craco
   "scripts": {
   	"start": "craco start",
   	"build": "craco build",
   	"test": "craco test",
   	"eject": "craco eject"
   },
   ```

[配置 | CRACO](https://craco.js.org/docs/category/configuration/)