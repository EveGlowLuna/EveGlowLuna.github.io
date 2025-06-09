import comp from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/getstarted/1-getstarted.html.vue"
const data = JSON.parse("{\"path\":\"/getstarted/1-getstarted.html\",\"title\":\"开始使用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"开始使用\",\"icon\":\"laptop\",\"order\":1},\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"getstarted/1-getstarted.md\"}")
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
