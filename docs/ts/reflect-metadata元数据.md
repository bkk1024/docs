# Reflect Metadata 元数据

Reflect Metadata 是 ES7 的一个提案，它**主要用来在声明的时候添加和读取元数据**。TypeScript 在 1.5+ 的版本已经支持它，你只需要：

- `npm i reflect-metadata --save` 
- 在`tsconfig.json`里配置`emitDecoratorMetadata`选项。
- 最后`import 'reflect-metadata'`引入即可

## metadata方法

 `@Reflect.metadata`可以用于类或者类的属性上，当作`Decorator`使用：

- 当修饰类时，在类上添加元数据
- 当修饰类属性时，在类原型的属性上添加元数据

```ts
import "reflect-metadata"

@Reflect.metadata("Class", "Test")
class Test {
	@Reflect.metadata("Method", "Hello World")
	hello(): string {
		return "hello world"
	}
}

console.log(Reflect.getMetadata("Class", Test)) // Test
console.log(Reflect.getMetadata("Method", new Test(), "hello")) // Hello World
```

`metadata`方法的定义如下

```ts
/**
* @param {string} metadataKey 元数据入口的key
* @param {*} metadataValue 元数据入口的value
* @returns 装饰器函数
*/
function metadata(metadataKey: any, metadataValue: any): {
	(target: Function): void
	(target: Object, propertyKey: string | symbol): void
}
```

::: tip

这个函数定义了一个函数重载，它接受两个参数 metadataKey 和 metadataValue，这两个参数分别用于表示元数据的键和值。

该函数重载定义了两个不同的函数签名，具体如下：

1. 第一个签名接受一个参数 target，该参数是一个函数，且返回值为 void。当只传入一个参数时，该函数应该被调用。这个签名的作用是为一个类添加元数据。
2. 第二个签名接受两个参数 target 和 propertyKey，分别表示目标对象和属性名。当传入两个参数时，该函数应该被调用。这个签名的作用是为类的某个属性添加元数据。

通过这两个函数签名的组合，我们可以使用 metadata 函数为类及其属性添加元数据。这个功能通常用于实现装饰器模式和注解。

:::

## getMetadata方法

使用`Reflect.getMetadata()`方法可以获取元数据值，它会往原型链上找。

在上面一节的代码中也可以看到使用方式。

定义如下：

```ts
/**
 * @param metadataKey 要获取的元数据的 key
 * @param target 从这个对象上获取元数据
 * @param propertyKey 从这个属性上获取元数据
 */
function getMetadata(metadataKey: any, target: Object, propertyKey: string | symbol): any
```

::: warning 注

这里不是`@Reflect.getMetadata()`，只有`metadata`方法才当作装饰器使用，其他方法都是`Reflect.方法`。

:::

## defineMetadata方法

这个方法是`metadata`方法的定义版本，即非`@Reflect`版本，会多传递一个`target`参数，表示待装饰的对象。

定义如下：

```ts
/**
 * @param metadataKey 元数据的键名，用于指定要定义的元数据类型。
 * @param metadataValue 元数据的值，用于描述元数据的具体内容。
 * @param target 从这个对象上获取元数据
 * @param propertyKey 从这个属性上获取元数据
 */
function defineMetadata(metadataKey: any, metadataValue: any, target: Object, propertyKey: string | symbol): void;
```

使用如下：

```ts
class Test {
	hello() {}
	static world() {}
	static url: string = "/api/list"
}

const metadataKey = "key"

Reflect.defineMetadata(metadataKey, "class", Test)
Reflect.defineMetadata(metadataKey, "method", Test.prototype.hello)
Reflect.defineMetadata(metadataKey, "staticMethod", Test.world)
Reflect.defineMetadata(metadataKey, "staticProperty", Test, Test.url)

const meta1 = Reflect.getMetadata(metadataKey, Test)
const meta2 = Reflect.getMetadata(metadataKey, Test.prototype.hello)
const meta3 = Reflect.getMetadata(metadataKey, Test.world)
const meta4 = Reflect.getMetadata(metadataKey, Test, Test.url)

console.log(meta1) // class
console.log(meta2) // method
console.log(meta3) // staticMethod
console.log(meta4) // staticProperty
```

## hasMetadata方法

返回一个`boolean`，表明这个`target`上是否有元数据。

定义如下：

```ts
/**
 * @param metadataKey 要查找的元数据的 key
 * @param target 从这个对象上查找元数据
 * @param propertyKey 从这个属性上查找元数据
 */
function hasMetadata(metadataKey: any, target: Object, propertyKey: string | symbol): boolean;
```

使用如下：

```ts
class Test {
	hello() {}
}

const metadataKey = "key"

Reflect.defineMetadata(metadataKey, "class", Test)

console.log(Reflect.hasMetadata(metadataKey, Test)) // true
```

## hasOwnMetadata方法

跟`Object.prototype.hasOwnProperty`类似, 是**只查找对象上的元数据, 而不会继续向上查找原型链上的**, 其余的跟hasMetadata一致。

## getOwnMetadata方法

与`hasOwnMetadata`和`hasMetadata`的区别一样, 是否往原型链上找。

## getMetadataKeys方法

获取该`target`以及原型链上的`target`的所有元数据的`key`。

```ts
@Reflect.metadata("Person", "person")
class Person {
	name: string = ""
}

@Reflect.metadata("Man", "man")
class Man extends Person {
	gender: string = "male"
}

console.log(Reflect.getMetadataKeys(Man)) // [ 'Man', 'Person' ]
```

## getOwnMetadataKeys方法

与`getMetadataKeys`方法类似，只是只找自己的，不往原型链上找

## deleteMetadata方法

用于删除`target`上的元数据。

定义如下：

```ts
/**
 * @param metadataKey 要删除的元数据的 key
 * @param target 从这个对象上删除元数据
 * @param propertyKey 从这个属性上删除元数据
 */
function deleteMetadata(metadataKey: any, target: Object, propertyKey: string | symbol): boolean;
```

使用如下：

```ts
@Reflect.metadata("Person", "person")
class Person {
	name: string = ""
}

@Reflect.metadata("Man", "man")
class Man extends Person {
	gender: string = "male"
}

console.log(Reflect.getMetadataKeys(Man)) // [ 'Man', 'Person' ]

Reflect.deleteMetadata("Man", Man)

console.log(Reflect.getMetadataKeys(Man)) // [ 'Person' ]
```
