import comp from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/demo/layout.html.vue"
const data = JSON.parse("{\"path\":\"/demo/layout.html\",\"title\":\"布局\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"布局\",\"icon\":\"object-group\",\"order\":2,\"category\":[\"指南\"],\"tag\":[\"布局\"],\"description\":\"布局包括: 导航栏 侧边栏 页脚 同时每个页面包含: 路径导航 标题和页面信息 TOC (文章标题列表) 贡献者、更新时间等页面元信息 评论 主题也带有以下元素: 夜间模式按钮 返回顶部按钮 打印按钮 你可以在主题选项和页面的 frontmatter 中自定义它们。\"},\"readingTime\":{\"minutes\":0.53,\"words\":159},\"filePathRelative\":\"demo/layout.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
