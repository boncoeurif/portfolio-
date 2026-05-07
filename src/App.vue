<template>
  <div id="app" :class="theme">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
    </div>

    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo-container">
          <router-link to="/" class="logo">IFB<span>.</span></router-link>
        </div>

        <div class="nav-links desktop-only">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/skill" class="nav-item">Skills</router-link>
          <router-link to="/projects" class="nav-item">Projects</router-link>
          <router-link to="/blog" class="nav-item">Blog</router-link>
          <router-link to="/contact" class="nav-item">Contact</router-link>
        </div>

        <!-- Theme Toggle -->
        <label class="theme-switch" aria-label="Toggle theme">
          <input type="checkbox" :checked="theme === 'dark'" @change="toggleTheme">
          <span class="slider round"></span>
        </label>
      </div>
    </nav>

    <!-- Bottom Navigation for Mobile -->
    <nav class="bottom-nav mobile-only">
      <router-link to="/" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        <span>Home</span>
      </router-link>
      <router-link to="/skill" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>
        <span>Skills</span>
      </router-link>
      <router-link to="/projects" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
        <span>Projects</span>
      </router-link>
      <router-link to="/blog" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14H7v-2h8v2zm3-4H7v-2h11v2zm0-4H7V6h11v2z"/></svg>
        <span>Blog</span>
      </router-link>
      <router-link to="/contact" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <span>Contact</span>
      </router-link>
    </nav>

    <!-- Router View -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Back to Top Button with Icon -->
    <transition name="fade">
      <button v-show="showButton" class="back-to-top" @click="scrollToTop">
        <span class="arrow-up">↑</span>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '@/components/Footer.vue'

const showButton = ref(false)
const theme = ref('dark') // default theme
const isLoading = ref(false)
const router = useRouter()

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

const handleScroll = () => {
  showButton.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value) // save choice
  document.documentElement.setAttribute('data-theme', theme.value)
}

onMounted(() => {
  // Load saved theme if available
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.value = savedTheme
  }
  document.documentElement.setAttribute('data-theme', theme.value)

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
:root {
  --primary-color: #00d2ff;
  --secondary-color: #3a7bd5;
  --bg-color: #f8f9fa;
  --text-color: #2d3436;
  --nav-bg: rgba(255, 255, 255, 0.7);
  --nav-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  --glass-bg: rgba(255, 255, 255, 0.4);
  --glass-border: rgba(255, 255, 255, 0.3);
  --card-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
}

[data-theme="dark"] {
  --primary-color: #00d2ff;
  --secondary-color: #3a7bd5;
  --bg-color: #0f172a;
  --text-color: #f1f5f9;
  --nav-bg: rgba(15, 23, 42, 0.7);
  --nav-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  --glass-bg: rgba(30, 41, 59, 0.4);
  --glass-border: rgba(255, 255, 255, 0.1);
  --card-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(circle at 50% -20%, var(--primary-color) 0%, transparent 25%),
              radial-gradient(circle at 0% 50%, var(--secondary-color) 0%, transparent 20%);
  background-attachment: fixed;
}

/* Glassmorphism Utility */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--card-shadow);
}

/* Navigation Bar */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container .logo {
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration: none;
  color: var(--text-color);
  letter-spacing: -1px;
}

.logo-container .logo span {
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

.nav-item {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-item:hover::after,
.nav-item.router-link-active::after {
  width: 100%;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: var(--primary-color);
}

/* Bottom Navigation */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: var(--nav-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--glass-border);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  font-size: 0.7rem;
  font-weight: 600;
  gap: 4px;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.bottom-nav-item svg {
  transition: transform 0.3s ease;
}

.bottom-nav-item.router-link-active {
  color: var(--primary-color);
  opacity: 1;
}

.bottom-nav-item.router-link-active svg {
  transform: translateY(-4px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
  }

  .nav-container {
    padding: 0.75rem 1.5rem;
  }

  .main-content {
    padding-bottom: 80px; /* Space for bottom nav */
  }

  /* Global typography adjustments for mobile */
  h1 { font-size: 1.75rem !important; }
  h2 { font-size: 1.5rem !important; }
  h3 { font-size: 1.25rem !important; }
  p { font-size: 0.95rem !important; }

  .back-to-top {
    bottom: 5.5rem; /* Move up to avoid bottom nav */
    right: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
}

/* Theme Toggle Switch */
.theme-switch {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
  border-radius: 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.theme-switch:hover {
  transform: scale(1.05);
  background: var(--glass-border);
}

.theme-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.theme-switch::before {
  content: '🌞';
  font-size: 1.2rem;
}

[data-theme="dark"] .theme-switch::before {
  content: '🌙';
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 900;
}

.arrow-up {
  line-height: 1;
}

.back-to-top:hover {
  transform: translateY(-5px);
  background-color: #3aa876;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loading Spinner */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

[data-theme="dark"] .spinner {
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--primary-color);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
