<template>
  <div ref="elementRef" class="element">Animate Me!</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import gsap from 'gsap';
import { defineProps } from 'vue';

// 定义 props 类型
interface Props {
  duration: number;
  delay: number;
  xPosition: number;
  easeType: string;
}

// 定义 props
const props = defineProps<Props>();

// 创建一个 ref 以获取 DOM 元素
const elementRef = ref<HTMLDivElement | null>(null);

// 定义动画函数
const animate = () => {
  if (elementRef.value) {
    gsap.to(elementRef.value as gsap.TweenTarget, { // 使用类型断言
      duration: props.duration,
      delay: props.delay,
      x: props.xPosition,
      ease: props.easeType,
      onComplete: () => {
        console.log('Animation completed!');
      }
    });
  }
};

// 在组件挂载时运行动画
onMounted(() => {
  animate();
});

// 监听 props 的变化以重新运行动画
watch(props, () => {
  animate();
});
</script>

<style scoped>
.element {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
