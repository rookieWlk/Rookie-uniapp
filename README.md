Rookie uniapp框架基于`unibest`开发，由 `uniapp` + `Vue3` + `Ts` + `Vite5` + `UnoCss` + `wot-ui` + `z-paging` 构成，使用了最新的前端技术栈，无需依靠 `HBuilderX`，通过命令行方式运行 `web`、`小程序` 和 `App`（编辑器推荐 `VSCode`，可选 `webstorm`）。

内置了 `约定式路由`、`layout布局`、`请求封装`、`请求拦截`、`登录拦截`、`UnoCSS`、`i18n多语言` 等基础功能，提供了 `代码提示`、`自动格式化`、`统一配置`、`代码片段` 等辅助功能。

后续会开发譬如登录页、商城类程序首页、商城类程序常用模块、接入微信支付、echarts图表、即时通讯等功能模块，并和[Rookie admin](https://github.com/rookieWlk)（pc端后台开发模板）、Rookie Django(基于Django的后台开发模板)打通，打造成一个开箱即用的前端模板框架。

## 📥 参考文档

- `unibest`：[https://codercup.github.io/unibest-docs/](https://codercup.github.io/unibest-docs/)

- `uniapp`：[https://uniapp.dcloud.net.cn/](https://uniapp.dcloud.net.cn/)

- `UnoCss`: [https://unocss.nodejs.cn/](https://unocss.nodejs.cn/)

- `wot-ui`: [https://wot-design-uni.pages.dev/](https://wot-design-uni.pages.dev/)

## ⚙️ 环境

- node>=18
- pnpm>=7.30

## &#x1F4C2; 快速开始

执行 `pnpm i` 安装依赖

执行 `pnpm dev` 运行 `H5`

## 📦 运行（支持热更新）

- web 平台： `pnpm dev:h5`, 然后打开 [http://localhost:9000/](http://localhost:9000/)。
- weixin 平台：`pnpm dev:mp-weixin` 然后打开微信开发者工具，导入本地文件夹，选择本项目的`dist/dev/mp-weixin` 文件。
- APP 平台：`pnpm dev:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/dev/app` 文件夹，选择运行到模拟器(开发时优先使用)，或者运行的安卓/ios 基座。

## 🔗 发布

- web 平台： `pnpm build:h5`，打包后的文件在 `dist/build/h5`，可以放到 web 服务器，如 nginx 运行。如果最终不是放在根目录，可以在 `manifest.config.ts` 文件的 `h5.router.base` 属性进行修改。
- weixin 平台：`pnpm build:mp-weixin`, 打包后的文件在 `dist/build/mp-weixin`，然后通过微信开发者工具导入，并点击右上角的“上传”按钮进行上传。
- APP 平台：`pnpm build:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/build/app` 文件夹，选择发行 - APP 云打包。

## 🦾 代码提交规范

- `feat` - 新功能 feat
- `fix` - 修复 bug
- `docs` - 文档注释
- `style` - 代码格式(不影响代码运行的变动)
- `refactor` - 重构、优化(既不增加新功能，也不是修复bug)
- `perf` - 性能优化
- `test` - 增加测试
- `chore` - 构建过程或辅助工具的变动
- `revert` - 回退
- `build` - 打包
