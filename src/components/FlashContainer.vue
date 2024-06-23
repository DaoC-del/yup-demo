<template>
  <div class="container" ref="container" :style="containerStyle">
    <div ref="flashLayer" class="flash-layer" :style="flashLayerStyle"></div>
    <div ref="textLayer" class="text-layer" :style="textLayerStyle">{{ props.text }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';
import { defineProps } from 'vue';

// 定义接收的props
const props = defineProps({
  width: { type: String, default: '300px' },
  height: { type: String, default: '300px' },
  fontSize: { type: String, default: '2rem' },
  textColor: { type: String, default: 'white' },
  backgroundColor: { type: String, default: '#282c34' },
  flashLayerColor: { type: String, default: '255, 255, 255' },
  text: { type: String, default: 'demo' },
  textFlashColor: { type: String, default: '#000000' }, // 文字层闪烁颜色
  backgroundFlashColor:{type: String,default:"#A9A9A9"}
});

// 获取容器、闪光层和文字图层的引用
const container = ref<HTMLDivElement | null>(null);
const flashLayer = ref<HTMLDivElement | null>(null);
const textLayer = ref<HTMLDivElement | null>(null);

// 计算样式
const containerStyle = computed(() => ({
  width: props.width,
  height: props.height,
  backgroundColor: props.backgroundColor,
}));

const flashLayerStyle = computed(() => ({
  background: `linear-gradient(rgba(${props.flashLayerColor}, 0) 0%, rgba(${props.flashLayerColor}, 0.25) 25%, rgba(${props.flashLayerColor}, 0.5) 50%, rgba(${props.flashLayerColor}, 0.25) 75%, rgba(${props.flashLayerColor}, 0) 100%)`
}));

const textLayerStyle = computed(() => ({
  fontSize: props.fontSize,
  color: props.textColor,
}));

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
        let backgroundHighlightColorTweenVars: gsap.TweenVars={
          backgroundColor: props.backgroundFlashColor,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        };
        gsap.to(container.value as HTMLElement, backgroundHighlightColorTweenVars);
        let textLayerFlashColorTweenVars: gsap.TweenVars={
          color: props.textFlashColor,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        }
        // 文字层闪烁动画
        gsap.to(textLayer.value as HTMLElement, textLayerFlashColorTweenVars);
      }
    });
  }
});
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
}

.flash-layer {
  position: absolute;
  width: 300%; /* 确保覆盖整个对角线 */
  height: 300%; /* 确保覆盖整个对角线 */
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
  text-align: center;
}
</style>
