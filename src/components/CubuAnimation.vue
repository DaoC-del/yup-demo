<template>
  <div :class="containerClass" ref="containerRef" :style="containerStyle">
    <div :class="cubeClass" :style="cubeStyle">
      <div v-for="(side, i) in sides" :key="i" :class="`${sideClass}-${i} ${side}`">
        <div v-for="n in 49" :key="n" class="tile"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import gsap from 'gsap';

// 定义 sides 数组
const sides = ref(['front', 'back', 'right', 'left', 'top', 'bottom']);
const containerRef = ref<HTMLElement | null>(null);

const props = defineProps<{
  cubeSize: string;
}>();

// 生成唯一 ID
const uniqueId = uuidv4();
const containerClass = `container-${uniqueId}`;
const cubeClass = `cube-${uniqueId}`;
const sideClass = `side-${uniqueId}`;

// 计算样式
const containerStyle = computed(() => ({
  '--cube-size': props.cubeSize,
  '--side-size': `calc(${props.cubeSize} / 2)`,
  '--perspective': `calc(${props.cubeSize} * 4)`
}));

const cubeStyle = computed(() => ({
  width: `var(--cube-size)`,
  height: `var(--cube-size)`
}));

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1 });

  function animateTiles(i: number) {
    const tiles = document.querySelectorAll(`.${sideClass}-${i} .tile`);
    if (tiles.length > 0) {
      tl.to(tiles, {
        duration: 0.5,
        scale: 0.25,
        rotate: 90,
        z: '-50vmin',
        yoyo: true,
        repeat: 1,
        repeatDelay: 0.5,
        stagger: {
          amount: 0.6,
          grid: 'auto',
          from: 'edges',
        },
      }, i * 0.1);
    }
  }

  if (containerRef.value) {
    sides.value.forEach((_, i) => animateTiles(i));
  }
});
</script>

<style lang="scss">
:root {
  --cube-size: 50vmin;
  --side-size: calc(var(--cube-size) / 2);
  --perspective: calc(var(--cube-size) * 4);
}

html, body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  overflow: hidden;
}

[class*="container-"] {
  position: relative;
  perspective: var(--perspective);
}

[class*="cube-"] {
  position: relative;
  transform-style: preserve-3d;
  animation: cube-rotation 8s linear infinite;
}

[class*="side-"] {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2px;
  width: var(--cube-size);
  height: var(--cube-size);
  perspective: var(--perspective);
  overflow: hidden;
}

.front  { transform: rotateY(  0deg) translateZ(var(--side-size)); }
.back   { transform: rotateY(180deg) translateZ(var(--side-size)); }
.right  { transform: rotateY( 90deg) translateZ(var(--side-size)); }
.left   { transform: rotateY(-90deg) translateZ(var(--side-size)); }
.top    { transform: rotateX( 90deg) translateZ(var(--side-size)); }
.bottom { transform: rotateX(-90deg) translateZ(var(--side-size)); }

.front .tile { background: hsla(  0, 100%, 60%, 0.9); }
.back .tile { background: hsla( 50, 100%, 60%, 0.9); }
.right .tile { background: hsla(100, 100%, 60%, 0.9); }
.left .tile { background: hsla(150, 100%, 60%, 0.9); }
.top .tile { background: hsla(200, 100%, 60%, 0.9); }
.bottom .tile { background: hsla(250, 100%, 60%, 0.9); }

@keyframes cube-rotation {
  to { transform: rotateX(360deg) rotateY(-360deg) }
}
</style>
