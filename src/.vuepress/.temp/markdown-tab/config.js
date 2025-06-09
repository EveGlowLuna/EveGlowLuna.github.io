import { CodeTabs } from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
