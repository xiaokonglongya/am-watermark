import { App } from 'vue'
import { mountDirectives } from '../../directives'
import _WaterMark from './index.vue'
export const WaterMark = _WaterMark
const WaterMarkPlugin = {
  install: (app: App) => {
    app.component(_WaterMark.name, _WaterMark)
    mountDirectives(app)
  },
}
export default WaterMarkPlugin
