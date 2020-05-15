// function observe (obj) {
//   if (obj === null || typeof obj !== 'object') {
//     return
//   }
//   Object.keys(obj).forEach(key => {
//     defineReactive(obj, key, obj[key])
//   })
// }

// function defineReactive (obj, key, val) {
//   Object.defineProperty(obj, key, {
//     get () {
//       return val
//     },
//     set (newVal) {
//       if (newVal === val) {
//         // 数据未发生改变直接返回
//         return
//       }
//       console.log(`视图更新`)
//       val = newVal
//     }
//   })
// }
// // 相当于Vue中定义的data
// const data = {
//   a: 1
// }
// // 初始化
// observe(data)
// // 数据发生改变
// data.a = 222 // 视图更新
// data.b = 333 // 新增属性，不会触发视图更新
// delete data.a // 删除属性，不会触发视图更新

// const arrayProto = Array.prototype
// const arrayMethods = Object.create(arrayProto) // 拷贝Array的原型

// const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

// methodsToPatch.forEach(method => {
//   arrayMethods[method] = function (...args) {
//     console.log('视图更新')
//     // 返回原来的实现方法
//     return arrayProto[method].apply(this, args)
//   }
// })

// const arr = [1, 2, 3]
// // 替换原型方法
// Object.setPrototypeOf(arr, arrayMethods)

// arr.push(4) // 视图更新
// console.log(arr) // [1, 2, 3, 4]

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

import { provide, inject } from 'vue'
import store from './index'
const StoreSymbol = Symbol('store')

// 父组件setup调用
export function provideStore() {
  provide(StoreSymbol, store)
}

// 子组件获取
export function useStore() {
  const store = inject(StoreSymbol)
  if (!store) {
    // 抛出错误，不提供 store
  }
  return store
}
