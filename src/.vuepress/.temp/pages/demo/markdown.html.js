import comp from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/demo/markdown.html.vue"
const data = JSON.parse("{\"path\":\"/demo/markdown.html\",\"title\":\"Markdown 展示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Markdown 展示\",\"icon\":\"fa6-brands:markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"],\"gitInclude\":[\"README.md\"],\"description\":\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。 Markdown 介绍 如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。 Markdow...\"},\"readingTime\":{\"minutes\":3.47,\"words\":1041},\"filePathRelative\":\"demo/markdown.md\",\"autoDesc\":true}")
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
