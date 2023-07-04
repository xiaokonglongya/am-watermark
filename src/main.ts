import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WaterMarkPlugin from './components/watermark'

createApp(App).use(WaterMarkPlugin).mount('#app')
