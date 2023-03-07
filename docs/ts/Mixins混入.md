# Mixins 混入

`Mixins`可以简单看作合并，即将多个简单的合并为复杂的。

## 对象混入

使用 es6 的`Object.assign`合并多个对象。

这里定义几个简单的对象，然后将其合并为一个对象。

```ts
interface Name {
    name: string
}

interface Age {
    age: number
}

interface Gender {
    gender: string
}

const name: Name = { name: 'zhansan' }
const age: Age = { age: 18 }
const gender: Gender = { gender: 'male' }

const people = Object.assign(name, age, gender)
console.log(people) // { name: 'zhansan', age: 18, gender: 'male' }
```

::: tip 注

你可能会有疑惑，为啥要多此一举，直接定义一个`People`不完事儿了吗？

其实不然，这只是一个例子，所以看着可能会有点多此一举，但是我们在项目中可能前期定义了几个比较简单的`interface`，它们都有各自的功能，但是后期我们发现有一个对象，它的结构是前面某几个`interface`的结合，那我们再去定义一个复杂的`interface`就有点繁琐了，不如直接使用前面的`interface`定义对象，然后将其混合成一个复杂的对象，这样就比较轻松。

:::

## 类的混入

这个其实跟上面对象的混入也是类似，就是将几个简单的类混合成一个相对复杂的类。只是它的实现过程要比上面的稍微麻烦些。如下：

```ts
class A {
	isA: boolean = true
	sayA() {
		console.log("A")
	}
}

class B {
	isB: boolean = true
	sayB() {
		console.log("B")
	}
}

class C implements A, B {
	constructor() {}
	isA: boolean = false
	isB: boolean = false
	sayA() {}
	sayB() {}
}

Mixins(C, [A, B])

let c = new C()
c.sayA() // A

/**
 * @function Mixins 帮助函数，实现混入操作
 * @param derivedCtor {any} 要合并生成的新类
 * @param baseCtors {any[]} 进行合并的类的数组
 * @return void
 */
function Mixins(derivedCtor: any, baseCtors: any[]) {
	baseCtors.forEach((baseCtor) => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
			derivedCtor.prototype[name] = baseCtor.prototype[name]
		})
	})
}
```

上面的代码就是先定义了`class A {}`和`class B {}`这两个类，它们都具有各自的功能。然后我们定义`class C {}`使用`implements`去继承，因为这个将类当作接口去继承，所以没有使用`extends`，如果使用`extends`继承类的话就只能继承一个类。最后我们定义`Mixins`帮助函数，然后调用这个函数(在`new`实现类实例之前)，然后就可以实例化这个新的类了。

::: tip 注

这里你会说了，这里要实现这个新的类还是得在里面将前两个类的属性和方法写一遍，跟直接重新写一个新类有什么区别呢，还多写了个函数，麻烦。

其实并不是，这个例子看着麻烦是因为这些类中的方法逻辑很简单，如果是很复杂的逻辑，我们直接写新的类时复制来复制去的岂不是更麻烦？而使用这个方法在新的类中定义这些方法时只需要简单写个框架就行了，当我们调用`Mixins`方法时会自动向其中填充前面的类的方法的逻辑，现在看起来是不是更加简便一点了。

:::
