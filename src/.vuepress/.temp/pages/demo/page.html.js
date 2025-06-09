import comp from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/page.html\",\"title\":\"页面配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"页面配置\",\"cover\":\"/assets/images/cover1.jpg\",\"icon\":\"file\",\"order\":3,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"使用指南\"],\"tag\":[\"页面配置\",\"使用指南\"],\"sticky\":true,\"star\":true,\"footer\":\"这是测试显示的页脚\",\"copyright\":\"无版权\",\"description\":\"more 注释之前的内容被视为文章摘要。 页面标题 The first H1 title in Markdown will be regarded as page title. Markdown 中的第一个 H1 标题会被视为页面标题。 你可以在 Markdown 的 Frontmatter 中设置页面标题。 页面信息 你可以在 Markdown 的 ...\"},\"readingTime\":{\"minutes\":1.76,\"words\":529},\"filePathRelative\":\"demo/page.md\",\"autoDesc\":true}")
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
