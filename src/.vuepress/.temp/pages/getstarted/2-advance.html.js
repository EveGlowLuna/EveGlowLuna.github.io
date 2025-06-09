import comp from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/src/.vuepress/.temp/pages/getstarted/2-advance.html.vue"
const data = JSON.parse("{\"path\":\"/getstarted/2-advance.html\",\"title\":\"进阶操作\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"进阶操作\",\"icon\":\"diamond\",\"order\":2},\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"getstarted/2-advance.md\"}")
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
