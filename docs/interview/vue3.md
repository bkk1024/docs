# vue3

## 1、vue2 和 vue3 的区别

1. 生命周期：整体变化不大，只是 vue3 中大部分生命周期钩子前加上了`on`，功能上都是类似的。不过在 vue3 中，这些钩子都要先引入了才能使用。`destroy`改为了`unmount`
2. setup：vue3 提供了一个`setup()`函数和`setup`语法糖的形式去书写逻辑代码，即组合式 API 的写法，且在`setup`中，`beforeCreate 和 created`不需要显示的定义，因为`setup`本就是围绕这两个钩子运行的。
3. 多根节点：在 vue3 的`template`中可以有多个根节点了，但是在 vue2 中只能有一个
4. 异步组件`Suspense`：[具体请看这里](../vue3/vue3学习笔记.md#异步组件-代码分包-suspense) 
5. 传送组件`Teleport`：[具体请看这里](../vue3/vue3学习笔记.md#teleport-传送组件) 
6. 响应式原理：vue2 响应式使用的是`Object.defineProperty()`，vue3 使用的是`new Proxy()`，[具体请看](/vue3/Vue.js设计与实现/第二篇响应系统.md) 
7. 虚拟DOM 和 diff 算法：***这个比较麻烦，我也理解得不是很透彻，因此先搁置，等后续闹明白了再写上去***。
8. ts 支持：vue3 天然支持 ts
9. 打包优化

## 2、vue3为什么使用proxy

1. proxy可以直接代理整个对象，无需递归；difineProperty只代理对象上的某个属性，要代理深层次的属性需要递归
2. proxy可以监听深层次的属性变化
3. proxy代理对象会生成新的对象，不会修改被代理对象本身
4. proxy不兼容ie浏览器
