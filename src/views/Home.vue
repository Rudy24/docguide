<!--
 * @Author: 宋绍华
 * @Date: 2021-09-17 10:16:41
 * @LastEditTime: 2021-09-23 19:45:37
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide-master\src\views\Home.vue
-->
<template>
  <div class="home name">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      @click="handleClick"
    >
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const a = 1
    console.log(a, 11)
  },
  methods: {
    handleClick() {
      return true
    }
  }
})
</script>

<style lang="scss" scoped>
.name {
  color: red;
}

.home {
  color: blue;
}
</style>
