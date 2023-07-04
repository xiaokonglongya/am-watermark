export interface Options {
  /**高度 */
  width: number
  /**宽度 */
  height: number
  /**字体大小 */
  fontSize: number
  /**使用字体 */
  fontFamily: string
  /**字体颜色 */
  fontColor: string
  /**字体宽度 */
  fontWidth?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  /**左侧偏移量 */
  offsetLeft: number
  /**顶部偏移量 */
  offsetTop: number
  /**水平间隔 */
  gapX: number
  /**垂直间隔 */
  gapY: number
  /** 旋转角度 */
  rotate?: number
  /**内容层级,水印层级为10,小于10,水印在上,大于10,水印在下 */
  conentZ?: number
}
export const defaultOptions: Options = {
  width: 120,
  height: 64,
  fontSize: 16,
  fontFamily: 'Arial',
  fontColor: 'rgba(0,0,0,0.3)',
  fontWidth: 400,
  offsetLeft: 0,
  offsetTop: 0,
  gapX: 212,
  gapY: 222,
  rotate: 0,
  conentZ: 10,
}
