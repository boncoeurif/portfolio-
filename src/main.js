import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Initialize AOS for scroll animations
AOS.init({
  duration: 800,
  once: true,
  offset: 50,
  disable: 'mobile', // Disable on small screens for better FPS
  debounceDelay: 50,
  throttleDelay: 99
})
