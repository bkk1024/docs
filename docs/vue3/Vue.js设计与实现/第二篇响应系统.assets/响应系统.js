/*
 * @Author: 二师弟
 * @Date: 2023-03-20 19:27:53
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-03-21 18:10:45
 * @Description: 《Vuejs设计与实现》中响应系统的示例代码
 */
// 原始数据
const data = {
  text: 'hello',
  count: 1
}

// 存储 target 和 key，保存的是一个 Map 类型
const bucket = new WeakMap()

// cleanup 用来将副作用函数从依赖集合中清除
function cleanup(effectFn) {
  const len = effectFn.deps.length
  for (let i = 0; i < len; i++) {
    // 取出依赖集合
    const deps = effectFn.deps[i]
    // 将 effectFn 从这个集合中清除
    deps.delete(effectFn)
  }
  // 重置 effectFn.deps 数组
  effectFn.deps = []
}

// 用来存储被注册的副作用函数
let activeEffect = null
// 这是一个副作用函数栈，用来存储要注册的副作用函数
let effectStack = []
// effect 函数用来注册副作用函数
function effect(fn, options = {}) {
  const effectFn = () => {
    // 调用 cleanup 方法
    cleanup(effectFn)
    // 当 effectFn执行时，将其设置为当前激活的副总用函数
    activeEffect = effectFn
    // 将注册的副作用函数压入栈内
    effectStack.push(effectFn)
    // 将副作用函数的执行结果保存
    const res = fn()
    // 在这个副作用函数执行完后，将其从栈内取出，
    // 这是为了解决嵌套 effect 时，内层的副作用函数执行完后能正确使用外层的副作用函数
    effectStack.pop() // 当前副作用函数执行后弹出
    activeEffect = effectStack[effectStack.length - 1] // 还原 activeEffect 为原值
    // 返回副作用函数的执行结果
    return res
  }
  // 将 options 挂载到 effectFn 上
  effectFn.options = options
  // activeEffect.deps 用来存储所有与该副作用函数相关联的依赖集合
  effectFn.deps = []
  // 判断是否懒执行
  if (!options.lazy) {
    // 未开启懒执行功能，则直接执行副作用函数
    effectFn()
  }
  // 返回副作用函数
  return effectFn
}

// 在 get 方法中调用，追踪变化
function track(target, key, receiver) {
  // 没有 activeEffect，直接 return
  if (!activeEffect) return Reflect.get(target, key, receiver)
  // 根据 target 从 bucket 中取 depsMap，它也是一个 Map 类型
  // key -> effects
  let depsMap = bucket.get(target)
  // 如果 depsMap 不存在，根据 target 新建一个
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  // 再根据 key 从 depsMap 中取得 deps，它是一个 Set 类型
  // 里面存储着所有与当前 key 相关联的副作用函数
  let deps = depsMap.get(key)
  // 如果 deps 不存在，根据 key 新建一个
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  // 最后将当前激活的副作用函数存入 deps 中
  deps.add(activeEffect)
  // 将 deps 添加到 effectFn.deps 数组中。这里的 deps 就是我们想要的依赖集合
  activeEffect.deps.push(deps)
}

// 在 set 方法中调用，追踪变化
function trigger(target, key) {
  // 根据 target 取出 depsMap
  const depsMap = bucket.get(target)
  if (!depsMap) return
  // 根据 key 取出所有副作用函数
  const effects = depsMap.get(key)
  const newEffects = new Set()
  // 循环判断副作用函数
  effects && effects.forEach(effectFn => {
    // 如果目前 trigger 触发的这个副作用函数不在执行，则继续它的执行步骤
    // 否则不执行任何操作
    if (effectFn !== activeEffect) {
      newEffects.add(effectFn)
    }
  })
  // 代替 effects 进行遍历
  newEffects.forEach(effectFn => {
    // 如果一个副作用函数存在调度器，则调用这个调度器，并将副作用函数作为参数传递
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  })
}

// 对数据进行代理
const dataProxy = new Proxy(data, {
  // 拦截数据的读取操作
  get(target, key, receiver) {
    track(target, key)
    // 返回读取的属性值，Reflect 可以查看上面 Proxy 链接
    return Reflect.get(target, key, receiver)
  },

  // 拦截数据的赋值操作
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    trigger(target, key)
    // set 方法需要返回一个 boolean
    return result
  }
})

// 定义一个任务队列
const jobQueue = new Set()
// 使用 Promise.resolve() 创建一个 promise 实例
// 用它将一个任务添加到微任务队列
const p = Promise.resolve()
// 用来标志是否正在刷新队列
let isFlushing = false
// 用来刷新队列
function flushJob() {
  // 如果正在刷新，则直接返回
  if (isFlushing) return false
  // 设置 isFlushing 为 true，表示正在刷新
  isFlushing = true
  // 在微任务队列中刷新 JobQueue 队列
  p.then(() => {
    jobQueue.forEach(job => job())
  }).finally(() => {
    // 结束后重置 isFlushing
    isFlushing = false
  })
}

// 计算属性方法
function computed(getter) {
  // 用来缓存上一次计算的值
  let value
  // 用来标记是否需要重新计算，默认为 true，以便第一次进行计算
  let isRecalculate = true

  // 把 getter 作为副作用函数，创建一个 lazy 的 effect
  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      if (!isRecalculate) {
        isRecalculate = true
        // 当计算属性依赖的响应式数据变化时，手动调用 trigger 方法触发响应
        trigger(obj, "value")
      }
    }
  })

  const obj = {
    // 当读取 value 时才是行 effectFn
    get value() {
      if (isRecalculate) {
        value = effectFn()
        isRecalculate = false
      }
      // 当读取 value 时，手动调用 track 函数进行追踪
      track(obj, "value", obj)
      return value
    }
  }

  return obj
}

// watch方法，观测数据
function watch(source, cb, options = {}) {
  // 定义 getter
  let getter
  // 如果 source 是函数，则说明用户传递的是 getter 函数
  if (typeof source === 'function') {
    getter = source
  } else {
    // 否则调用 traverse 方法
    getter = () => traverse(source)
  }

  // 定义新值和旧值
  let oldValue, newValue
  // 提取 scheduler 调度函数为一个独立的函数 job
  const job = () => {
    // 在 scheduler 中重新执行副作用函数，得到的是新值
    newValue = effectFn()
    // 将旧值和新值作为回调函数的参数
    cb && cb(oldValue, newValue)
    // 更新旧值，以便下一次获取旧值时时正确的
    oldValue = newValue
  }

  // 使用 effect 注册副作用函数时，开启 lazy 选项，并把返回值存储到 effectFn 中以便后续手动调用
  const effectFn = effect(
    // 执行 getter
    () => getter(),
    {
      lazy: true,
      scheduler: () => {
        // 在调度函数中判断 flush 是否为 'post'，如果是，则将其放到微任务队列中执行
        if(options.flush === "post"){
          const p = Promise.resolve()
          p.then(job)
        } else {
          job()
        }
      }
    }
  )

  // 判断 immediate 是否为 true
  if (options.immediate) {
    job()
  } else {
    // 手动调用副作用函数，得到的就是旧值
    oldValue = effectFn()
  }
}

// 递归方法，用来读取 watch 中传入的对象的属性
function traverse(value, seen = new Set()) {
  // seen 用来保存已经读取过的属性
  // 如果传入的数据是原始数据类型，或者已经被读取过了，则什么都不做
  if (typeof value !== 'object' || value === null || seen.has(value)) return
  // 将读取了的属性存储到 seen 中，避免循环引用
  seen.add(value)
  // 暂时不考虑数组等其他结构
  // 假设 value 是一个对象，使用 for...in 读取对象的每一个值，并递归调用 traverse 方法
  for (const key in value) {
    traverse(value[key], seen)
  }

  return value
}

watch(
  () => dataProxy.count,
  (oldValue, newValue) => {
    console.log("响应式数据改变了", oldValue, newValue)
  },
  {
    immediate: true
  }
) // 响应式数据改变了 undefined 1

dataProxy.count++ // 响应式数据改变了 1 2