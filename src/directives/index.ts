import { App } from 'vue'
import { textToImage } from '../utils'
import { defaultOptions } from '../components/watermark/config'
import '../components/watermark/style.css'
export const mountDirectives = (app: App) => {
  app.directive('watermark', {
    mounted(el, binding) {
      const { value } = binding
      if (!value.text) {
        return console.warn('watermark value is empty')
      }
      // el增加水印类名
      el.classList.add('am-watermark')
      const options = Object.assign({}, defaultOptions, value?.options)
      // 生成内容
      const contentdiv = document.createElement('div')
      contentdiv.classList.add('am-watermark-content')
      contentdiv.style.zIndex = `${options.conentZ}`
      contentdiv.innerHTML = el.innerHTML
      el.innerHTML = ''
      el.appendChild(contentdiv)
      // 生成水印图片
      const url = textToImage(value.text, options)
      el.style.position = 'relative'
      const markdiv = document.createElement('div')
      markdiv.className = 'am-watermark-bg'
      markdiv.style.backgroundImage = `url(${url})`
      markdiv.style.backgroundSize = `${options.width + options.gapX}px `
      el.appendChild(markdiv)
    },
  })
}
