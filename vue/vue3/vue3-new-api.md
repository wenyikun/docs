### vue3的一些新功能

Vue3依然是保留Vue2功能的，所以组件开发方式依然是可以按照Vue2的方式，下面是一些改进的地方：

##### 入口文件
Vue 3.0已经不在导出Vue构造器，意味着之前用Vue实例的全局挂载/配置已经不适用了，所以很多ui库也会因为这个报错。
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
```
可以看到，Vue导出了`createApp`去创建Vue实例，全局挂载及插件都要使用`use`。

##### 片段（Fragments）
一个令人激动的改变，之前我们创建组件都是需要一个根节点，很多时候这个节点是没用的，反而是个累赘。Vue 3.0可以不需要这个节点啦，我们可以直接这样写：
```html
<template>
  <div>111</div>
  <div>222</div>
</template>
```

##### Multiple v-models
可以设置多个v-model也是很有用的，比如一个字典的通常是键、值改变，一个表单组件中包含多个表单原件的情况。使用：
```html
<template>
  <Form
    v-model:name="inviteeName"
    v-model:age="inviteeAge"
  >
  </Form>
</template>
```
