import { hasGlobalComponent } from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import VPBanner from "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";

import "C:/Users/YangChen114514/Documents/DocProjects/sra-docs/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
