import { defineConfig, DefaultTheme } from "vitepress";
import { pathToSideBar, typeToNamespace } from "../../utils";

export default defineConfig({
  ignoreDeadLinks: true,
  title: "API",
  description: "口袋方舟 编辑器的 Api 文档",
  themeConfig: {
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
    siteTitle: "API",
    nav: [
      {
        text: "020 版本",
        items: [
          { text: "021 预发", link: "/item-1" },
          { text: "019 版本", link: "/item-2" },
          { text: "018 版本", link: "/item-3" },
        ],
      },
      {
        text: "语言",
        items: [
          { text: "中文", link: "/item-1" },
          { text: "英文", link: "/item-2" },
        ],
      },
    ],
    sidebar: [
      {
        text: "示例",
        collapsible: false,
        collapsed: false,
        items: [
          { text: "给用户看的demo", link: "/test/Base" },
          { text: "可用的写法", link: "/test/Class" },
          { text: "可自动化的点", link: "/test/Delegate" },
          {
            text: "自动化后的demo",
            link: "/classes/Service.Service.MessageChannelService",
          },
          { text: "索引的demo", link: "/test/Type" },
          { text: "variable的demo", link: "/test/Variable" },
          { text: "enums的demo", link: "/test/enums" },
          { text: "function的demo", link: "/test/function" },
          { text: "一个空白文档", link: "/test/interface" },
        ],
      },
      {
        text: "Namespace",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Index", link: "/test/interface" },
          { text: "Events", link: "/modules/Events.Events" },
          { text: "Extension", link: "/modules/Extension.Extension" },
          { text: "MobileEditor", link: "/modules/MobileEditor.MobileEditor" },
          { text: "Type", link: "/modules/Type.Type" },
          { text: "UI", link: "/modules/UI.UI" },
          { text: "Util", link: "/modules/Util.Util" },
          { text: "Util", link: "/modules/DataStorage.DataStorage" },
          { text: "Util", link: "/modules/Network.Network" },
        ],
      },
      ...typeToNamespace(["classes", "enums", "interfaces"]),
      // ...pathToSideBar(["classes", "enums", "interfaces", "modules"]),
    ],
    editLink: {
      pattern:
        "https://github.com/prodigytech-doc/api-docs/tree/main/docs/:path",
      text: "到 github 上进行修改",
    },
    lastUpdatedText: "Updated Date",
    docFooter: {
      prev: "Pagina prior",
      next: "Proxima pagina",
    },
    outline: [2, 3],
  },
});

function otherSidebar() {
  return [
    {
      text: "自动化生成",
      collapsible: true,
      collapsed: true,
      items: [{ text: "enums", link: "/auto/enums" }],
    },
    {
      text: "Common",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Delegate", link: "/common/Delegate" },
        { text: "DelegateInterface", link: "/common/DelegateInterface" },
        { text: "MulticastDelegate", link: "/common/MulticastDelegate" },
        {
          text: "MulticastDelegateInterface",
          link: "/common/MulticastDelegateInterface",
        },
      ],
    },
    {
      text: "Core",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Base", link: "/core" },
        { text: "Game Play", link: "/game-play" },
        { text: "GameObject", link: "/GameObject" },
      ],
    },
    {
      text: "DataStorage",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Events",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Extension",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Gameplay",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Global",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "GoogleAnalytics",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "KeyboardSimulation",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "MathLibrary",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "MobileEditor",
      collapsible: true,
      collapsed: true,
      items: [],
    },
  ];
}
