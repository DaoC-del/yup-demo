<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="scrolling-boxes left">
        <div v-for="n in 10" :key="n" class="box"></div>
      </div>
      <div class="copyright">© 2024 Fictional Company. All rights reserved.</div>
      <div class="scrolling-boxes right">
        <div v-for="n in 10" :key="n" class="box"></div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('.left .box', {
    x: '-=100vw',
    repeat: -1,
    duration: 10,
    ease: 'none',
    stagger: {
      each: 1,
      repeat: -1,
    }
  })

  gsap.to('.right .box', {
    x: '+=100vw',
    repeat: -1,
    duration: 10,
    ease: 'none',
    stagger: {
      each: 1,
      repeat: -1,
    }
  })
})
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.scrolling-boxes {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.scrolling-boxes.left {
  left: 0;
}

.scrolling-boxes.right {
  right: 0;
  flex-direction: row-reverse;
}

.box {
  width: 50px;
  height: 50px;
  background-color: #555;
  margin: 0 5px;
}
</style>
