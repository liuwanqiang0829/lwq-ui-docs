import { defaultTheme} from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar:[
      {
        text:"首页",
        link:"/"
      },
      {
        text:"组件",
        link:"/guide/component.md"
      }
    ],
    sidebar: {
      '/': [
        {
          text: '组件介绍'
        }
      ],
      "/guide/":[
        {
          text:"表单组件",
          collapsible: true,
          children: [
            {
              text:"图片预览组件",
              collapsible: true,
              link:"/package/preview-img"
            },
            {
              text:'Input',
              link:"/guide/input.md",
              collapsible: true,
            },
             {
              text:"checkbox",
              link:"/guide/checkbox.md"
             }
            ],
        }
      ]
    }
  }),
  plugins:['vuepress-plugin-demo-container-v1',
    docsearchPlugin({
      appId: '',
      apiKey: '',
      indexName: '',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
  })]
}