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