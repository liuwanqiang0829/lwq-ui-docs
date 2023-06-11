<template>
  <slot name="img" :show=showByClick></slot>
  <div class="preview-container"  v-if="showPreview" >
      <div class="close" @click="close">
        <div class="close-icon"></div>
      </div>
       <div class="title">{{title}}</div>
       <!-- <span>{{ imgList+"1212" +currentIndex}}</span> -->
       <div class="left-icon" v-if="imgList.length>1">
        <button  class="left-btn"
          @click="preShowImg"
          :disabled="currentIndex<=0"
        ></button>
       </div>
       <div class="right-icon" v-if="imgList.length>1">
        <button class="right-btn"
          @click="nextShowImg"
          :disabled="currentIndex>=imgList.length-1"
        ></button>
       </div>
       <div class="img-box">
        <img :src="currentImg" :style="imgClass"  @mousewheel="watchCursorWheel($event)" alt="">
       </div>
    </div>
</template>

<script>
import {onMounted, reactive,renderSlot, ref,useSlots,watch} from "vue"
export default {
  name:"PreviewImg",
  props:{
    previewList:{
      type:Array,
      default:()=>[]
    },
    visible:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    console.log("props",props)
    console.log("context",context)
    let showPreview=ref(false)
    let title=ref("图片")
    let currentImg=ref("")
    let imgClass=reactive({})
    let currentIndex=ref(0)
    let imgList=reactive([])
    watch(()=>props.visible,(newValue,oldValue)=>{
      if(props.previewList.length>0){
      showPreview.value=newValue
      currentImg.value=props.previewList[0]
      props.previewList.forEach(item=>{
          imgList.push(item)
      })
      console.log("title",title)
      console.log("imglist",imgList)
      console.log("currentImg",currentImg)
    }
  })
    onMounted(()=>{
    //  let slots=useSlots()
    //  console.log(slots.img())
    })
     //右边的按钮
    function nextShowImg(){
      currentImg.value=imgList[++currentIndex.value]
    }
    function preShowImg(){
      currentImg.value=imgList[--currentIndex.value]
    }
    function showByClick(e){
      showPreview.value=true
      currentImg.value=e.srcElement.currentSrc
    }
    //关闭弹窗
    function close(){
       showPreview.value=false

    }
    //监视鼠标滚动事件
     function watchCursorWheel(event){   
      const width=event.target.clientWidth
      const height=event.target.clientHeight
      if(event.wheelDeltaY>0){
        imgClass.width=width*1.2+"px"
        imgClass.height=height*1.2+"px"
      }else{
        imgClass.width=width*0.8+"px"
        imgClass.height=height*0.8+"px"
      }
    }
    
    return{
      showPreview,
      currentImg,
      currentIndex,
      imgList,
      imgClass,
      renderSlot,
      nextShowImg,
      preShowImg,
      showByClick,
      close,
      watchCursorWheel
    }
  }
}
</script>
<style lang="less" scoped>
.preview-container{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  right: 0;
  bottom:0;
  &:hover{
    cursor: pointer;
  }
  background-color: rgba(0,0,0,0.8);
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,calc(-50% - 20px));
    z-index: 10;
    max-width: 80%;
    max-height: 80%;
    min-width: 20%;
    min-height: 20%;
    &:hover{
      cursor: crosshair;
    }
    object-fit: contain;
  }
  .left-icon{
    position: absolute;
    left: 4%;
    top: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .left-btn{
      width: 10px;
      height: 15px;
      margin-left: 5px;
      background-color: transparent;
      border-color: transparent;
      transform: rotate(45deg);
      border-left: 2px solid #ffffff;
      border-bottom: 2px solid #ffffff;
    }

  }
  .right-icon{
    position: absolute;
    right: 4%;
    top: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .right-btn{
      width: 10px;
      height: 15px;
      margin-left: -5px;
      background-color: transparent;
      border-color: transparent;
      transform: rotate(45deg);
      border-top: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
    }

  }
}
.title{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: rgba(219, 208, 181, 0.5);
}
.close{
  position: absolute;
  top:10px;
  right: 25px;
  width: 50px;
  height: 50px;
  background-color: #fff9f9;
  border-radius: 25px;
}
.close-icon::before,.close-icon::after{
  position: absolute;
  top:16px;
  right: 25px;
  content: "";
  width: 2px;
  height: 20px;
  background-color: #141111;

}
.close-icon::before{
  transform: rotate(45deg);
}
.close-icon::after{
  transform: rotate(-45deg);
}
</style>
