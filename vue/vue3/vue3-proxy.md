### Vue2与Vue3响应式原理对比

理解Vue的响应式原理对项目开发避免一些问题很有用。JavaScript中可以侦测到对象数据变化的`Object.defineProperty`和ES6的`Proxy`，Vue2使用的就是`Object.defineProperty`，`Object.defineProperty`侦测数据变化会有比较多的缺陷；Vue3则是利用了更强大的`Proxy`，不够完美的是兼容性还不太好。

#### Vue2原理分析

下面先看一下Vue2怎么利用`Object.defineProperty`拦截数据变化到通知视图更新的。

```javascript
function observe (obj) {
  if (obj === null || typeof obj !== 'object') {
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function defineReactive (obj, key, val) {
  Object.defineProperty(obj, key, {
    get () {
      return val
    },
    set (newVal) {
      if (newVal === val) {
        // 数据未发生改变直接返回
        return
      }
      console.log(`视图更新`)
      val = newVal
    }
  })
}
// 相当于Vue中定义的data
const data = {
  a: 1
}
// 初始化
observe(data)
// 测试数据改变
data.a = 222 // 视图更新
data.b = 333 // 新增属性，不会触发视图更新
delete data.a // 删除属性，不会触发视图更新
```

可以看到数据赋值变化时`Object.defineProperty`可以通过`get`、`set`拦截到，所以可以在`set`里面通知视图更新。当然，源码没有那么简单，但大概就是这么个道理。缺陷也可以看到，新增、删除不能侦测到，这也是我们在Vue2项目中需要用到`$set`和`$delete`的原因；还有`Object.defineProperty`只是针对Object类型数据，并不能侦测到数组的改变，所以数组改变需要另外实现；当然，性能方面也不是太好。

数组的侦测怎么来实现？这个时候要从数组的原型方法入手了，数组发生改变的方法有7个：`push`、`pop`、`unshift`、`shift`、`splice`、`reverse`、`sort`，需要拦截这些方法在里面实现视图更新，可以看下代码。

```javascript
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto) // 拷贝Array的原型

const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

methodsToPatch.forEach(method => {
  arrayMethods[method] = function (...args) {
    console.log('视图更新')
    // 返回原来的实现方法
    return arrayProto[method].apply(this, args)
  }
})

const arr = [1, 2, 3]
// 替换原型方法
Object.setPrototypeOf(arr, arrayMethods)

arr.push(4) // 视图更新
console.log(arr) // [1, 2, 3, 4]
```

可以看到，通过替换原型方法就可以在调用这些方法时侦测到数据改变，并做出视图更新通知。由于是替换原型方法的原因，所以在Vue2项目中通过索引去修改某个值是不能被侦测到的。

#### Vue3原理分析

> Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

那Vue3的`Proxy`是怎么实现的呢？其实跟`Object.defineProperty`是类似的，不过`Proxy`可以做到的更多，可以侦测到对象属性的增加、修改、删除，还可以侦测到数组的改变。看看代码：

```javascript
function reactive (obj) {
  return new Proxy(obj, {
    get (target, key) {
      return Reflect.get(target, key)
    },
    set (target, key, val) {
      if (!Object.prototype.hasOwnProperty.call(target, key)) {
        console.log('新增')
      } else {
        console.log('修改')
      }
      const result = Reflect.set(target, key, val)
      return result
    },
    deleteProperty (target, key) {
      console.log('删除')
      Reflect.deleteProperty(target, key)
    }
  })
}

const data = reactive({
  a: 1
})

data.a = 2 // 修改
data.b = 3 // 新增
delete data.a // 删除
```

上面就是Vue3中数据的侦测原理，Vue3项目中改变数据不用考虑用不同的方式了，赋值就能实现响应数据驱动视图更新。
