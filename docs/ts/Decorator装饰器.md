# Decorator 装饰器

装饰器是一种特殊类型的声明，它能够被附加到**类声明，方法，访问符，属性或参数**上。

- `ClassDecorator`：类装饰器
- `PropertyDecorator`：属性装饰器
- `ParameterDecorator`：参数装饰器
- `MethodDecorator`：方法装饰器

装饰器使用`@名称`的形式，它实际就是一个函数，会在运行时被调用，被装饰的声明信息作为参数传入。

这里用一个类装饰器做简单的用法示例：

```ts
@Base
class A {
	constructor() {}
}
```

::: tip 注

要使用装饰器这个功能，则需要在`tsconfig.json`中添加：

```json
{
	"compilerOptions": {
		"target": "ES5",
		"experimentalDecorators": true // 开启装饰器功能
	}
}
```

:::

## 普通装饰器

```ts
interface Person {
	name: string
	age: string
}

const PersonDec: ClassDecorator = (target: any) => {
	target.prototype.name = "zhangsan"
	target.prototype.age = 18
}

@PersonDec
class Person {
	constructor() {}
}

const person = new Person()
console.log(person.name) // 张三
```

`ClassDecorator`表示这是一个**类装饰器，它会将被装饰的这个类的构造函数传入装饰器的函数中当作第一个参数**。

## 装饰器工厂

有时我们可能想给装饰器函数传入一些参数进行使用，比如我们想定义一个装饰器`@Get(url)`，这个装饰器用来向我们传入的`url`发送一个 get 请求。这时候就可以使用函数柯里化，也就是函数里面返回一个函数，然后给外层的函数定义传入的参数：

```ts
const Get = (url: string) => {
	const fn: MethodDecorator = (target, key, descriptor) => {
		axios.get(url)
	}
	return fn
}

class Http {
	@Get("/api/list")
	getList(data: any) {}
}
```

## 装饰器组合

也就是使用多个装饰器来装饰。

```ts
interface Person {
	name: string
	age: number
}

const Name: ClassDecorator = (target: any) => {
	target.prototype.name = "zhangsan"
}

const Age: ClassDecorator = (target: any) => {
	target.prototype.age = 18
}

@Name
@Age
class Person {
	constructor() {}
}

// 也可以写在同一行
// @Name @Age class Person {
//   constructor() {}
// }

const person = new Person()
console.log(person.name) // zhangsan
console.log(person.age) // 18
```

## 方法装饰器

它会传入三个参数

1. 参数一：对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
2. 参数二：成员的名字
3. 参数三：成员的属性描述符

```ts
const Get = (url: string) => {
	const fn: MethodDecorator = (target, key, descriptor) => {
		console.log(target)
		// { getList: [Function (anonymous)] }
		console.log(key)
		// getList
		console.log(descriptor)
		// {
		//   value: [Function(anonymous)],
		//   writable: true,
		//   enumerable: true,
		//   configurable: true
		// }
	}
	return fn
}

class Http {
	@Get("/api/list")
	getList(data: any) {}
}
```

::: warning 注

如果代码输出目标版本小于 es5，属性描述符会是 undefined。

如果代码输出目标版本小于 es5，返回值会被忽略。

:::

## 属性装饰器

属性装饰器表达式会在运行时当作函数被调用，传入下列 2 个参数：

1. 参数一：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 参数二：成员的名字。

```ts
const Name: PropertyDecorator = (...args) => {
	console.log(args) // [ {}, 'name', undefined ]
}

class Person {
	@Name
	name: string = "zhangsan"
}
```

::: warning 注

[属性描述符](../js/属性描述符.md)不会做为参数传入属性装饰器，这与 TypeScript 是如何初始化属性装饰器的有关。 因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，并且没办法监视或修改一个属性的初始化方法。返回值也会被忽略。因此，属性描述符只能用来监视类中是否声明了某个名字的属性。

:::

## 参数装饰器

参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

1. 参数一：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 参数二：成员的名字。
3. 参数三：参数在函数参数列表中的索引。

```ts
const Url: ParameterDecorator = (...args) => {
	console.log(args) // [ { getList: [Function (anonymous)] }, 'getList', 0 ]
}

class Http {
	getList(@Url url: string) {}
}
```

::: tip 注

参数装饰器**只能**用来监视一个方法的参数是否被传入。

:::

## 元数据存储

需要安装`reflect-metadata`这个库使用。详情见[Reflect Metadata 元数据](./reflect-metadata元数据.md)

示例如下：

```ts
const Get = (url: string) => {
  const fn: MethodDecorator = (target, key, descriptor: TypedPropertyDescriptor<any>) => {
    axios.get(url).then(res => {
      const metadata = Reflect.getMetadata(key, target)
      console.log(metadata);
      descriptor.value(metadata ? res.data[metadata] : res.data)
    })
  }
  return fn
}

const Result = (str: string) => {
  const fn: ParameterDecorator = (target, key, index) => {
    Reflect.defineMetadata(key, str, target)
  }
  return fn
}

class Http {
  @Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10")
  getList(@Result('result') data: any) {
    console.log(data);
  }
}
```

::: tip

这里的示例演示的是：从接口获取的数据中，解构出我们需要的那个数据的字段名，因为这里接口传递过来的数据存在`data.result.list`中，所以我们直接取到`result`这个字段。

因为装饰器的执行顺序中，参数装饰器 > 方法装饰器，因此我们在`@Result()`中使用`Reflect.defineMetadata()`来传递要解构出来的数据的字段名，然后在`@Get()`中使用`Reflect.getMetadata()`来获取到这个元数据，最后进行解构。

:::
