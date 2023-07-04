<script setup lang="ts"></script>

<template>
  <div style="display: flex">
    <WaterMark
      text="水印"
      :options="{
        height: 50,
        fontWidth: 600,
        fontSize: 16,
        rotate: -10,
        width: 80,
        gapX: 50,
        gapY: 80,
        conentZ: 100,
      }"
    >
      <div style="height: 30vh; width: 30vw"></div>
    </WaterMark>
    <div
      v-watermark="{
        text: '水印',
        options: {
          height: 50,
          fontWidth: 600,
          fontSize: 12,
          rotate: -10,
          width: 180,
          gapX: 50,
          gapY: 80,
          conentZ: 100,
        },
      }"
      style="height: 80vh; width: 40vw"
    ></div>
  </div>
</template>

<style scoped></style>
