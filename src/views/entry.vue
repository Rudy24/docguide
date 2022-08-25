<!--
 * @Author: 宋绍华
 * @Date: 2022-08-22 16:17:42
 * @LastEditTime: 2022-08-25 14:34:38
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide\src\views\entry.vue
-->
<template>
  <div class="entry">
    <div id="container"></div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import router from '@/router'
import { whichEnv } from '@/utils'
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
const { OrbitControls } = require('@/assets/lib/OrbitControls.js')
const wx = require('weixin-js-sdk')
const { OBJLoader } = require('@/assets/lib/OBJLoader.js')
const { MTLLoader } = require('@/assets/lib/MTLLoader.js')

onMounted(() => {
  const container = document.getElementById('container')!
  const progress = ref(0)
  let scene = new THREE.Scene()
  const objLoader = new OBJLoader()
  const mtlLoader = new MTLLoader()
  let renderer = new THREE.WebGLRenderer({ antialias: true })
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
  mtlLoader.load('/static/entry7.mtl', (materials: any) => {
    objLoader.setMaterials(materials)
    materials.preload()
    objLoader.load(
      '/static/entry7.obj',
      (obj: any) => {
        obj.position.set(-50, -45, -10) // 模型摆放的位置
        obj.scale.set(0.03, 0.03, 0.02) // 模型放大或缩小，有的时候看不到模型，考虑是不是模型太小或太大。
        scene.add(obj as any) // 将模型加入场景中
        // 因此面板
        if (obj.getObjectById(477)) {
          obj.getObjectById(477).material.visible = false
        }
      },
      // called while loading is progressing
      (xhr: { loaded: number; total: number }) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`)
        progress.value = (xhr.loaded / xhr.total) * 100
      }
    )
  })

  let raycaster: THREE.Raycaster
  let line: THREE.Object3D<THREE.Event> | THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>

  const mouse = new THREE.Vector2()
  let mouseHelper: THREE.Object3D<THREE.Event> | THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>

  window.addEventListener('load', init)

  function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.z = 120

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.minDistance = 50
    controls.maxDistance = 200
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load('https://file.vetscloud.com/f07aee41737d60302dd23f4d2b717b84.gif')
    scene.background = texture

    scene.add(new THREE.AmbientLight(0x443333))

    const dirLight1 = new THREE.DirectionalLight(0xffddcc, 1)
    dirLight1.position.set(1, 0.75, 0.5)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0xccccff, 1)
    dirLight2.position.set(-1, 0.75, -0.5)
    scene.add(dirLight2)

    const geometry = new THREE.BufferGeometry()
    geometry.setFromPoints([new THREE.Vector3(), new THREE.Vector3()])

    line = new THREE.Line(geometry, new THREE.LineBasicMaterial())
    scene.add(line)

    raycaster = new THREE.Raycaster()

    window.addEventListener('resize', onWindowResize)

    window.addEventListener(
      'click',
      (event: any) => {
        let ids = []
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

        raycaster.setFromCamera(mouse, camera)

        var intersects = raycaster.intersectObjects(scene.children)

        for (var i = 0; i < intersects.length; i++) {
          const { id } = intersects[i].object
          ids.push(id)
          if (id === 479) {
            console.log('商城')
            // 设置nft缓存
            setNftStorage('mall')
            gotoMall()
            // 商城
            break
          } else if (id === 561) {
            // 设置nft缓存
            setNftStorage('live')
            console.log('阿闻直播')
            gotoMall()
            // 阿闻直播
            break
          } else if (id === 477 && ids.includes(566)) {
            console.log('宠物医院')
            // 设置nft缓存
            setNftStorage('hospital')
            router.push({ name: 'Hospital' })
            // 宠物医院
            break
          } else if (id === 559) {
            console.log('nft', 567)
          }
        }
      },
      false
    )

    onWindowResize()
    animate()
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
})

// 跳转商城
const gotoMall = () => {
  const env = whichEnv()
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
// 设置nft缓存
const setNftStorage = (k: string) => {
  let nft = window.localStorage.getItem('nft-' + k) || 0
  if (!nft) {
    window.localStorage.setItem(`nft-${k}`, '1')
  }
}
</script>
