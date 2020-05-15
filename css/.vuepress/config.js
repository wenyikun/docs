module.exports = {
  base: '/css/',
  title: '前端学习笔记',
  description: '前端、学习、HTML、CSS、JavaScript、Typescript、Vue等',
  head: [
    ['link', { rel: 'icon', href: 'https://res.vwantu.com/uploads/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    sidebar: [
      {
        title: '滤镜(fliter)',
        collapsable: false,
        children: [{
          title: 'fliter是什么',
          path: '/fliter/what-is-fliter'
        }, {
          title: 'fliter设置渐变背景',
          path: '/fliter/fliter-gradient'
        }, {
          title: 'fliter融合技-图片阴影',
          path: '/fliter/filter-combine-shadow'
        }, {
          title: 'fliter融合技-燃烧的火焰',
          path: '/fliter/filter-combine-fire'
        }]
      },
      {
        title: '滚动捕捉(Scroll Snap)',
        collapsable: false,
        children: [{
          title: '滚动捕捉简单使用',
          path: '/scroll/scroll-snap'
        }, {
          title: '非边缘捕捉',
          path: '/scroll/scroll-padding-margin'
        }]
      },
      {
        title: 'Grid（网格布局）',
        collapsable: false,
        children: [{
          title: 'Grid布局介绍（1）',
          path: '/grid/intro'
        }]
      }
    ]
  }
}
