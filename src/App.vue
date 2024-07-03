<template>
  <div id="app">
    <BasicLayout
      headerBackgroundColor="bg-yellow-400"
      stepBackgroundColor="bg-green-200"
      mainBackgroundColor="bg-blue-100"
      footerBackgroundColor="bg-red-200"
      slotPadding="p-6"
    >
      <template #header>
        <LanguageSelector />
        <h1 class="text-xl font-bold">{{ $t('header') }}</h1>
      </template>
      <template #step>
        <h2 class="text-lg">{{ $t('step') }}</h2>
      </template>
      <template #main>
        <CreditCardForm />
      </template>
      <template #footer>
        <div class="flex justify-between items-center w-full">
          <CubuAnimation class="right-cube" cubeSize="6vmin" />
          <p class="text-sm">{{ $t('footer') }}</p>
          <CubuAnimation class="right-cube" cubeSize="6vmin" />
        </div>
      </template>
    </BasicLayout>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from './components/layout/BasicLayout.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import CreditCardForm from './components/CreditCardForm.vue'
import CubuAnimation from './components/CubuAnimation.vue';
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  @apply flex flex-col justify-center items-center min-h-screen w-full px-2;
}
</style>
