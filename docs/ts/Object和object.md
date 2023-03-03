# Object 和 object 和 {}

## Object

<img src="./Object和object.assets/image-20230301171413459.png" alt="image-20230301171413459" />

`Object`类型是所有`Object`类的实例的类型，由以下两个接口来定义：

1. `Object`接口定义了`Object.prototype`原型对象上的属性。

2. `ObjectConstructor`接口定义了`Object`类的属性，如`Object.create()`。

   <img src="./Object和object.assets/image-20230301172310269.png" alt="image-20230301172310269" />

> 这个类型跟原型链有关，原型链的顶层就是`Object`，所以值类型和引用类型最终都指向`Object`。

## object

`object`代表所有非值类型的类型，如`Array | Set | Map | Function`等，常用于泛型约束。

## {}

这是一个看起来很别扭的东西，我们可以将其理解为`new Object`，即和`Object`基本一样，它包含所有类型。

> 示例：
>
> ```ts
> let a: Object = 123 // 不报错
> let a1: Object = "123" // 不报错
> let a2: Object = false // 不报错
> let a3: Object = [] // 不报错
>
> let a4: object = 123 // 报错
> let a5: object = "123" // 报错
> let a6: object = false // 报错
> let a7: Object = [] // 不报错
>
> let a8: {} = 123 // 不报错
> let a9: {} = "123" // 不报错
> let a10: {} = false // 不报错
> let a11: {} = [] // 不报错
> ```
>
> **注**：当我们使用`{}`时，无法对其进行修改，如：
>
> ```ts
> let a: {} = { name: "zhangsan" }
> a.name = "lisi" // 报错
> a.age = 18 // 报错
> ```
>
> 所以`{}`类型还是少用的好。
