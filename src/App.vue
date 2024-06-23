<template>
  <div>
    <nav class="nav-with-gloss">
      <router-link
          v-for="tab in tabs"
          :key="tab.name"
          :to="tab.path"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
      >
        {{ tab.name }}
      </router-link>
    </nav>
    <transition
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
    >
      <router-view />
    </transition>
    <FlashContainer text="9999" flashLayerColor="155,155,0"></FlashContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTabAnimations } from './useTabAnimations';
import FlashContainer from "@/components/FlashContainer.vue";

// 枚举类定义 Tabs
enum Tab {
  CreditCard = '信用卡申请',
  UserInfo = '用户信息',
  BankAccount = '银行账户信息',
}

const tabs = ref([
  { name: Tab.CreditCard, path: '/credit-card' },
  { name: Tab.UserInfo, path: '/user-info' },
  { name: Tab.BankAccount, path: '/bank-account' },
]);

const { handleMouseEnter, handleMouseLeave, beforeEnter, enter, leave } = useTabAnimations();
</script>

<style>
.nav-with-gloss {
  position: relative;
  display: flex;
  justify-content: space-around;
  background-image: url('src/image/star.png');
  background-size: 50px 50px;
  background-repeat: repeat;
  padding: 10px;
  margin-bottom: 20px;
  overflow: hidden;
}

.nav-with-gloss::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
  animation: shine 2s infinite;
}

@keyframes shine {
  0% {
    left: -50%;
  }
  100% {
    left: 150%;
  }
}

nav a {
  color: white;
  text-decoration: none;
  position: relative;
  z-index: 1;
}

nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
