/* eslint-disable */
const wx = require('weixin-js-sdk')

const whichEnv: () => 'miniprogram' | 'wechat' | 'other' = () => {
  const ua = navigator.userAgent.toLowerCase()
  // @ts-ignore
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
    wx.miniProgram.getEnv((res: { miniprogram: any }) => {
      if (res.miniprogram) {
        return 'miniprogram'
      } else {
        return 'wechat'
      }
    })
  }
  return 'other'
}

export { whichEnv }
