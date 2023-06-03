# react18

## 前言

这个学习笔记是学习[b站 | 李立超老师 | React18教程](https://www.bilibili.com/video/BV1bS4y1b7NV?p=13&vd_source=16ba8f2131220773e361fb00f3cb12fb)的记录。

## react中三个常用的api

1. `React.createElement()`：它用来创建一个 react 元素，这个 react 元素并不是真正的 DOM 元素。它有三个参数：

   1. 元素名/组件名：html标签必须小写
   2. 元素的属性：如 id、class 等
      - 在设置事件时，属性名需要修改为驼峰命名法
      - class 属性需要使用 className 来设置
   3. 子元素/文本内容：可以有多个，多个使用逗号隔开

   ```js
   const button = React.createElement("button", {
     id: "btn",
     type: "button",
     className: "btn1",
     onClick: () => alert("haha")
   }, "点击")
   
   const div = React.createElement("div", {}, button, "点击前面的按钮")
   ```

2. `ReactDOM.createRoot()` ：它用来创建 react 根元素，需要一个 DOM 元素作为参数。

   ```js
   const root = ReactDOM.createRoot(document.querySelector("#root"))
   ```

3. `.render()`：它用来将 react 元素渲染到根元素中。

   - 一般一个页面中只有一个根元素
   - 它会清除根元素中的所有内容，然后用 react 元素替代
   - 当重复调用这个方法时，react 会将两次的渲染结果进行比较，然后只修改发生变化的部分（diff算法/DOM差分算法）

   ```js
   const button = React.createElement("button", {
     id: "btn",
     type: "button",
     className: "btn1",
     onClick: () => alert("haha")
   }, "点击")
   const div = React.createElement("div", {}, button, "点击前面的按钮")
   const root = ReactDOM.createRoot(document.querySelector("#root"))
   
   root.render(div)
   ```

`render`的旧版本用法如下：`ReactDOM.render(div, document.querySelector("#root"))`。

## JSX

在上一节，我们了解到了一个方法`React.createElement()`，它的作用如下：

```js
// 当我们写下这句话时，其实我们想要它实现的效果为：<button>我是按钮</button>
const button = React.createElement("button", {}, "我是按钮")
```

因此，react 在这里拓展了 jsx 语法。

```jsx
const button = <button>我是按钮</button>
```

在 react 中可以通过 jsx 来创建 react 元素，但是 jsx 需要被翻译为 js 代码才能被 react 执行，因此我们需要引入 babel。jsx 是 js 的拓展，或者说它是`Reqact.createElement()`的语法糖。

jsx 的注意事项：

1. jsx 不是字符串，不要加引号，可以使用()

   ```jsx
   const div = (
     <div>
       <button>我是按钮</button>
     </div>
   )
   ```

2. jsx 中的 html 标签应该小写，但是 react 组件应该以大写开头

3. jsx 中有且只有一个根组件

4. jsx 的标签必须正确结束（自结束标签必须写"/"）

5. 在 jsx 中，可以使用 {} 嵌入表达式

   - 如果表达式是`空值、boolean、undefined`，则不会显示

   ```jsx
   const div = <div>
     {name}
     <div>{1 + 1}</div>
     <div>{fn(0)}</div>
     <div>{true}</div>
   </div>
   ```

6. 在 jsx 中，属性可以直接在标签中设置

   - class 需要使用 className 设置
   - style 中必须使用对象设置，多单词组合需要使用驼峰形式，如`background-color => backgroundColor`

   ```jsx
   const div = <div 
                 id="mydiv" 
                 className="box" 
                 style={{ 
             			color: "red", 
                   backgroundColor: "gray" 
           		}}></div>
   ```

## 渲染列表

jsx 会将数组中的内容自动提取出来进行填充，如：

```jsx
const arr = ["zhangsan", "lisi", "wangwu"]
const div = <div>{arr}</div>
// 这里的结果为 <div>zhangsanlisiwangwu</div>
```

因此，我们可以利用这个特点，依据原有的数组，生成一个新的数组，这个新的数组中的内容为 react 元素：

```jsx
const arr = ["zhangsan", "lisi", "wangwu"]
let lis = arr.map(item => <li>{item}</li>)
// 这个数组为 ["<li>zhangsan</li>", "<li>lisi</li>", "<li>wangwu</li>"]
const list = <ul>{lis}</ul>
// 这里结果为：<ul> <li>zhangsan</li> <li>lisi</li> <li>wangwu</li> </ul>
```

这样，就得到了我们想要的列表。

> 在渲染列表时，每个列表元素都应该给一个唯一的 key。如下，这里的`item.key`只是示例，这个 key 也可以是其他的唯一标识：
>
> `let lis = arr.map(item => <li key="item.key">{item}</li>)`
>
> 如果不指定 key，react 会按顺序从列表第一个对比到最后一个，有 key，则会根据 key 去进行比较。这样的区别在于，如果我们列表中的改变是某些元素的顺序变了（如在某个地方插入了一个属性），则没有 key 时，react 会更新从插入元素开始的所有元素，而有 key 时，则只会更新插入的元素。

## 手动创建 react 项目

在创建  react 项目时，我们可以选择使用 npm 等作为包管理器来对项目进行管理。react 官方为了方便我们的开发，提供了`react-scripts`包，这里面提供了项目开发中的大部分依赖，大大简化了项目开发。

开发步骤如下：

1. 创建项目，目录结构如下：

   ![image-20230603135002084](./react18.assets/image-20230603135002084.png)

2. 进入项目目录，执行命令初始化项目：`npm init -y`

3. 安装项目依赖：`npm install react react-dom react-scripts -S`

4. 在`public/index.html`中添加一个根元素`<div id="root"></div>`

5. 在`scr/index.js`中添加一点代码：

   ```js
   // 引入 ReactDOM
   import ReactDOM from "react-dom/client"
   
   // 创建一个 jsx
   const App = <div>
     <h1>这是一个 react 项目</h1>
     <p>这是手动创建的项目</p>
   </div>
   
   // 获取根元素
   const root = ReactDOM.createRoot(document.querySelector("#root"))
   root.render(App)
   ```

6. 然后在终端中使用`npx react-scripts start`或者`npx react-scripts build`可以启动项目或者打包项目。但是这样命令太长，因此我们可以在`package.json`中添加如下代码：

   ```json
   // 这里可以省略 npx，写上也是一样的效果
   "scripts": {
     "dev": "react-scripts start",
   	"build": "react-scripts build"
   },
   ```

7. 最后我们使用`npm run dev`或者`npm run build`就可以启动项目或者打包了

## react 组件

react 中定义组件的方式有两种：基于函数的组件和基于类的组件。

### 函数式组件

函数组件就是一个返回 jsx 的普通函数，简单示例如下：

```js
/* 在 App.js 中创建组件，并导出 */
const App = () => {
  return <div>我是一个函数组件</div>
}

export default App


/* 在 index.js 中引入组件，并使用 */
// 引入 ReactDOM
import ReactDOM from "react-dom/client"
// 引入样式
import "./index.css"
// 引入组件
import App from "./App"

// 获取根元素
const root = ReactDOM.createRoot(document.querySelector("#root"))
// 渲染 App 组件
root.render(<App />)
```

### 类组件

```js
import React from "react"

// 类组件必须要继承 React.Component
class App extends React.Component {
  // 类组件中，必须添加一个 render() 方法，且方法的返回值要是一个 jsx
  render() {
    return <div>我是一个类组件</div>
  }
}

export default App
```

> 相较于函数组件，类组件的书写要麻烦一些，但是它们的作用是一样的。