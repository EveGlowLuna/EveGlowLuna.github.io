export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"StarRailAssistant\",\"description\":\"一个基于图像识别的崩铁自动化程序，帮您完成从启动到退出的崩铁日常。\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/img/SRAicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
