<template>
  <div class="app-container">
    <MultiStepForm />
    <div class="footer-container">
      <FormFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import MultiStepForm from './components/MultiStepForm.vue'
import FormFooter from './components/FormFooter.vue'
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/sand.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //filter: blur(5px); /* 添加虚化效果 */
  //-webkit-filter: blur(5px); /* 兼容 Safari */
  z-index: -1; /* 将背景图片置于底层 */
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  //background: rgba(255, 255, 255, 0.8); /* 添加半透明白色背景 */
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  position: relative;
  z-index: 0;

}

.footer-container {
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
}
</style>
