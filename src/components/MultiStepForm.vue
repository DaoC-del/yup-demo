<template>
  <div class="multi-step-form">
    <div class="steps">
      <div
          v-for="step in steps"
          :key="step.path"
          :class="['step', { active: isActive(step.path) }]"
          @click="() => router.push(step.path)"
      >
        {{ step.title }}
      </div>
    </div>
    <div class="step-content">
      <slot />
    </div>
    <button @click="prevStep">Previous</button>
    <button @click="nextStep">Next</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const steps = ref([
  { title: 'ホームページ', path: '/' },
  { title: '個人情報取扱説明', path: '/policy' },
  { title: '個人情報入力', path: '/personal-info' },
  { title: 'クレジットカードに関わる項目入力', path: '/credit-info' },
  { title: '成功ページ', path: '/success' }
]);

const route = useRoute();
const router = useRouter();

const isActive = (path: string) => {
  return route.path === path;
};

const nextStep = () => {
  const currentIndex = steps.value.findIndex(step => step.path === route.path);
  if (currentIndex < steps.value.length - 1) {
    router.push(steps.value[currentIndex + 1].path);
  }
};

const prevStep = () => {
  const currentIndex = steps.value.findIndex(step => step.path === route.path);
  if (currentIndex > 0) {
    router.push(steps.value[currentIndex - 1].path);
  }
};
</script>

<style scoped>
.multi-step-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.steps {
  display: flex;
  margin-bottom: 20px;
}

.step {
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: lightgray;
}

.step.active {
  background-color: blue;
  color: white;
}

.step-content {
  width: 100%;
}
</style>
