# Proxy 和 Reflect

## Proxy

`Proxy`对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义，如属性查找、赋值、枚举、函数调用等。

有如下两个参数：

1. `target`：要使用`Proxy`进行代理的对象，可以是数组、函数等甚至是另一个`Proxy`代理。

2. `handler`：一个对象，它的属性一般都是函数，如下：

   - `set(target, key, value, receiver) {}`：拦截赋值操作

     ```ts
     let person = {
     	name: "zhangsan",
     	age: 18,
     }
     
     person = new Proxy(person, {
     	/**
     	 * @description: 拦截赋值操作
     	 * @param {*} target 代理的对象
     	 * @param {*} key 进行赋值的属性的 key
     	 * @param {*} value 要赋值的新值
     	 * @param {*} receiver 代理的对象，这个属性是为了保证上下文正确
     	 * @return {boolean}
     	 */
     	set(target, key, value, receiver) {
     		console.log(target) // { name: 'zhangsan', age: 18 }
     		console.log(key) // name
     		console.log(value) // lisi
     		console.log(receiver) // { name: 'zhangsan', age: 18 }
     		const result = Reflect.set(target, key, value, receiver)
     		return result
     	},
     })
     
     person.name = "lisi"
     console.log(person) // { name: 'lisi', age: 18 }
     ```

   - `get(target, key, receiver) {}`：拦截取值操作

   - `apply() {}`：拦截函数调用

   - `has() {}`：拦截 [in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 操作符

   - `ownKeys() {}`：拦截`for...in` 

   - `construct() {}`：拦截 `new` 操作符

   - `deleteProperty() {}`：拦截`delete`操作符

   - [Proxy | handler 完整方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#handler_对象的方法) 

## Reflect

`Reflect`是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与`Proxy handler`的方法相同。`Reflect`不是一个函数对象，因此它是不可构造的（不可`new`）。

在上面一节`Proxy handler.set()`中，我们可以发现`Reflect.set()`返回了一个布尔值，并且也给`person.name`赋值成功，这是因为通过`target`和`receiver`进行定位后，我们可以保证赋值的对象和属性是正确的。

所以，当我们使用`Proxy`拦截一个对象时，就可以搭配使用`Reflect`去进行赋值(`Reflcet.set()`)或取值(`Reflect.get()`)。

可能你会觉得，我都有了`target & key & value`了，就不能直接赋值吗？当然，我们可以试试，如下：

```ts
let person = {
	name: "zhangsan",
	age: 18,
}

person = new Proxy(person, {
	set(target, key, value, receiver) {
		// const result = Reflect.set(target, key, value, receiver)
		target[key] = receiver[key] = value // 报错
		return true
	},
})

person.name = "lisi"
console.log(person)
```

