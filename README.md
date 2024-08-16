**中文** | [English](./README.en-US.md)

## 技术栈

框架使用了最新的 `Vue3`、`Vite`、`Element-Plus`、`TypeScript`、`Pinia`、`Tailwindcss` 等主流技术开发

### 参考文档

- `Element-Plus`：[https://element-plus.org/zh-CN/](https://element-plus.org/zh-CN/)

- `Tailwindcss`：[https://www.tailwindcss.cn/](https://www.tailwindcss.cn/)

### 开发环境

- `node` 版本应不小于 `18.18.0`
- `pnpm` 版本应不小于 `9`
- `注意`：关于`包管理器`的一些问题

`1、为什么使用 pnpm？`

- ① 节约磁盘空间并提升安装速度
  当使用 npm 或 Yarn 时，如果您有 100 个项目使用了某个依赖，就会有 100 份该依赖的副本保存在硬盘上。 对于 pnpm ，依赖项将存储在一个内容可寻址的仓库中，因此：如果您用到了某依赖项的不同版本，那么只会将有差异的文件添加到仓库。例如，如果它有 100 个文件，而新版本只改变了其中 1 个文件。那么 pnpm update 只会向存储中心添加 1 个新文件，不会仅因为单一的改变而克隆整个依赖。所有文件都会存储在硬盘上的同一位置。 当多个包（package）被安装时，所有文件都会从同一位置创建硬链接，不会占用额外的磁盘空间。 这允许您跨项目地共享同一版本的依赖。最终您节省了大量与项目和依赖成比例的硬盘空间，并且拥有更快的安装速度！

- ② 创建非扁平化的 node_modules 文件夹
  当使用 npm 安装依赖时，所有的依赖都会被提升到模块的根目录。 因此，项目可以访问到未被添加进 当前 项目的依赖。pnpm 使用软链的方式将项目的直接依赖添加进模块文件夹的根目录。

`2、pnpm 天生支持 monorepo，为什么平台不采用这种模式呢？`

- 答：我们先来简单介绍一下什么是 monorepo ，monorepos 指单一代码库，在版本控制系统的单个代码库里包含了许多项目的代码，与它对应的是 multirepos 多代码库，每个项目都储存在一个完全独立的、版本控制的代码库中。monorepo 可能并不适合大多数项目，毕竟大家习惯了多代码库开发，所以平台不采用这种模式。
  推荐文章:Monorepo 可能没您想象中那么香(opens new window)

`3、可以不使用 pnpm 吗？`

- 答：可以的

`4、如何从 pnpm 替换到 yarn（ npm 替换方法同下）`

- 替换方法：来到根目录 package.json 文件，删除 "pnpm": ">= 6" 和 "preinstall": "npx only-allow pnpm" ，然后将 pnpm 全部换成 yarn 即可

### 安装依赖

```bash
pnpm install
```

### 启动平台

```bash
pnpm dev
```

### 项目打包

```bash
pnpm build
```

## `Git` 贡献提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
