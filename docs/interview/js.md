# JS

## 1、es6 新特性

这些在日常开发中常用，但是一问起来还是容易堵住脑子说不出话。

1. 新增`let | const`
2. 新增`...`，拓展运算符
3. 新增`Promise`
4. 新增`symbol`原始数据类型
5. 新增`解构赋值`，`const { name } = person`
6. 新增`Map | Set`
7. 新增`Object.assign()`和`Object.is()`
8. 新增`str.includes() | str.startsWith() | str.endsWith() | str.repeat() | str.padStart() | str.padEnd()`
9. 新增`arr.of() | arr.from() | arr.find() | arr.findIndex() | arr.fill() | arr.copyWithin() | arr.includes() `
10. 新增`函数参数默认值`，`function(a = 1, b = 2) { return (a + b) }`
11. 新增`箭头函数`，`() => {}`
12. 新增`class`
13. 新增`导入导出`，`import xxx from "xxx" | export {}`

## 2、闭包

简单说就是在一个内部函数中能访问外部函数的变量，如：

```js
function fn() {
  let text = 123
  
  return function() {
    let mytext = text
  }
}
```

它所造成的影响就是外部函数中被内部函数访问的变量不会被[垃圾回收](https://blog.csdn.net/weixin_50936255/article/details/118501200)，因此就可能造成内存泄漏。

但他也有一些应用场景，比如我们的[防抖节流](../js/js知识要点.md#防抖和节流)函数，这其中外部的`timer`就被内部函数访问了，这就会导致我们每次调用这个函数时，这个`timer`都是同一个变量，以达到我们需要的效果。

## 3、深拷贝和浅拷贝

- `浅拷贝`只复制指向对象的指针，不复制对象本身，因此，虽然我们使用时可能使用的是两个不同的变量，但是它们其实读取的是同一个内存地址，这样就会导致我们使用某个变量时会影响到另一个变量。
- `深拷贝`会创造另一个跟被拷贝的对象一模一样的对象，然后将其放置到一个新的内存地址中，这样两个对象之间就不会相互影响。

实现深拷贝：

1. 简单的可以使用`JSON.parse(JSON.stringify(boj))`，但是它不能处理函数

   ![64b5ca449b2bc91c9757d8e31c9214ec](./js.assets/64b5ca449b2bc91c9757d8e31c9214ec.jpeg)

2. 递归的方式：[递归实现深拷贝](../js/js方法.md#传统深克隆方法)

3. 使用`MessageChannel()`：[使用 MessageChannel 实现深拷贝](../js/js方法.md#使用-messagechannel-方法)

4. 使用`lodash`库

