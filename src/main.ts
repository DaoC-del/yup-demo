// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as gsap from "gsap";
import i18n from './i18n';
import './index.css'; // Tailwind CSSをインポート

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.config.globalProperties.$gsap=gsap

app.mount('#app')
