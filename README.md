[English](./README.md) | 简体中文

<h1 align="center">Quasar Sika Design</h1>
<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate. based on  <a href="http://www.quasarchs.com/" target="_blank"> Quasar </a>
</div>

<div align="center">

[![License](https://img.shields.io/npm/l/package.json.svg?style=flat)](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/LICENSE)
[![Release](https://img.shields.io/badge/release-v1-blue)](https://github.com/dq-open-cloud/quasar-sika-design/releases)

</div>

- 预览: http://quasar.sikacode.com/
- 首页: 待完善
- 文档: 待完善
- 更新日志: 待完善
- 常见问题: 待完善


Overview
----

基于 [Quasar](http://www.quasarchs.com/quasar-cli/installation/#Introduction) 实现的 [Quasar Sika Design](http://quasar.sikacode.com/) 

PC端示例
----

![dashboard](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/github/imgs/pc/%E7%9B%91%E6%8E%A7%E9%A1%B5.png)
***
![dashboard](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/github/imgs/pc/%E9%AB%98%E7%BA%A7%E8%AF%A6%E6%83%85%E9%A1%B5.png)
***
![dashboard](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/github/imgs/pc/%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83.png)
***
![dashboard](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/github/imgs/pc/%E4%B8%AA%E4%BA%BA%E8%AE%BE%E7%BD%AE.png)
***
![dashboard](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/github/imgs/pc/%E5%88%86%E6%AD%A5%E8%A1%A8%E5%8D%95.png)
***
![dashboard](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/github/imgs/pc/%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8.png)
***
![dashboard](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/github/imgs/pc/%E5%9F%BA%E7%A1%80%E8%A1%A8%E5%8D%95.png)
***
![dashboard](https://github.com/dq-open-cloud/quasar-sika-design/blob/main/github/imgs/pc/%E6%9F%A5%E8%AF%A2%E8%A1%A8%E6%A0%BC.png)

mobile端示例
----



环境和依赖
----

- node
- yarn
- webpack
- eslint
- @vue/cli ~3
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 实现
- [vue-cropper](https://github.com/xyxiao001/vue-cropper) - 头像裁剪组件
- [@antv/g2](https://antv.alipay.com/zh-cn/index.html) - Alipay AntV 数据可视化图表
- [Viser-vue](https://viserjs.github.io/docs.html#/viser/guide/installation)  - antv/g2 封装实现

> 请注意，我们强烈建议本项目使用 [Yarn](https://yarnpkg.com/) 包管理工具，这样可以与本项目演示站所加载完全相同的依赖版本 (yarn.lock) 。由于我们没有对依赖进行强制的版本控制，采用非 yarn 包管理进行引入时，可能由于 Pro 所依赖的库已经升级版本而引入了新版本所导致的问题。作者可能会由于时间问题无法及时排查而导致您采用本项目作为基项目而出现问题。



项目下载和运行
----

- 拉取项目代码
```bash
git clone https://github.com/vueComponent/ant-design-vue-pro.git
cd ant-design-vue-pro
```

- 安装依赖
```
yarn install
```

- 开发模式运行
```
yarn run serve
```

- 编译项目
```
yarn run build
```

- Lints and fixes files
```
yarn run lint
```



其他说明
----

- **关于 Issue 反馈 (重要!重要!重要!) 请在开 *Issue* 前，先阅读该内容：[Issue / PR 编写建议](https://github.com/vueComponent/ant-design-vue-pro/issues/90)** 

- 项目使用的 [vue-cli3](https://cli.vuejs.org/guide/), 请确保你所使用的 vue-cli 是新版，并且已经学习 cli 官方文档使用教程

- 关闭 Eslint (不推荐) 移除 `package.json` 中 `eslintConfig` 整个节点代码, `vue.config.js` 下的 `lintOnSave` 值改为 `false`

- 组件按需加载 `/src/main.js` L14 相关代码 `import './core/lazy_use'` / `import './core/use'` 

- [修改 Ant Design 配色 (@kokoroli)](https://github.com/kokoroli/antd-awesome/blob/master/docs/Ant_Design_%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96.md)

- I18n: [多语言支持 (@musnow)](./src/locales/index.js)

- 生成环境默认不加载 `mock`，更多详情请看 `src/mock/index.js`

- **用于生产环境，请使用 `release` 版本代码，使用 master 代码出现的任何问题需要你自行解决**

## 浏览器兼容

Modern browsers and IE10.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| IE10, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


## Contributors

This project exists thanks to all the people who contribute. 
<a href="https://github.com/vueComponent/ant-design-vue-pro/graphs/contributors"><img src="https://opencollective.com/ant-design-pro-vue/contributors.svg?width=890&button=false" /></a>


# sika-quasar-design (sika-quasar-design)

[点此体验](http://quasar.sikacode.com/)

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
