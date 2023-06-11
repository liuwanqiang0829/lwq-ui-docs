import { defineClientConfig  } from '@vuepress/client'
import ElementPlus from 'element-plus'
import PreviewImg from '../components/previewImg/previewImg.vue'
import PreviewImgExample from "../components/previewImg/preview-img-example.vue"
import 'element-plus/dist/index.css'
export default defineClientConfig ({
  enhance({ app }){
    // app 是由 createApp 创建的 Vue 应用实例
    app.use(ElementPlus)
    app.component("lwqPreviewImg",PreviewImg)
    app.component("previewImgExample",PreviewImgExample)
    // app.use(PreviewImg)
  }
})