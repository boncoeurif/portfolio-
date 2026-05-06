<template> 
  <div class="home-container">
    <section class="hero">
      <div class="hero-text">
        <h1 class="animate-fade-up">Hi, I'm <span class="highlight">I.Fabrice Boncoeur</span></h1>
        <h2 class="animate-fade-up delay-1">
          {{ typingText }}<span class="cursor">|</span>
        </h2>
        <p class="animate-fade-up delay-2">
          I build accessible, pixel-perfect, and performant web experiences.
          Passionate about Vue.js and modern web technologies.
        </p>
        <div class="cta-group animate-fade-up delay-3">
          <router-link to="/projects" class="btn btn-primary">View My Work</router-link>
          <router-link to="/contact" class="btn btn-secondary">Contact Me</router-link>
          <a href="/resume.pdf" download class="btn btn-secondary">Download Resume</a>
        </div>
      </div>
      <div class="hero-visual animate-fade-in">
        <div class="portrait-wrapper">
          <div class="portrait-glow"></div>
          <div class="portrait-frame">
            <img :src="bon" alt="I.Fabrice Boncoeur" class="portrait-img">
          </div>
          <!-- Floating decorative elements -->
          <div class="floating-badge vue-badge">
            <img :src="vueIcon" alt="Vue.js">
          </div>
          <div class="floating-badge js-badge">
            <img :src="jsIcon" alt="JavaScript">
          </div>
          <div class="floating-badge node-badge">
            <img :src="nodeIcon" alt="Node.js">
          </div>
        </div>
      </div>
      <div class="scroll-down" @click="scrollToServices">
        <span class="arrow-down">↓</span>
      </div>
    </section>

    <!-- Services/What I Do Section -->
    <section class="services" data-aos="fade-up">
      <h2 class="section-title">What I Do</h2>
      <div class="grid">
        <div class="card" v-for="service in services" :key="service.title">
          <div class="icons">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="testimonials" data-aos="zoom-in">
      <h2 class="section-title">Testimonials</h2>
      <div class="grid">
        <div class="card" v-for="t in testimonials" :key="t.name">
          <p class="quote">"{{ t.quote }}"</p>
          <p class="author">— <strong>{{ t.name }}</strong></p>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section id="timeline" class="timeline-section" data-aos="fade-up">
      <h2 class="section-title">My Journey</h2>
      <ul class="timeline">
        <li v-for="item in timeline" :key="item.year">
          <span class="year">{{ item.year }}</span>
          <div class="details">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Fun Facts -->
    <section id="fun-facts" class="fun-facts" data-aos="fade-up">
      <h2 class="section-title">Fun Facts</h2>
      <ul class="facts-list">
        <li>🌍 I love exploring language connections between English and Kinyarwanda even Kiswahili.</li>
        <li>💻 I enjoy debugging and optimizing ICT systems.</li>
        <li>📚 I create cheat sheets and study guides for collaborative learning.</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import bon from '@/assets/boncoeur.png'
import vueIcon from '@/assets/vue.png'
import jsIcon from '@/assets/js.png'
import nodeIcon from '@/assets/NODE.png'


const services = ref([
  { title: 'Web Development', description: 'Building responsive websites with Vue.js', icon: '💻' },
  { title: 'Networking', description: 'Designing and troubleshooting ICT systems', icon: '🔌' },
  { title: 'UI/UX Design', description: 'Enhancing user experience with animations and themes', icon: '🎨' },
  { title: 'Translation', description: 'English ↔ Kinyarwanda language support and Kiswahili', icon: '🌍' },
  { title: 'Window Server Skills', description: 'Managing and configuring Windows Server environments.', icon: '🖥️' },
  { title: 'Logo Creator', description: 'Designing creative and impactful logos for brands.', icon: '🖌️' }
])

const testimonials = ref([
  { name: 'Jean', quote: 'I.Boncoeur helped me simplify complex ICT concepts with clear explanations.' },
  { name: 'Aline', quote: 'His portfolio design is dynamic and user-friendly.' }
])

const timeline = ref([
  { year: '2022', title: 'Started Web Development', description: 'Built first projects with Vue.js and Node.js.' },
  { year: '2023', title: 'ICT Systems Design', description: 'Worked on backend and networking solutions.' },
  { year: '2024', title: 'Portfolio Upgrade', description: 'Added animations, theme toggle, and persistent settings.' },
  { year: '2025', title: 'Collaborative Learning', description: 'Created cheat sheets and study guides for peers.' }
])

const typingText = ref('')
const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver','Windows Server configuration','Logo Creator']
let roleIndex = 0
let charIndex = 0
let isDeleting = false

const scrollToServices = () => {
  const servicesSection = document.querySelector('.services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const typeEffect = () => {
  const currentRole = roles[roleIndex]

  if (isDeleting) {
    typingText.value = currentRole.substring(0, charIndex - 1)
    charIndex--
  } else {
    typingText.value = currentRole.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = 100

  if (isDeleting) {
    typeSpeed /= 2
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true
    typeSpeed = 2000
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
    typeSpeed = 500
  }

  setTimeout(typeEffect, typeSpeed)
}

onMounted(() => {
  setTimeout(typeEffect, 1000)
})
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-bottom: 4rem;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  gap: 4rem;
  position: relative;
  padding: 2rem 0;
}

.hero-text {
  flex: 1.2;
  max-width: 650px;
}

.hero-text h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-text h2 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  font-weight: 700;
  min-height: 3rem;
}

.hero-text p {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.7;
  color: var(--text-color);
}

.highlight {
  position: relative;
  display: inline-block;
  color: var(--primary-color);
}

/* Buttons */
.cta-group {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.2rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.01em;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: #fff;
  box-shadow: 0 10px 20px -5px rgba(0, 210, 255, 0.4);
}

.btn-secondary {
  background: var(--glass-bg);
  color: var(--text-color);
  backdrop-filter: blur(8px);
  border: 1px solid var(--glass-border);
}

.btn:hover {
  transform: translateY(-4px) scale(1.02);
}

.btn-primary:hover {
  box-shadow: 0 15px 30px -5px rgba(0, 210, 255, 0.6);
}

.btn-secondary:hover {
  background: var(--glass-border);
  border-color: var(--primary-color);
}

/* Hero Visual (Upgraded) */
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.portrait-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  opacity: 0.3;
  filter: blur(40px);
  animation: pulse 4s ease-in-out infinite;
  z-index: 1;
  border-radius: 40px;
}

.portrait-frame {
  position: relative;
  width: 350px;
  height: 350px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  padding: 6px;
  border-radius: 24px; /* Premium Rounded Square */
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  z-index: 2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.portrait-frame:hover {
  transform: translateY(-10px) rotate(1deg);
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px; /* Slightly smaller to fit inside frame */
  transition: transform 0.5s ease;
  background: var(--bg-color);
}

/* Floating Badges */
.floating-badge {
  position: absolute;
  width: 65px;
  height: 65px;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-shadow: var(--card-shadow);
  z-index: 10;
  animation: float 4s ease-in-out infinite;
}

.floating-badge img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.vue-badge { top: 5%; right: -5%; animation-delay: 0s; }
.js-badge { bottom: 15%; left: -10%; animation-delay: 1s; }
.node-badge { top: 45%; right: -15%; animation-delay: 2s; }

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.15); opacity: 0.4; }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes morph {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.8) translateY(30px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

/* Services & Cards */
.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 4rem;
  font-weight: 800;
  background: linear-gradient(to right, var(--text-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 3rem 2rem;
  border-radius: 24px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--card-shadow);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
}

.card:hover {
  transform: translateY(-12px) rotateX(4deg) rotateY(4deg);
  border-color: var(--primary-color);
  background: var(--glass-border);
}

.icons {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 10px 10px rgba(0,0,0,0.1));
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

/* Timeline */
.timeline-section {
  padding: 4rem 2rem;
  background: var(--glass-bg);
  border-radius: 32px;
  border: 1px solid var(--glass-border);
}

.timeline {
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--primary-color), transparent);
}

.timeline li {
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: flex-start;
  position: relative;
}

.timeline .year {
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  min-width: 85px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 210, 255, 0.3);
  z-index: 2;
}

.timeline .details h3 {
  margin: 0 0 0.5rem 0;
}

/* Fun Facts */
.facts-list {
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.facts-list li {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding-left: 1.5rem;
  position: relative;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    min-height: auto;
    padding-top: 2rem;
    gap: 3rem;
  }

  .portrait-wrapper {
    width: 300px;
    height: 300px;
  }

  .portrait-frame {
    width: 260px;
    height: 260px;
  }

  .floating-badge {
    width: 50px;
    height: 50px;
  }

  .hero-text h1 {
    font-size: 2.2rem;
  }
  
  .hero-text h2 {
    font-size: 1.5rem;
  }
}

/* Simple Animations */
.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>