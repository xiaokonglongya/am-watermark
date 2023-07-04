<template>
  <div class="am-watermark">
    <div
      class="am-watermark-content"
      :style="{
        zIndex: options.conentZ,
      }"
    >
      <slot></slot>
    </div>
    <div
      class="am-watermark-bg"
      :style="{
        backgroundImage: `url(${url})`,
        backgroundSize: `${options.width + options.gapX}px`,
      }"
    ></div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { textToImage } from '../../utils/index'
import { defaultOptions, type Options } from './config'
export default defineComponent({
  name: 'WaterMark',
  props: {
    text: {
      type: String,
      default: '水印',
    },
    options: {
      type: Object as () => Partial<Options>,
      default: () => defaultOptions,
    },
  },
  setup(props) {
    const options = computed(() => {
      return {
        ...defaultOptions,
        ...props.options,
      }
    })
    const url = textToImage(props.text, options.value)
    return {
      url,
      options,
    }
  },
})
</script>
<style>
@import url('./style.css');
</style>
