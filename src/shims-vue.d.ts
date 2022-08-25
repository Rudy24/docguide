/*
 * @Author: 宋绍华
 * @Date: 2022-08-22 10:26:39
 * @LastEditTime: 2022-08-22 11:25:25
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'three-obj-mtl-loader'
