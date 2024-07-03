<template>
  <div>
    <label for="language-select">Language:</label>
    <select id="language-select" v-model="currentLanguage" @change="changeLanguage">
      <option value="en">English</option>
      <option value="ja">日本語</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLanguage = ref(locale.value);

const changeLanguage = () => {
  locale.value = currentLanguage.value;
};
</script>
