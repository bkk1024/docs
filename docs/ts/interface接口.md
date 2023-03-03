# interface 接口

## interface 定义约束

在 ts 中，可以使用`interface`来定义一个类的结构，它规定了这个类中应该包含哪些属性和方法。同时，接口也可以当成类型声明去使用。接口可以重复定义，同名的接口的结构为所有同名加起来的结构。

```ts
interface Person {
	name: string
	age: number
	children?: [] // ? 表示这个属性或方法可选
}

// 重复定义
interface Person {
	// say: () => void
	say: Function
}

let zhangsan: Person = {
	name: "zhangsan",
	age: 18,
	say: function () {
		console.log(this.name)
	},
}

zhangsan.say() // zhangsan
```

## 任意属性

`[propName: string]`用来表示这个属性名称不固定

```ts
interface Person {
	name: string
	age: number
	children?: [] // ? 表示这个属性或方法可选
	[propName: string]: any
}

let zhangsan: Person = {
	name: "zhangsan",
	age: 18,
	weight: 80,
	height: 180,
}
```

这个方法的使用场景为：后端接口返回了大量的数据，但是其中只有部分数据是我们需要的。

## readonly

`readonly`表示只读属性，用这个声明的属性只能被读取，无法被赋值。

```ts
interface Person {
	name: string
	age: number
	children?: [] // ? 表示这个属性或方法可选
	[propName: string]: any
	readonly idCard: string
}

let zhangsan: Person = {
	name: "zhangsan",
	age: 18,
	weight: 80,
	height: 180,
	idCard: "42098119981010xxxx",
}

zhangsan.idCard = "42098119981010xxx1" // 报错
```

## extends 继承

`extends`可以让一个接口继承另一个接口的属性和方法，同时添加新的属性或方法。

```ts
interface Person {
	name: string
	age: number
	children?: [] // ? 表示这个属性或方法可选
}

interface Father extends Person {
	son?: string
}

let lisi: Father = {
	name: "lisi",
	age: 40,
	son: "lidabao",
}
```

## implements

`implements`与`extends`功能类似，但是有如下区别：

1. `implements`继承时，定义的只能是类(`class`)，不能是接口(`interface`)
2. `extends`继承时，定义的可以是类(`class`)，也可以是接口(`interface`)

```ts
interface Father extends Person {
	say: () => string // 可以重写方法，但是不能重写属性
}

class Son implements Person {
	name: string
	age: number
	say: () => string // 可以重写方法，但是不能重写属性
}
```
