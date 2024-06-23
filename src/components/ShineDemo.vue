<template>
  <div class="container" ref="container">
    <div ref="flashLayer" class="flash-layer"></div>
    <div ref="textLayer" class="text-layer">demo</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

// 获取容器、闪光层和文字图层的引用
const container = ref<HTMLDivElement | null>(null);
const flashLayer = ref<HTMLDivElement | null>(null);
const textLayer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (flashLayer.value && container.value && textLayer.value) {
    // 创建闪光层移动动画
    gsap.to(flashLayer.value as HTMLElement, {
      x: '150%',
      y: '-150%',
      duration: 2,
      repeat: -1,
      ease: "circ.inOut",
      onRepeat: () => {
        // 背景高亮动画
        gsap.to(container.value as HTMLElement, {
          backgroundColor: '#A9A9A9', // 深灰色高亮
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        });

        // 文字层闪烁动画
        gsap.to(textLayer.value as HTMLElement, {
          color: '#000000', // 金色闪烁
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        });
      }
    });
  }
});
</script>

<style scoped>
.container {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #282c34; /* 这里可以根据需求更改背景颜色 */
  overflow: hidden;
}

.flash-layer {
  position: absolute;
  width: 300%; /* 确保覆盖整个对角线 */
  height: 300%; /* 确保覆盖整个对角线 */
  background: linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.25) 75%, rgba(255,255,255,0) 100%);
  bottom: -100%; /* 从容器左下角开始 */
  left: -100%; /* 从容器左下角开始 */
  border-radius: 5%; /* 增加圆角效果 */
  filter: blur(20px); /* 增加模糊效果 */
  transform: rotate(45deg); /* 旋转以覆盖对角线 */
}

.text-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
  text-align: center;
}
</style>
