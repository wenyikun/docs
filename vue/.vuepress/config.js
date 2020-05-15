module.exports = {
  base: '/vue/',
  title: '前端学习笔记',
  description: '前端、学习、HTML、CSS、JavaScript、Typescript、Vue等',
  head: [
    ['link', { rel: 'icon', href: 'https://res.vwantu.com/uploads/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    sidebar: [
      {
        title: 'Vue3初体验',
        collapsable: false,
        children: [{
          title: 'Vue 3.0 项目创建',
          path: '/vue3/vue3-start',
        }, {
          title: 'Vue2与Vue3响应式原理对比',
          path: '/vue3/vue3-proxy',
        }, {
          title: 'Composition API（组合式 API）',
          path: '/vue3/vue3-composition-api',
        }, {
          title: 'vue3一些新的特性',
          path: '/vue3/vue3-new-api'
        }, {
          title: 'vue-router和vuex在Vue3中的使用',
          path: '/vue3/vue3-router-vuex'
        }]
      }
    ]
  }
}
