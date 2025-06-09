export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/download.html", { loader: () => import(/* webpackChunkName: "download.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/download.html.js"), meta: {"title":"下载","icon":"download"} }],
  ["/pluginstore.html", { loader: () => import(/* webpackChunkName: "pluginstore.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/pluginstore.html.js"), meta: {"title":"插件商店","icon":"plug"} }],
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"档案主页","icon":"house"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎","icon":"house"} }],
  ["/develop/API.html", { loader: () => import(/* webpackChunkName: "develop_API.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/develop/API.html.js"), meta: {"title":"API","icon":"box","order":4} }],
  ["/develop/before.html", { loader: () => import(/* webpackChunkName: "develop_before.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/develop/before.html.js"), meta: {"title":"前言","icon":"info","order":1} }],
  ["/develop/coding-style-guidelines.html", { loader: () => import(/* webpackChunkName: "develop_coding-style-guidelines.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/develop/coding-style-guidelines.html.js"), meta: {"title":"代码格式规范","icon":"file","order":3} }],
  ["/develop/plugin-development-guide.html", { loader: () => import(/* webpackChunkName: "develop_plugin-development-guide.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/develop/plugin-development-guide.html.js"), meta: {"title":"插件开发指南","icon":"laptop-code","order":5} }],
  ["/develop/", { loader: () => import(/* webpackChunkName: "develop_index.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/develop/index.html.js"), meta: {"title":"快速开始","icon":"laptop"} }],
  ["/develop/study.html", { loader: () => import(/* webpackChunkName: "develop_study.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/develop/study.html.js"), meta: {"title":"学习","icon":"laptop","order":2} }],
  ["/getstarted/advance.html", { loader: () => import(/* webpackChunkName: "getstarted_advance.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/getstarted/advance.html.js"), meta: {"title":"进阶操作","icon":"rocket","order":2} }],
  ["/getstarted/getstarted.html", { loader: () => import(/* webpackChunkName: "getstarted_getstarted.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/getstarted/getstarted.html.js"), meta: {"title":"开始使用","icon":"flag","order":1} }],
  ["/getstarted/", { loader: () => import(/* webpackChunkName: "getstarted_index.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/getstarted/index.html.js"), meta: {"title":"开始使用","icon":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
