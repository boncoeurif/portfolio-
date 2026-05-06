<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <h3>Boncoeur</h3>
        <p>Full Stack Developer • Building digital experiences.</p>
        <p class="copyright">&copy; {{ new Date().getFullYear() }} All Rights Reserved.</p>
      </div>
      
      <div class="footer-links">
        <a href="https://github.com/boncoeurif" class="social-link"><img :src="github" alt="githubicon" class="icon"></a>
        <a href="https://www.instagram.com/___boncoeur____/#" class="social-link"><img :src="instagram" alt="instagramicone" class="icon"></a>
        <a href="#" class="social-link"><img :src="facebook" alt="facebookicone" class="icon"></a>
        <a href="#" class="social-link"><img :src="twitter" alt="twittericone" class="icon"></a>
        
      </div>
    </div>
  </footer>
</template>
  <script setup>

import github from '@/assets/github.png'
import instagram from '@/assets/inst.png'
import twitter from '@/assets/twitter.png'
import facebook from '@/assets/facebook.png'

  </script>
<style scoped>

.footer {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--glass-border);
  padding: 4rem 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-info h3 {
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
}

.footer-info p {
  opacity: 0.8;
  font-weight: 500;
}

.copyright {
  font-size: 0.9rem;
  margin-top: 1rem;
  opacity: 0.6;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover {
  transform: translateY(-5px);
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.icon {
    height: 22px;
    width: 22px;
    object-fit: contain;
    transition: filter 0.3s ease;
}

.social-link:hover .icon {
  filter: brightness(0) invert(1);
}
</style>