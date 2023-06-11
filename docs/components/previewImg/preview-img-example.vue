<template>
  <div>
   <lwq-preview-img >
     <template #img="{show}">
       <img src='https://img.yzcdn.cn/1.jpg' style="width: 200px;height: 200px;margin-right: 30px;" @click.stop="show"  alt="">
       <img src='https://img.yzcdn.cn/2.jpg' style="width: 200px;height: 200px;" @click.stop="show" alt="">
     </template>
   </lwq-preview-img>
   <hr>
  </div>
 </template>
 <script>
 import { reactive,ref } from 'vue';
 export default {
   name: 'PreviewImgExample'
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