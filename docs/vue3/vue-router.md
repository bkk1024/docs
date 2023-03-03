# vue-router

## 安装 vue-router

```
npm install vue-router
```

## 配置 router 文件

```ts
/* router/index.ts */

import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router"

// 导入路由页面，导入 src/views/ 文件夹下的所有 vue 文件
const views = import.meta.glob("../views/**/*.vue")

/**
 * RouteRecordRaw: vue-router 的类型 type
 */
const routes: Array<RouteRecordRaw> = [
	{
		name: "home", // 路由名称
		path: "/home", // 路由路径
		component: views["../views/Home.vue"], // 这个路由要展示的组件
		// children: [], // 子路由
		// meta: {}, // 其他信息，如 title ，keepAlive 等
		// redirect: "", // 路由重定向
		// props: {}, // 路由参数
	},
	// ... 其他路由信息
]

const router = createRouter({
	// 路由的模式，有 history 和 hash 两种模式
	history: createWebHistory(),
	// history: createWebHashHistory(),
	routes,
})

export default router
```

### import.meta.glob

Vite 支持使用特殊的 `import.meta.glob` 函数从文件系统导入多个模块：[功能 | glob-import | Vite](https://cn.vitejs.dev/guide/features.html#glob-import)

## 在 main 文件中导入并使用

```ts
/* main.ts */

import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"

let app = createApp(App)

app.use(router)

app.mount("#app")
```

## 路由跳转

路由跳转有三种方式：

1. `<router-link>`：命名式路由，它可以传入`to`属性来指定要跳转的路由

   ```html
   <!-- 第一种写法：传入要去的路由的 path -->
   <router-link :to="/home">跳转</router-link>

   <!-- 第二种写法：传入要去的路由的 name，这种方式需要在路由的配置文件中书写了 name 属性 -->
   <router-link :to="{ name: 'home'}">跳转</router-link>
   ```

2. `router.push() | router.replace()`：编程式导航，在`push | replace`方法中传入要跳转的路由的 path 或者 name 即可。

   ```ts
   import { useRouter } from "vue-router"

   const router = useRouter()

   // 传入路径的简写
   router.push("/home")
   // 传入路径的详细写法
   router.push({
   	path: "/home",
   })
   // 传入名字的写法
   router.push({
   	name: "home",
   })

   /*
   	router.replace() 写法同上
   */
   ```

   > `router.push()`和`router.replace()`的区别在于：
   >
   > - `router.push()`跳转，浏览器会记住当前路由跳转的历史，以便可以使用浏览器的前进后退按钮来进行历史记录的前进后退。
   > - `router.replace()`跳转则不会被浏览器放入历史记录，有些功能如登录后，我们不希望用户可以通过浏览器的前进后退来回到登录页面，即可使用这个方式进行跳转。
   > - `<router-link>`也可以通过添加`replace`属性来达到不被记录的效果：`<router-link replace :to="/home">home</router-link>`。

3. `<a href="">`：这种方式会刷新页面，不太推荐使用。

## 路由传参

路由传参的方式多种多样，这里介绍几种我常用的，其他的可自行百度。

1. `router.push()`传参：

   ```ts
   import { useRouter, useRoute } from "vue-router"
   const router = useRouter()
   const route = useRoute()

   // 传递 query 参数
   router.push({
   	path: "home",
   	query: {
   		id: 1,
   		// ... 其他参数
   	},
   })

   // 使用 query 参数
   route.query.id
   ```

   ```ts
   import { useRouter, useRoute } from "vue-router"
   const router = useRouter()
   const route = useRoute()

   // 传递 params 参数
   /**
    * 如果往 push 方法中传入的是对象，则使用 path + params 的方式是无法进行正确的路由跳转的。需要使用 name + params
    */
   router.push({
   	// path: '/home'
   	name: "home",
   	params: {
   		id: 1,
   	},
   })

   // 使用 params 参数
   route.params.id
   ```

   > `query`传递的参数在`url`的`?`后面，多个参数使用`&`进行连接，方式为`参数名=参数值`。
   >
   > `params`传递的参数在内存中，不会展示在`url`上，但是页面刷新后这些参数就会失效。且使用`params`传参时，不能使用`path`搭配，应该使用`name`搭配。

2. `router.replace()`传参：同上。

3. 在路由配置文件中规定路由参数，并在路由跳转时进行传递：

   ```ts
   /* router/index.ts */
   // 先在 router 的配置文件中定好要传递的参数

   const routes: Array<RouteRecordRaw> = [
   	{
   		//动态路由参数
   		path: "/home/:id",
   		name: "home",
   		component: () => import("../components/Home.vue"),
   	},
   ]
   ```

   ```ts
   const id = 1

   // 传参方式一
   router.push(`/home/${id}`)

   // 传参方式二
   router.push({
   	name: "home",
   	params: {
   		id: 1,
   	},
   })

   // 使用参数
   route.params.id
   ```

   > 这种方式传递的参数也在`url`中，但是`url`中不存在`?`，且多个参数也不需要以`&`进行连接。
   >
   > 但是这种方式也有弊端，如果有多个参数，其存在方式如下`/home/:id/:title/:number`，如果其中某个参数为空，或者忘记传递，则路由跳转后`url`可能会是如下情况`/home/1//2`，我们能看出这里是`title`没有值，这样就会造成页面白屏，因为没有这样的路由。
   >
   > 因此，为了避免上面的情况，我推荐多个参数的情况统一将其变为单一参数，如`/home/:params`，然后在传递参数时进行如下操作：
   >
   > ```ts
   > const value = {
   > 	id: 1,
   > 	title: "home",
   > 	number: 2,
   > }
   >
   > const params = encodeURIComponent(JSON.stringify(value))
   >
   > // 传递参数方式一
   > router.push(`/home/${params}`)
   >
   > // 传递参数方式二
   > router.push({
   > 	name: "home",
   > 	params: {
   > 		params,
   > 	},
   > })
   >
   > // 获取参数
   > const params = JSON.parse(decodeURIComponent(route.params.params))
   > // params.id
   > // params.title
   > // params.number
   > ```
   >
   > 这样，即使有为空的参数，也不会造成页面白屏了。

## 路由守卫

1. `router.beforeEach((to, from, next) => {})`：全局前置路由守卫

2. `router.afterEach((to, from) => {})`：全局后置路由守卫

3. `router.beforeResolve((to, from, next) => {})`：全局解析守卫，**在每次导航时会触发**。

4. `beforeEnter((to, from) => {})`：路由独享守卫，**只在进入此路由时触发一次**。

```js
const routes = [
	{
		path: "/users/:id",
		component: UserDetails,
		beforeEnter: (to, from) => {
			// 路由独享守卫
			return false
		},
	},
]
```

[路由独享守卫 | Vue Router](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#路由独享的守卫)

5. 组件内的守卫：

   - `beforeRouteEnter`
   - `beforeRouteUpdate`
   - `beforeRouteLeave`

   [组件内的守卫 | Vue Router](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#组件内的守卫)

> **完整的路由导航解析流程**：
>
> 1. 导航被触发。
> 2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
> 3. 调用全局的 `beforeEach` 守卫。
> 4. 在重用的组件里调用 `beforeRouteUpdate` 守卫(2.2+)。
> 5. 在路由配置里调用 `beforeEnter`。
> 6. 解析异步路由组件。
> 7. 在被激活的组件里调用 `beforeRouteEnter`。
> 8. 调用全局的 `beforeResolve` 守卫(2.5+)。
> 9. 导航被确认。
> 10. 调用全局的 `afterEach` 钩子。
> 11. 触发 DOM 更新。
> 12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

## 滚动行为

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。

**_注意: 这个功能只在支持 `history.pushState` 的浏览器中可用。_**

```js
const router = createRouter({
	// 这个函数 return 的是想要滚动到的位置
	scrollBehavior(to, from, savedPosition) {
		// savedPosition 上次滚动条的位置
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})
```

[滚动行为 | Vue Router](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#滚动行为)

## 动态路由

动态路由主要通过两个函数实现：

1. `router.addRoute()`：给当前路由添加新的路由。可以应用在路由管理中，如用户登录了，后端传过来了这个用户拥有的可访问的路由权限，我们就可以将这些路由权限循环添加到现有路由中。

   ```js
   router.addRoute({ path: "/about", component: About, name: "about" })
   ```

2. `router.removeRoute()`：删除路由。

   ```js
   router.removeRoute("about")
   ```

删除路由其实还有两种方法：

1. 第一种方法其实叫做覆盖更加准确，我们添加的新路由在当前路由中已经存在，那么新的路由就会覆盖旧的路由，**判断路由是否重复是以`name`作为依据的，`name`相同则重复**。

   ```js
   router.addRoute({ path: "/about", name: "about", component: About })
   // 这将会删除之前已经添加的路由，因为他们具有相同的名字且名字必须是唯一的
   router.addRoute({ path: "/other", name: "about", component: Other })
   ```

2. 第二种方法是调用我们新添加路由时的回调，**每次我们使用`router.addRoute()`添加新路由时，就会返回一个回调，当我们执行这个回调时，就会删除我们当前添加的这个路由**。

   ```js
   const removeRoute = router.addRoute(routeRecord)
   removeRoute() // 删除路由如果存在的话
   ```

> 当路由被删除时，他的所有别名和子路由也会同时删除。

## 查看现有路由

`vue-router`提供了两个方法来查看现有路由：

1. `router.hasRoute(name: string | symbol): boolean`：检查路由是否存在。
2. `router.getRoutes(): RouteRecord[]`：获取一个包含所有路由记录的数组。

## 控制路由前进后退

`router.go(delta: number)`：控制路由前进，即相对当前页面，想要前进几个历史记录

`router.back()`：相当于`router.go(-1)`

`router.forward()`：相当于`router.go(1)`
