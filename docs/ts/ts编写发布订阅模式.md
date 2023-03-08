# 发布订阅

```ts
interface EventFace {
  on: (name: string, callback: Function) => void
  emit: (name: string, ...args: Array<any>) => void
  off: (name: string, fn: Function) => void
  once: (name: string, fn: Function) => void
}

interface List {
  [key: string]: Array<Function>
}

class Dispatch implements EventFace {
  // 订阅事件的列表
  list: List
  constructor() {
    this.list = {}
  }

  /**
   * @description: 订阅事件，即订阅 emit 发布的事件，并获取到传递的参数
   * @param {string} name 事件名称
   * @param {Function} callback 处理参数的回调函数
   * @return {*}
   */
  on(name: string, callback: Function) {
    const callbackList: Array<Function> = this.list[name] || []
    callbackList.push(callback)
    this.list[name] = callbackList
  }

  /**
   * @description: 发布事件
   * @param {string} name 事件名称
   * @param {array} args 传递的参数
   * @return {*}
   */
  emit(name: string, ...args: Array<any>) {
    let evnetName = this.list[name]
    if (evnetName) {
      evnetName.forEach((fn) => {
        fn.apply(this, args)
      })
    } else {
      console.error("该事件未监听")
    }
  }

  /**
   * @description: 取消订阅，即取消已经使用 on 订阅的事件
   * @param {string} name // 事件名称
   * @param {Function} fn // 要取消的某一个函数
   * @return {*}
   */
  off(name: string, fn: Function) {
    let evnetName = this.list[name]
    if (evnetName && fn) {
      let index = evnetName.findIndex((fns) => fns === fn)
      evnetName.splice(index, 1)
    } else {
      console.error("该事件未监听")
    }
  }

  /**
   * @description: 只触发一次事件，即在订阅并执行后立即删除
   * @param {string} name // 事件名称
   * @param {Function} fn // 执行操作
   * @return {*}
   */
  once(name: string, fn: Function) {
    let decor = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, decor)
    }
    this.on(name, decor)
  }
}
```

## 各模块拆解

### EventFace 声明主要方法

首先使用`interface`定义了这个模式中的几个关键方法：

- `on`：订阅事件
- `emit`：发布事件
- `off`：取消订阅
- `once`：只订阅一次，即执行了操作后立马取消订阅

```ts
interface EventFace {
  on: (name: string, callback: Function) => void
  emit: (name: string, ...args: Array<any>) => void
  off: (name: string, fn: Function) => void
  once: (name: string, fn: Function) => void
}
```

### List 声明事件列表

确定订阅事件的列表的类型。

它确定了同名的事件我们可以订阅多次：`Array[Function]`，保存事件操作的是一个函数数组。

```ts
interface List {
  [key: string]: Array<Function>
}
```

### Dispatch 实现

这个类，或者说构造函数继承`EventFace`。即他是发布订阅这个模式的实现类。

首先我们初始化订阅事件的列表：

```ts
class Dispatch implements EventFace {
  // 订阅事件的列表
  list: List
  constructor() {
    this.list = {}
  }
}
```

### on 方法

订阅发布的事件，有如下参数：

1. 订阅的事件的名称
2. 对这个事件进行的操作

::: tip 思路

1. 首先确定我们是否订阅过这个事件，如果有，则直接使用它，如果没有，则赋值为空数组
2. 往上一步的数组中`push`此次订阅的回调函数
3. 将此次订阅后完整的事件数组保存到订阅事件`list`中

:::

```ts
on(name: string, callback: Function) {
  const callbackList: Array<Function> = this.list[name] || []
  callbackList.push(callback)
  this.list[name] = callbackList
}
```

### emit 方法

发布事件，有如下参数：

1. 要发布的事件的名称
2. 这个事件携带的参数，可以有多个

::: tip 思路

1. 首先取出已经注册(订阅)的事件
2. 然后判断该事件是否存在，若存在，则循环执行所有事件操作(因为存放事件操作的是数组)，若不存在，则提示该事件不存在。

:::

```ts
emit(name: string, ...args: Array<any>) {
  let evnetName = this.list[name]
  if (evnetName) {
    evnetName.forEach((fn) => {
      fn.apply(this, args)
      // 这么写也行
      // fn(...args)
    })
  } else {
    console.error("该事件未监听")
  }
}
```

### off 方法

取消订阅事件操作，有如下参数：

1. 取消订阅的事件名称
2. 该事件的操作方法

::: tip 思路

1. 取出要取消订阅的事件数组
2. 判断要取消订阅的事件和这个事件中的这个操作是否存在，若存在则找到这个操作的`index`，然后进行删除；若不存在，则提示不存在

:::

```ts
off(name: string, fn: Function) {
  let evnetName = this.list[name]
  if (evnetName && fn) {
    let index = evnetName.findIndex((fns) => fns === fn)
    evnetName.splice(index, 1)
  } else {
    console.error("该事件未监听")
  }
}
```

### once 方法

只注册事件一次，有如下参数：

1. 要注册的事件的名称
2. 该事件的操作

::: tip 思路

1. 首先调用`on`方法订阅一次事件
2. 然后在`on`订阅的回调函数中执行一次操作
3. 最后在`on`的回调函数中执行`off`方法取消订阅

:::

```ts
once(name: string, fn: Function) {
  let decor = (...args: Array<any>) => {
    fn.apply(this, args)
    this.off(name, decor)
  }
  this.on(name, decor)
}
```

## 使用示例

```ts
const o = new Dispatch()

let fnOn = (...args: any[]) => {
  console.log("on", args)
}

let fnOnce = (...args: any[]) => {
  console.log("once", args)
}

o.on("abc", fnOn) // on [ 1, 2, 3 ]
o.on("abc", fnOn) // on [ 1, 2, 3 ]
// o.off("abc", fnOn) // 如果开启它，则上面的第二个 on 不输出
o.once("abb", fnOnce) // once [ 1, 2, 3, 4 ]
// o.on("abb", fnOn) // 无输出
o.emit("abc", 1, 2, 3)
o.emit("abb", 1, 2, 3, 4)
```

::: warning 注

虽然这个模式叫发布订阅模式，看起来好像得先执行`emit`方法发布事件，然后执行`on`方法订阅事件并执行，但是其实实际顺序是反过来的。

可以理解为`on`是注册事件，`emit`是给事件传递参数，要传递参数的话，首先这个事件得存在。

:::
