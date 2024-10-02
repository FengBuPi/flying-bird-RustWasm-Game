# 《飞翔的小鸟_Rust版本》项目介绍

## 项目概述

本项目是一个基于面向对象编程（OOP）思想、TypeScript 语言、单页面应用（SPA）技术、WebComponent 的 Shadow DOM（影子 DOM） 技术以及自定义迷你路由器（Mini Router）实现的单页面小游戏——“飞翔的小鸟”。

## 技术栈

- **TypeScript**: 静态类型检查的编程语言，提高了代码质量和可维护性。
- **面向对象编程（OOP）**: 通过类和对象来组织代码，实现了模块化和可复用性。
- **单页面应用（SPA）**: 利用前端路由技术，在同一个页面中动态加载不同内容。
- **Shadow DOM（影子 DOM）**: 提供了组件化的封装机制，增强了应用的隔离性和可维护性。
- **迷你路由器（Mini Router）**: 自定义的路由管理器，基于 URL 的哈希部分实现页面跳转。
- **RustWasm**: Rust 语言的 WebAssembly（Wasm）实现，用于构建 Web 应用。

## 主要功能

- **游戏主界面**: 显示游戏开始按钮。
- **游戏进行中**: 用户可以控制小鸟飞行，躲避障碍物。
- **游戏结束**: 提供重新开始的选项。

## 启动说明
请切换设备仿真模式的iPhoneSE机型,启动该游戏
### 安装依赖

```
pnpm install
```

### 运行游戏

```
pnpm dev
```

## 代码地址
gitee仓库:https://gitee.com/FengBuPi/flappybird-Rust

**贡献者**提交方式:
1. fork
2. clone
3. 修改代码
4. commit
5. push
6. pull request

**开发者**提交方式:
```
git push origin master
git push github master:main
```