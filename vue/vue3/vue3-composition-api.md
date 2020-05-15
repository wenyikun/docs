### Composition API（组合式 API）

Composition API是Vue3中最具争议的一个更新，也是更新最大的地方。为什么选用Composition API？Vue官方介绍是：

1. 更好的逻辑复用与代码组织
2. 更好的类型推导

虽然是新的东西，但也不太令人费解。只是Vue2中的Options API的另一种组织方式，如data、methods、computed、watch等，在Vue3都可以找到对应的函数。

`setup` 函数是一个新的组件选项，作为在组件内使用 Composition API 的入口点。后面Vue其他选项的代码都可以包含在`setup`里面。

```javascript
export default {
  setup () {
    // 相当于Vue2中的Vue.observable()，下面state已经变成了响应式数据
    const state = reactive({
      count: 1
    })
    // ref是新的东西，可以把单个值变成响应式数据，通过.value访问
    const count = ref(1)
    // computed理解起来就跟Vue2的一样
    const plusOne = computed({
      get: () => count.value + 1,
      set: (val) => {
        count.value = val - 1
      }
    })
    // 内部数据发生变化，函数就会执行
    watchEffect(() => console.log(count.value))
    watch(count, (count, prevCount) => {})
    return state
  }
}
```

所以Composition API用起来并不难，只是要转变另一种方式。生命周期在内部也是有对应关系的，如下：

- ~~`beforeCreate`~~ -> 使用 `setup()`
- ~~`created`~~ -> 使用 `setup()`
- `beforeMount` -> `onBeforeMount`
- `mounted` -> `onMounted`
- `beforeUpdate` -> `onBeforeUpdate`
- `updated` -> `onUpdated`
- `beforeDestroy` -> `onBeforeUnmount`
- `destroyed` -> `onUnmounted`
- `errorCaptured` -> `onErrorCaptured`

看起来Composition API并没有多大优势，反而把以前习惯的方式给颠覆了。那来看看官方说的两个优势体现在哪？
1. 代码复用，`setup`完全就是一个JavaScript函数，如果我需要复用，那直接抽出来就可以了。可能有人会说`mixins`也可以，但是`mixins`是由弊端的，一个是暴露的 property 来源不清晰，一个是命名冲突。
2. TypeScript更好的支持，Vue2中Options API和TypeScript的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。Composition api全部采用普通函数，在编写代码时可以享受完整的类型推断。

更多细节与需要注意的点还是要在项目中才能体会。


#### 参考资料：

- [Vue 组合式 API](https://composition-api.vuejs.org/zh/api.html)
