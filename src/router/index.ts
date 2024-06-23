import { createRouter, createWebHistory } from 'vue-router'
import CreditCardForm from "@/components/CreditCardForm.vue";
import UserInfoForm from "@/components/UserInfoForm.vue";
import BankAccountForm from "@/components/BankAccountForm.vue";
// import component from "*.vue";
import ShineDemo from "@/components/ShineDemo.vue";
import demo from "@/components/demo.vue";
import FlashContainer from "@/components/FlashContainer.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/credit-card', component: CreditCardForm },
    { path: '/user-info', component: UserInfoForm },
    { path: '/bank-account', component: BankAccountForm },
    { path: '/shine',component: ShineDemo },
    { path: '/', redirect: '/credit-card' },
    {path:  '/demo',component:FlashContainer}

  ]
})

export default router
