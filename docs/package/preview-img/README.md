# 预览组件
##### <strong style="font-size:14px;">使用示例</strong>
<preview-img-example></preview-img-example>
::: details 展开代码

```vue
<template>
 <div>
  <lwq-preview-img >
    <template #img="{show}">
      <img src="../../public/assets/logo.png" style="width: 200px;height: 200px;margin-right: 30px;" @click="show"  alt="">
      <img src="../../public/assets/logo.png" style="width: 200px;height: 200px;" @click="show" alt="">
    </template>
  </lwq-preview-img>
  <hr>
  <button @click="visible=!visible">预览图片</button>
 </div>
</template>
<script>
import { reactive,ref } from 'vue';
export default {
  name: 'App',
  setup(){
      let list=reactive([])
      let visible=ref(false)
      list=[require("./assets/logo.png"),require("./assets/0034034892281415_b.jpg"),require("./assets/1598319721647.jpg")]
      return{
        list,
        visible
      }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.preview{
  width: 100px;
  height: 200px;
  background-color: red;
}
</style>

```
:::
#### <strong style="font-size:14px;">Methods</strong>
方法名	| 说明 |	 回调参数 | 备注
:---|:---:|:---|:---
show|打开图片预览|(list:Array<string,string>,currentUrl:string,position:Position<string,number>),第一个参数list为预览图片列表,第二个参数currentUrl为当前预览的图片地址，第三个参数position是点击位置的鼠标坐标，对象属性包括left和top|--
