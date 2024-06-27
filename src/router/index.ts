import { createRouter, createWebHistory } from 'vue-router'
import CreditCardForm from "@/components/CreditCardForm.vue";
import UserInfoForm from "@/components/UserInfoForm.vue";
import BankAccountForm from "@/components/BankAccountForm.vue";
// import component from "*.vue";



import ShineDemo from "@/components/ShineDemo.vue";

import demo from "@/components/demo.vue";
import FlashContainer from "@/components/FlashContainer.vue";
import HomePage from '../components/steps/HomePage.vue'
import PersonalInfoPolicy from '../components/steps/PersonalInfoPolicy.vue'
import PersonalInfoInput from '../components/steps/PersonalInfoInput.vue'
import CreditCardInfoInput from '../components/steps/CreditCardInfoInput.vue'
import SuccessPage from '../components/steps/SuccessPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:  '/demo',component:FlashContainer},
    { path: '/', component: HomePage, name: 'home' },
    { path: '/policy', component: PersonalInfoPolicy, name: 'policy' },
    { path: '/personal-info', component: PersonalInfoInput, name: 'personal-info' },
    { path: '/credit-info', component: CreditCardInfoInput, name: 'credit-info' },
    { path: '/success', component: SuccessPage, name: 'success' }

  ]
})

export default router
