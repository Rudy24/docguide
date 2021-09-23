<!--
 * @Author: 宋绍华
 * @Date: 2021-09-17 10:16:41
 * @LastEditTime: 2021-09-23 19:54:00
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide-master\src\views\About.vue
-->
<template>
  <div
    style="display: flex;"
    class="about"
    @click="handleClick"
  >
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  data() {
    return {
      d: 1
    }
  },
  methods: {
    handleClick() {
      console.log(111)
    }
  }
})
</script>

<style lang="scss" scoped>
.about {
  color: red;
}
</style>
