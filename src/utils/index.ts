export const getPixelRatio = (context: CanvasRenderingContext2D) => {
  const backingStore =
    //@ts-ignore
    context['backingStorePixelRatio'] ||
    //@ts-ignore
    context['webkitBackingStorePixelRatio'] ||
    //@ts-ignore
    context['mozBackingStorePixelRatio'] ||
    //@ts-ignore
    context['msBackingStorePixelRatio'] ||
    //@ts-ignore
    context['oBackingStorePixelRatio'] ||
    //@ts-ignore
    context['backingStorePixelRatio'] ||
    1
  return (window.devicePixelRatio || 1) / backingStore
}
import type { Options } from '../components/watermark/config'
export const textToImage = (text: string, canvasOptions: Options) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''
  const ratio = getPixelRatio(ctx)
  const { width, height, fontSize, fontFamily, fontWidth, fontColor, offsetLeft, offsetTop, gapX, gapY, rotate } =
    Object.assign(canvasOptions)
  // canva 的宽高
  const canvasWidth = (gapX + width) * ratio + 'px'
  const canvasHeight = (gapY + height) * ratio + 'px'
  canvas.setAttribute('width', canvasWidth)
  canvas.setAttribute('height', canvasHeight)
  // 绘制背景
  const offsetTopPx = offsetTop ? offsetLeft : gapX / 2
  const offsetLeftPx = offsetLeft ? offsetLeft : gapY / 2
  if (ctx) {
    ctx.translate(offsetTopPx * ratio, offsetLeftPx * ratio)
    ctx.rotate((Math.PI / 180) * (rotate || 0))
    const markSize = fontSize * ratio
    const markHeight = height * ratio
    ctx.font = ` ${fontWidth}  ${markSize}px/${markHeight}px ${fontFamily}`
    ctx.fillStyle = fontColor
    ctx.fillText(text, 10, 10)
    return canvas.toDataURL('image/png', 1)
  }

  return canvas.toDataURL()
}
