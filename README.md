<!--
 * @Author: 宋绍华
 * @Date: 2021-09-17 10:16:41
 * @LastEditTime: 2021-10-09 11:19:28
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide\README.md
-->

## 启动命令

1. npm run serve 开启本地环境
2. npm run build 构建打包
3. npm run cm "提交的注释，但是要遵循 commitlint 规范", 例如 npm run cm "feat: 新功能开发",但是对于新建的分支，还是需要手动推送到远端
4. npm run analysis 执行包分析

## 规范

无规矩不成方圆，就规范来说没有谁对谁错，需要大家约定好，后面就按照规定的方案就做，同时利用工具去规范。

### 编码规范

1. js 规范, 提供 eslint 插件 (@vue/airbnb) 检测 [airbnb JavaScript 规范](https://github.com/lin-123/javascript)

2. css 规范，提供 vs code stylelint 插件，stylelint 配置 stylelint-config-standard 插件[styleguide](https://github.com/fex-team/styleguide/blob/master/css.md)

3. Vue 编码规范 可以参考[Vue 风格指南](https://cn.vuejs.org/v2/style-guide/#%E8%A7%84%E5%88%99%E5%BD%92%E7%B1%BB)

### 命名规范

- Vue 规范可以 参考[Vue 风格指南](https://cn.vuejs.org/v2/style-guide/#%E8%A7%84%E5%88%99%E5%BD%92%E7%B1%BB)和
  [vue/attributes-order | eslint-plugin-vue (vuejs.org)](https://eslint.vuejs.org/rules/attributes-order.html)
- js 可以参考 airbnb 的规范 [airbnb JavaScript 规范](https://github.com/lin-123/javascript)。
- css 可以参考 [CSS BEM 书写规范](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)

### 文件命名

- 目录(文件夹)

  - 目录(文件夹)：全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数 kebab-case
  - 示例： scripts / styles / components / images / utils / layouts / demo-styles / demo-scripts / img / doc

【特殊】Vue components(公共组件，业务组件(业务模块 里面抽离出来的组件))都采用大驼峰 PascalCase Tips: 目录命名需要用名词，最好不好出现动词之类。 最多不超超过 3
级，反例： get-my-components-items，正例：my-items

- 文件
  - 全部采用小写方式， 以中划线分隔 kebab-case
  - 示例： render-dom.js / signup.css / index.html / company-logo.png

### git 规范

使用 commitlint 可以规范化提交信息，同样的，可以设置工具来检查提交信息是否符合格式要求, 具体 commit 提交的格式，可以参考如下。

操作模板，type(scope): subject，注意 type 后面的空格

- build: 主要目的是修改项目构建系统(例如 gulp，webpack，rollup 的配置等)的提交
- ci: 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
- docs: 文档更新
- feat: 新增功能
- merge: 分支合并 Merge branch ? of ?
- fix: bug 修复
- perf: 性能, 体验优化
- refactor: 重构代码(既没有新增功能，也没有修复 bug)
- style: 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
- test: 新增测试用例或是更新现有测试
- revert: 回滚某个更早之前的提交
- chore: 不属于以上类型的其他类型

example:

```javascript


# 错误提交提交
$ git commit -m "忽略node_modules"
husky > commit-msg (node v10.15.3)

⧗   input: 忽略node_modules
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]
✖   found 2 problems, 0 warnings
    (Need help? -> https://github.com/conventional-changelog/commitlint#what-is-commitlint )

husky > commit-msg hook failed (add --no-verify to bypass)
# 正确提交
$ git commit -m "build(npm): 忽略node_modules"
husky > commit-msg (node v10.15.3)

⧗   input: build(npm): 忽略node_modules
✔   found 0 problems, 0 warnings
    (Need help? -> https://github.com/conventional-changelog/commitlint#what-is-commitlint )


[master 8728336] build(npm): 忽略node_modules
1 file changed, 1 insertion(+)
create mode 100644 .gitignore

```

### 注释

需要在文件最上方添加文档注释，标注组件的功能用途、接收参数、示例等

```javascript
/**
 * 输入框格式化
 * 
 * 1. 支持数字(包含 整数 plus，整数 int，浮点正数 floatpos，正常的浮点数)
 *  - v-base-input:{num: true, plus: true} 正数
 *  - v-base-input:{num: true, int: true} 整数
 *  - v-base-input:{num: true, floatpos: true} 浮点正数
 *  - v-base-input:{num: true} 正常的浮点数
 * 2. 汉字
 *  - v-base-input:{chinese: true} 汉字
 * 3. 英文
 *  - v-base-input:{english: true}
 * 4. 汉字+英文
 *  - v-base-input:{english: true, chinese: true} 汉字 + 英文
 * 5. 数字+英文
 *  - v-base-input:{english: true, num: true} 数字+英文
 * 6. 汉字 + 英文 + 数字
 *  - v-base-input:{english: true, num: true,chinese: true} 汉字 + 英文 + 数字
 * 7. 没有限制的输入
 *  - v-base-input
 *
 * 如果需要扩展的，可以按照上面的模式扩展
 *
 * example 1 如果是在业务代码里面使用
 * <el-input v-base-input:{chinese: true, english: true}  placeholder='abcdefg' />
 *
 * example 2 如果是在公共组件中,动态绑定的
 *
 * 这是配置文件，看里面的directive
 * searchList: [
    {
      id: 0,
      label: '用户编号',
      model: 'userNo',
      type: 'input',
      placeholder: '请输入用户编号',
      clear: true,
      directive: { num: true, english: true }
    }
  ]
 * 这是组件内动态绑定的
 * item 是指上面searchList 里面的对象
 * <el-input v-base-input:[item.directive] />
 */
```
