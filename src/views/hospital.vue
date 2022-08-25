<!--
 * @Author: 宋绍华
 * @Date: 2022-08-23 17:41:47
 * @LastEditTime: 2022-08-25 09:39:51
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide\src\views\hospital.vue
-->
<template>
  <div class="hospital">
    <video id="hospital-video" style="width: 100vw; height: 100vh; object-fit: cover" muted="muted" autoplay>
      <source src="https://file.vetscloud.com/c81108ccc443d82c998f14db62b9b63e.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { whichEnv } from '@/utils'
import { onMounted } from 'vue'
const wx = require('weixin-js-sdk')

onMounted(() => {
  const video = document.getElementById('hospital-video')
  if (video) {
    const env = whichEnv()
    video.play()
    video.onended = (e: any) => {
      if (env === 'miniprogram') {
        wx.miniProgram.navigateTo({
          url: '/app/mall/page/goodsDetail?goods_id=1053303001'
        })
        // 小程序
      } else if (env === 'wechat') {
        // 微信
        window.location.href = 'weixin://dl/business/?t=o7Fz0IrZ3dm'
      }
    }
  }
})
</script>
