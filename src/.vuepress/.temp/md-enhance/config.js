import CodeDemo from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
