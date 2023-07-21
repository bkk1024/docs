# vuex

## 1、vuex 是什么

vuex 是专为 vue 开发的状态管理模式，它其中的状态存储是响应式的，即当组件使用了 vuex 的状态，当它变化时，这个组件也会跟着改变。**不能之恶修改 vuex 的状态，修改的唯一途径就是 mutations**。

## 2、vuex 有哪些东西

1. `state`：用来存储状态

   ```js
   // 获取 state
   export default {
     computed: {
       count() {
         return this.$store.state.count
       }
     }
   }
   ```

2. `actions`：用来解决**异步流程**改变 state 数据，通过提交`mutations`来修改数据

   ```js
   export default {
     methods: {
       fn() {
         let value = 1
         this.$store.dispatch("actionsFn", value)
       }
     }
   }
   ```

3. `mutations`：修改仓库中 state 的唯一办法，**它是同步的**，使用`commit`进行提交

   ```js
   export default {
     methods: {
       fn() {
         let value = 1
         this.$store.commit("mutationsFn", value)
       }
     }
   }
   ```

4. `getters`：是 store 的计算属性，类似 vue 中的`computed`，用来对 state 中给的数据进行一些过滤、改造等

   ```js
   const store = new Vuex.Store({
     state: {
       count: 1
     },
     getters: {
       newCount: state => state.count + 1
     }
   })
   ```

   ```js
   // 获取 getters 
   export default {
     computed: {
       newCount() {
         return this.$store.getters.newCount
       }
     }
   }
   ```
   
5. `modules`：模块化vuex，将vuex分模块，更好维护

## 3、actions 和 mutations 的区别

主要的区别在于mutations 只能是同步操作，，action 可以包含异步操作，而且可以通过 action 来提交 mutations。

## 4、vuex在哪些场景下使用

1. 用户的个人信息
2. 购物车模块
3. 订单模块
4. ...





































