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
        <div class="blob">
          <img :src="bon" alt="boncoeur" class="icon">
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
const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver','Window server configration','Logo Creator']
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
  min-height: 80vh;
  /* Takes up most of the screen */
  gap: 2rem;
  position: relative;
}

.hero-text {
  flex: 1;
  max-width: 600px;
  border-radius: 12px;
  margin-top: 20px;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  color: skyblue;
}

.hero-text h2 {
  font-size: 2rem;
  color: skyblue;
  margin-bottom: 1.5rem;
  font-weight: 600;
  min-height: 2.4rem;
}

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s infinite;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.hero-text p {
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  opacity: 0.8;
  line-height: 1.6;
}

.highlight {
  color: skyblue;
}

/* Buttons */
.cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary {
  background-color: var(--primary-color);
  color: #fff;
  box-shadow: 0 4px 14px rgba(66, 185, 131, 0.4);
}

.btn-secondary {
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--text-color);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.6);
}

.btn-secondary:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Hero Visual (Blob) */
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blob {
  width: 350px;
  height: 350px;
  background: linear-gradient(45deg, var(--primary-color), #2c3e50);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: morph 8s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.emoji {
  font-size: 8rem;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

/* Scroll Down Indicator */
.scroll-down {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
  color: var(--text-color);
  opacity: 0.7;
  transition: opacity 0.3s;
}

.scroll-down:hover {
  opacity: 1;
  color: var(--primary-color);
}

.arrow-down {
  font-size: 2rem;
  font-weight: bold;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

/* Services Section */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: skyblue;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.card {
  background: var(--bg-color);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.icons {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card h3 {
  margin-bottom: 0.5rem;
  color: skyblue;
}

/* Timeline */
.timeline {
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
}

.timeline li {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.timeline .year {
  font-weight: 800;
  color: var(--primary-color);
  font-size: 1.2rem;
  min-width: 80px;
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

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    min-height: auto;
    padding-top: 2rem;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .blob {
    width: 250px;
    height: 250px;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }
}

/* Simple Animations */
.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-1 {
  animation-delay: 0.2s;
}

.delay-2 {
  animation-delay: 0.4s;
}

.delay-3 {
  animation-delay: 0.6s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.icon {
    font-size: 2rem;
    height: 34rem;
    width: 50rem;
    border-radius: 47%;
    background-color: white;
}
</style>