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
- <a href="https://github.com/dq-open-cloud/quasar-sika-design" target="_blank"> Github </a>
- <a href="https://gitee.com/sikadai/quasar-sika-design" target="_blank"> Gitee </a>
- 交流QQ群：327424532
- 微信公众号：sikacode 开源社区
- 首页: 待完善
- 文档: 待完善
- 更新日志: 待完善
- 常见问题: 待完善


Overview
----

基于 [Quasar](http://www.quasarchs.com/quasar-cli/installation/#Introduction) 实现的 [Quasar Sika Design](http://quasar.sikacode.com/)


PC端示例
----
<div style="float:left;border:solid 1px #000;margin:2px;">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/dashboard_analysis.png" width="49%" height="160px">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/dashboard_workplace.png" width="49%" height="160px">
</div>

***

<div style="float:left;border:solid 1px #000;margin:2px;">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/dashboard_monitor.png" width="32%" height="120px">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/dashboard_workplace.png" width="32%" height="120px">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/account_settings.png" width="32%" height="120px">
</div>

***

<div style="float:left;border:solid 1px #000;margin:2px;">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/account_settings.png" width="32%">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/form_advanced-form.png" width="32%">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/list_goodsList.png" width="32%">
</div>

***

<div style="float:left;border:solid 1px #000;margin:2px;">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/list_goodsList.png" width="32%">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/profile_advanced.png" width="32%">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/pc/right_lan.png" width="32%">
</div>

mobile端示例
----
<div style="float:left;border:solid 1px #000;margin:2px;">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/mobile/center1.png" width="24%">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/mobile/center2.png" width="24%">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/mobile/monitor2.png" width="24%" >
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/mobile/center.png" width="24%"  >
</div>

***

<div style="border:solid 1px #000;margin:2px; text-align: center">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/mobile/dashboard_workplace1.png" width="24%">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/mobile/account_settings.png" width="24%" >
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/mobile/account_settings.png" width="24%">
    <img src="https://gitee.com/sikadai/sika-material/raw/master/quasar-sika-design/case/imgs/mobile/list_goods-list.png" width="24%">
</div>

环境和依赖
----
- node
- yarn
- webpack
- eslint
- @vue/cli ~3
- [Quasar](https://github.com/quasarframework/quasar) - Quasar Of Vue 实现

> 请注意，我们强烈建议本项目使用 [Yarn](https://yarnpkg.com/) 包管理工具，这样可以与本项目演示站所加载完全相同的依赖版本 (yarn.lock) 。由于我们没有对依赖进行强制的版本控制，采用非 yarn 包管理进行引入时，可能由于 Pro 所依赖的库已经升级版本而引入了新版本所导致的问题。作者可能会由于时间问题无法及时排查而导致您采用本项目作为基项目而出现问题。



项目下载和运行
----

- 拉取项目代码
```bash
git clone https://github.com/dq-open-cloud/quasar-sika-design.git
cd quasar-sika-design
```

- 安装依赖
```
yarn install
```

- 开发模式运行
```
quasar dev
```

- 编译项目
```
quasar build
```

- Lints and fixes files
```
yarn run lint
```



其他说明
----

- **关于 Issue 反馈 (重要!重要!重要!) 请在开 *Issue* 前，先阅读该内容：[Issue / PR 编写建议](https://github.com/vueComponent/ant-design-vue-pro/issues/90)**

- 项目使用的 [quasar-cli](http://www.quasarchs.com/quasar-cli/installation/#Introduction), 请确保你所使用的 quasar-cli 是新版，并且已经学习 cli 官方文档使用教程

- 关闭 Eslint (不推荐) 移除 `package.json` 中 `eslintConfig` 整个节点代码, `vue.config.js` 下的 `lintOnSave` 值改为 `false`

- **用于生产环境，请使用 `release` 版本代码，使用 master 代码出现的任何问题需要你自行解决**

## 浏览器兼容

- Chrome for Android >= 87
- Firefox for Android >= 83
- Android >= 81
- Chrome >= 77
- Edge >= 84
- Firefox >= 74
- iOS >= 10.3
- Opera >= 68
- Safari >= 11

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| IE10, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


## Contributors

This project exists thanks to all the people who contribute.
<a href="https://github.com/vueComponent/ant-design-vue-pro/graphs/contributors"><img src="https://opencollective.com/ant-design-pro-vue/contributors.svg?width=890&button=false" /></a>

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
