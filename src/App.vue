<template>
  <div id="app" :class="theme">
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
    </div>

    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <!-- Mobile Menu Button -->
        <button class="menu-toggle" :class="{ 'active': isMenuOpen }" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger"></span>
        </button>

        <div class="nav-links" :class="{ 'active': isMenuOpen }">
          <router-link to="/" class="nav-item" @click="closeMenu">Home</router-link>
          <router-link to="/skill" class="nav-item" @click="closeMenu">Skills</router-link>
          <router-link to="/projects" class="nav-item" @click="closeMenu">Projects</router-link>
          <router-link to="/blog" class="nav-item" @click="closeMenu">Blog</router-link>
          <router-link to="/contact" class="nav-item" @click="closeMenu">Contact</router-link>
        </div>

        <!-- Theme Toggle -->
        <label class="theme-switch" aria-label="Toggle theme">
          <input type="checkbox" :checked="theme === 'dark'" @change="toggleTheme">
          <span class="slider round"></span>
        </label>
      </div>
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
const isMenuOpen = ref(false)
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

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value
const closeMenu = () => isMenuOpen.value = false

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
  --primary-color: #42b983;
  --bg-color: #ffffff;
  --text-color: #2c3e50;
  --nav-bg: rgba(255, 255, 255, 0.95);
  --nav-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --primary-color: #42b983;
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --nav-bg: rgba(18, 18, 18, 0.95);
  --nav-shadow: 0 2px 4px rgba(255, 255, 255, 0.05);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navigation Bar */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--nav-bg);
  backdrop-filter: blur(10px);
  box-shadow: var(--nav-shadow);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

/* Mobile Menu Button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--text-color);
  position: relative;
  transition: background-color 0.3s;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--text-color);
  left: 0;
  transition: transform 0.3s, top 0.3s;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  top: 8px;
}

/* Hamburger Animation */
.menu-toggle.active .hamburger {
  background-color: transparent;
}

.menu-toggle.active .hamburger::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-toggle.active .hamburger::after {
  transform: rotate(-45deg);
  top: 0;
}

.nav-item {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: skyblue;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 70%;
    background-color: var(--nav-bg);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: left 0.3s ease-in-out;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }

  .nav-links.active {
    left: 0;
  }
}

/* Main Content */
.main-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

/* Theme Toggle Switch */
.theme-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.theme-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--text-color); /* Changed from #ccc */
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: var(--bg-color); /* Changed from white */
  transition: 0.4s;
  border-radius: 50%;
}

input:checked+.slider {
  background-color: var(--primary-color);
}

input:checked+.slider:before {
  transform: translateX(30px);
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
