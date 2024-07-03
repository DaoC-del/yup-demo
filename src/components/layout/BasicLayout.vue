<!-- BasicLayout.vue -->
<template>
  <div class="layout container mx-auto">
    <header :class="headerClass">
      <slot name="header"></slot>
    </header>
    <div :class="stepClass">
      <slot name="step"></slot>
    </div>
    <main :class="mainClass">
      <slot name="main"></slot>
    </main>
    <footer :class="footerClass">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  headerBackgroundColor: { type: String, default: 'bg-gray-100' },
  stepBackgroundColor: { type: String, default: 'bg-gray-200' },
  mainBackgroundColor: { type: String, default: 'bg-white' },
  footerBackgroundColor: { type: String, default: 'bg-gray-100' },
  slotPadding: { type: String, default: 'p-4' }
});

const headerClass = computed(() => `${props.headerBackgroundColor} ${props.slotPadding}`);
const stepClass = computed(() => `${props.stepBackgroundColor} ${props.slotPadding}`);
const mainClass = computed(() => `${props.mainBackgroundColor} ${props.slotPadding} flex-1`);
const footerClass = computed(() => `${props.footerBackgroundColor} ${props.slotPadding}`);
</script>

<style lang="scss" scoped>
.layout {
  @apply flex flex-col min-h-screen max-w-screen-lg mx-auto;
}
</style>
