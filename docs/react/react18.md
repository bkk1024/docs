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

::: tip

在渲染列表时，每个列表元素都应该给一个唯一的 key。如下，这里的`item.key`只是示例，这个 key 也可以是其他的唯一标识：

`let lis = arr.map(item => <li key="item.key">{item}</li>)`

如果不指定 key，react 会按顺序从列表第一个对比到最后一个，有 key，则会根据 key 去进行比较。这样的区别在于，如果我们列表中的改变是某些元素的顺序变了（如在某个地方插入了一个属性），则没有 key 时，react 会更新从插入元素开始的所有元素，而有 key 时，则只会更新插入的元素。

:::

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

::: tip

1. 相较于函数组件，类组件的书写要麻烦一些，但是它们的作用是一样的。
2. 我们一般会在`src`中创建一个文件夹`Components`专门用来放置组件文件。

:::

## 事件

在 react 中，事件需要通过元素的属性来设置，且事件的属性需要使用驼峰命名法，如：

- onclick => onClick
- onchange => onChange
- 不能使用类似`addEventListener`的方法给元素绑定事件，不会生效

属性值不能直接执行代码，而是需要一个回调函数，不能写此类代码：

- onClick="alert(123)"，这类代码不会执行
- onClick="{() => alert(123)}"，这类代码会执行

完整示例代码：

```jsx
const test = () => {
  // 事件
	const clickEvent = (event) => {
	  event.preventDefault() // 取消默认行为
	  event.stopPropagation() // 取消冒泡
	  alert(123)
	}

  // 绑定事件
  return <button onClick={clickEvent}>点我</button>
}

export default test
```

在 react 中，无法通过`return false`取消默认行为。

- react 事件中同样会传递事件对象，可以在响应函数中定义参数来接收事件对象
- react 中的事件对象不是原生的事件对象，是经过 react 包装后的事件对象
- 由于对象进行了包装，所以使用过程中我们无需再去考虑兼容性问题

## Props 父组件给子组件传值

### 函数组件

```jsx
/* 父组件 */
import Son from "./Son"
const Father = () => {
  // 绑定事件
  return <div>
    {/* test 就是父组件给子组件传的一个参数 */}
    	<Son test="123" />
    </div>
}

export default Father
```

```js
/* 子组件，son */
const Son = (props) => {
  // 这个 props 中就包含父组件给子组件传递的所有参数，这里是:{test: '123'}
  // 绑定事件
  return <button onClick={clickEvent}>{props.test}</button>
}

export default Son
```

::: tip 

函数式组件中，在函数中传入一个`props`参数，这个参数中就包含父组件给子组件传递的所有的数据。

在子组件中使用`props.xxx`就可以使用相应的数据。

**`props`是只读的，不能修改。**

:::

### 类组件

类组件中的`props`是存储到类的实例对象中的，可以直接通过实例对象访问：`this.props.xxx`。

## state：响应式数据

在 react 中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染。因此我们就需要一个特殊的变量，这个变量的功能就是当它发生变化时，会使得组件重新渲染。因此 react 给我们提供了 state 来解决这个问题。

`state`和`props`类似，都是一种存储属性的方式，但是不同点在于`state`只属于当前组件，其他组件无法访问，且`state`是可变的，当其发生变化后，相关的组件会一起刷新。

`state`相当于一个变量，只是它在 react 中进行了注册，react 会监控这个变量的变化，当 state 发生变化时，会自动触发组件的重新渲染，使得我们的修改可以在页面中呈现出来。

### 函数组件中

在函数组件中，我们需要通过钩子函数`useState()`获取`state`。

`useState()`会返回一个数组，数组中包含两个数据：

1. 第一个元素就是我们传入的初始值，它只用来显示数据，直接修改不会触发组件的重新渲染
2. 第二个元素是一个函数，通常我们将其命名为`SetXxx`，这个函数用来修改`state`，调用其修改`state`后会触发组件的重新渲染，并且使用函数中的值作为新的`state`的值

```jsx
import { useState } from "react"
import React from 'react'

const SetState = () => {
  console.log("SetState 组件渲染")

  const [counter, setCounter] = useState(12)

  const addHandler = () => {
    setCounter(counter + 1)
    console.log(counter)
  }
  const lessHandler = () => {
    setCounter(counter - 1)
    console.log(counter)
  }
  
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addHandler}>add</button>
      <button onClick={lessHandler}>less</button>
    </div>
  )
}

export default SetState
```

::: warning

1. 当`state`的值是对象时，修改`state`其实是使用新的对象替换旧的对象，这样就会导致如果新对象中缺少某些属性，则会丢失这些属性。因此我们可以使用浅拷贝的方法去实现更新：

   ```js
   const [user, setUser] = useState({name: "zhangsan", age: 18})
   
   // 方法一：
   const newUser = Object.assign({}, user)
   newUser.age = 28
   setUser(newUser)
   
   // 方法二：
   setUser({...user, name: "lisi"})
   ```

2. 当通过`setState()`去修改一个`state`时，它并不是修改了当前的`state`，而是修改了组件下一次渲染的`state`。

3. `setState()`会触发组件的重新渲染，它是异步的。当检测到有`setState()`时，会先将其放入任务队列，然后一直等待所有代码执行完毕后，才会执行这个任务队列，并且同一任务队列中相同的`setState()`会合并执行，只执行一次。

4. 当调用`setState()`需要用旧的`state`的值时，一定要注意有可能出现计算错误的情况，即多次修改使用的是同一个`state`的值。为了避免这种情况，我们可以通过为`setState()`传递回调函数的形式来修改`state`。

   ```js
   const addHandler = () => {
     // 这个 setTimeout 是模拟代码执行速度慢时，快速点击按钮导致多次修改state时出错的情况
     setTimeout(() => {
       // setState() 中回调函数的返回值将会成为新的state值，
       // 回调函数执行时，react会将最新的state作为参数传递，
       // 它会保证每次的setState的使用的state都是最新的，不会多次使用同一个
       setCounter((preCounter) => preCounter + 1)
     }, 1000)
   }
   ```

:::

### 类组件中

类组件中的`state`统一存储到实例对象的`state`属性中，可以通过`this.state`来访问，通过`this.setState()`来对其进行修改。

```jsx
import React, { Component } from 'react'

export default class ClassCom extends Component {
  state = {
    count: 0,
    user: {
      name: "张三",
      age: 18
    }
  }

  clickHandler = () => {
    // this.setState({ count: this.state.count + 1 })
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
```

::: tip

当我们通过`this.setState()`修改`state`时，react 只会修改我们设置要修改的属性，其他属性不会丢失，但是这仅限于直接存储于`state`中的属性，深层次的会丢失，如：

```js
state = {
  user: {
    name: "张三",
    age: 18
  }
}
clickHandler = () => {
  this.setState(prevState => {
    return {
      // 这里会丢失 age 属性
      // user: { name: "李四" }
      // 这样就不会丢失 age 了
      user: {...prevState.user, name: "李四"}
    }
  })
}
```

:::

### 双向绑定

如果我们将`state`绑定在 input 标签上，要实现在 input 中输入数据也能同步修改`state`的效果，则需要给 input 绑定一个事件`onChange`，将我们输入的数据更新到`state`。

```jsx
import { useState } from "react"
import React from 'react'

const SetState = () => {
  console.log("SetState 组件渲染")

  const state = useState(12)
  const [counter, setCounter] = state

  const addHandler = () => {
    setCounter(counter + 1)
    console.log(counter)
  }
  const lessHandler = () => {
    setCounter(counter - 1)
    console.log(counter)
  }
  // 绑定 onChange 事件，实现双向数据绑定
  const changeHandler = (event) => {
    console.log(event.target.value)
    setCounter(event.target.value)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <input value={counter} onChange={changeHandler} />
      <button onClick={addHandler}>add</button>
      <button onClick={lessHandler}>less</button>
    </div>
  )
}

export default SetState
```

## Ref：获取DOM对象

### 函数组件

- 我们可以通过 js 原生的方式来获取DOM，但是不建议这么做

- 直接从 react 处获取DOM对象

  1. 创建一个存储DOM对象的容器，使用`useRef()`钩子函数

     ```jsx
     import { useRef } from "react"
     import React from 'react'
     
     const SetState = () => {
     	// 创建存储DOM对象的容器
       const h1Ref = useRef()
     
       const clickHandler = () => {
         console.log(h1Ref)
       }
       return (
         <div>
           <h1>哈哈</h1>
           <button onClick={clickHandler}>click</button>
         </div>
       )
     }
     
     export default SetState
     ```

     ::: tip

     1. react中的钩子函数只能用于函数组件或者自定义钩子
     2. 钩子函数只能直接在函数组件中调用

     :::

  2. 将容器设置为想要获取DOM对象元素的`ref`属性

     ```jsx
     import { useRef } from "react"
     import React from 'react'
     
     const SetState = () => {
     	// 创建存储DOM对象的容器
       const h1Ref = useRef()
     
       const clickHandler = () => {
         console.log(h1Ref)
       }
       return (
         <div>
         	{/* 设置 h1 的 ref 属性 */}
           <h1 ref={h1Ref}>哈哈</h1>
           <button onClick={clickHandler}>click</button>
         </div>
       )
     }
     
     export default SetState
     ```

     

::: tip

`useRef()`返回的就是一个普通的 js 对象，所以我们直接使用`{current: null}`创建一个 js 对象，也可以代替`useRef()`，但是我们自己创建的对象在组件重新渲染时，每次都会创建一个新对象，这个新对象与上一次的对象不是同一个，而`useRef()`创建的对象可以保证每次渲染的对象都是同一个对象。

当我们需要一个对象不会因为组件的重新渲染而改变时，就可以使用`useRef()`，在获取DOM对象时，我们建议使用`useRef()`。

:::

### 类组件

流程与函数组件类似，如下：

```jsx
import React, { Component } from 'react'

export default class ClassCom extends Component {
  // 创建容器存储DOM对象
  h1Ref = React.createRef()

  clickHandler = () => {
    console.log(this.h1Ref)
  }

  render() {
    return (
      <div>
        <h1 ref={this.h1Ref}>test</h1>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
```

## 标签插入内容：可以理解为vue插槽

`props.children`可以获取到给组件中插入的内容：

```jsx
/* Card.js */
import React from 'react'

const Card = (props) => {
  return (
    // 这样表示我们不光要使用自己的样式，也要使用传入过来的组件的样式
    <div className={`card ${props.className}`}>{props.children}</div>
  )
}

export default Card
```

```jsx
/* App.js */
import StudyLogs from "./Components/StudyLogs/StudyLogs"
import Card from './Components/Card/Card'

const App = () => {
  return <div>
    <Card >
      {/* 将 StudyLogs 组件插入到 Card 中 */}
      <StudyLogs />
    </Card>
  </div>
}

export default App
```





















