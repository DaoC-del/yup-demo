<template>
  <div class="footer">
    <CubuAnimation class="left-cube" cubeSize="6vmin" />
    <div class="copyright">
      © 2024 Fictional Company. All rights reserved.
    </div>
    <CubuAnimation class="right-cube" cubeSize="6vmin" />
  </div>
</template>

<script setup lang="ts">
import CubuAnimation from "@/components/CubuAnimation.vue";
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: transparent;
  color: gray;
  padding: 0 10px 30px 10px;
}

.copyright {
  text-align: center;
  flex-grow: 1;
  color: #cccccc;
}

.left-cube, .right-cube {
  flex-shrink: 0;
}
</style>
