/*
 * @Author: 宋绍华
 * @Date: 2021-09-17 10:16:41
 * @LastEditTime: 2022-08-22 11:23:21
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'], // 去掉尾部分号
    'comma-dangle': ['error', 'never']
  }
}
