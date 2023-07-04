# Vue 3 WaterMark

一款 Vue3 的水印组件,支持组件使用和指令使用两种方式。

## 安装

```
npm i am-watermark
```

## 用法

main.js 引入组件和样式,将会自动注册组件和指令两种使用方式，不要忘记导入样式。

```ts
import WaterMark from 'am-watermark'
import 'am-watermark/dist/style.css'

createApp(App).use(WaterMark).mount('#app')
```

### 1、通过组件

```vue
<template>
  <div>
    <WaterMark text="水印文字" :options="options">
      <div>这是一个水印组件</div>
    </WaterMark>
  </div>
</template>
```

### 2、通过指令

使用指令方式会改变您的 DOM 结构,在外层增加一层 DIV,如果您的样式有问题,请使用组件方式

```vue
<template>
  <div
    v-watermark="{
      text: '水印文字',
      options,
    }"
  >
    <div>这是一个水印组件</div>
  </div>
</template>
```

## 参数

### text

水印的文字,类型为字符串

### options

| 参数       | 类型   | 描述                                     | 默认值          |
| ---------- | ------ | ---------------------------------------- | --------------- |
| width      | number | 宽度                                     | 120             |
| height     | number | 高度                                     | 64              |
| fontSize   | number | 文字大小                                 | 16              |
| fontFamily | string | 文字家族                                 | Arial           |
| fontColor  | string | 文字颜色                                 | rgba(0,0,0,0.3) |
| fontWight  | number | 文字粗细                                 | 400             |
| offsetLeft | number | 左侧偏移                                 | 0               |
| offsetTop  | number | 顶部偏移                                 | 0               |
| gapX       | number | 水平间距                                 | 0               |
| gapY       | number | 垂直间距                                 | 0               |
| rotate     | number | 旋转角度                                 | 0               |
| zIndex     | number | 内容层级,可以改变大小调整在水印上方/下方 | 10              |
