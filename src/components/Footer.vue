<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <h3>Achille</h3>
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
  background-color: var(--nav-bg);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3rem 0;
  margin-top: auto; /* Pushes footer to bottom */
}

[data-theme="dark"] .footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-info h3 {
  color: var(--primary-color);
  margin: 0 0 0.5rem 0;
}

.social-link {
  margin-left: 1.5rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--primary-color);
}
.icon {
    font-size: 2rem;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: white;
}
</style>