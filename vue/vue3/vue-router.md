### 深入Vue Router

重构至尊项目中，发现很多东西在路由层做，可以把一些复杂的问题简单化，所以对Vue Router文档去研究了一番。下面总结一些不常用却很实用的一些功能：

1. **命名视图**

通常一个路由对应一个页面组件，但有时候我们想一个页面有多个页面视图，如页面有主内容和导航，我们或许可以在每个页面都加上导航组件，但是这样做就有些复杂，用命名视图就可以很简单的解决问题，如图：

![导航](./1.png)

Html中可以这样：

```html
<router-view/>
<router-view name="navbar"/>
```

然后路由中可以这样配置:

```javascript
components: {
  default: () => import('@/views/scienceLaundry'),
  navbar: () => import('@/components/BmNavbar')
}
```

2. **别名**

如路由：

```javascript
{ path: '/a', component: A, alias: '/b' }
```

`/a` 的别名是 `/b`，意味着，当用户访问 `/b` 时，URL 会保持为 `/b`，但是路由匹配则为 `/a`，就像用户访问 `/a` 一样。

这个在重构至尊的项目中，新的路由可能由于嵌套方式、传参而与旧的路由不同，但为了兼容旧的，还是需要旧的路由路径，这时候就可以用别名。

3. **路由组件传参**

我们常用的传参方式可以通过query、params，还有一个比较少用的是props给组件传参，通常组件中获取传递的值是props中获取的，props可以在不改变组件的实现方式直接传递参数。

```javascript
{ path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
```
