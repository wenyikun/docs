### vue-router和vuex在Vue3中的使用

Vue3中`setup`是不能使用`this`访问的，所以之前`this.$route`、`this.$store`是不能继续使用的，而要使用新的方式，vue-router和vuex插件内部使用`provide`和`inject`依赖注入并暴露一个组合函数。

#### vue-router使用

看看vue-router的中`useApi.ts`源码：

```javascript
import { inject } from 'vue'
import { routerKey, routeLocationKey } from './injectionSymbols'
import { Router } from './router'
import { RouteLocationNormalizedLoaded } from './types'

export function useRouter(): Router {
  return inject(routerKey)!
}

export function useRoute(): RouteLocationNormalizedLoaded {
  return inject(routeLocationKey)!
}
```

很明显`this.$router`和`this.$route`替代方案就是上面两个函数，在Vue3项目中直接使用：

```javascript
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
  }
}
```

vue-router钩子函数定义在路由配置里面：

```javascript
[{
  path: "/",
  name: "Home",
  component: {
    ...Home,
    beforeRouteEnter(to, from, next) {
      next()
    }
  }
}]
```

#### vuex使用

vuex暴露了`useStore`函数在`setup`中使用：

```javascript
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      count: computed(() => store.state.count), // state
      evenOrOdd: computed(() => store.getters.evenOrOdd), // getters
      increment: () => store.commit('increment'), // commit
      decrement: () => store.dispatch('decrement') // dispatch
    }
  }
}
```
