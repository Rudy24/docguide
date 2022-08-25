/*
 * @Author: 宋绍华
 * @Date: 2022-08-22 10:26:39
 * @LastEditTime: 2022-08-22 10:36:32
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'

createApp(App).use(store).use(router).mount('#app')
