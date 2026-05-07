<template>
    <div class="projects-container">
        <h2 class="section-title" data-aos="fade-up">My Projects</h2>

        <div class="search-bar" data-aos="fade-up">
            <input type="text" v-model="searchQuery" placeholder="Search projects by title or description..." class="search-input" />
        </div>

        <!-- Filter Buttons -->
        <div class="filter-buttons" data-aos="fade-up">
            <button
                @click="setActiveFilter('All')"
                :class="{ active: activeFilter === 'All' }"
                class="filter-btn"
            >
                All
            </button>
            <button
                v-for="tag in uniqueTags"
                :key="tag"
                @click="setActiveFilter(tag)"
                :class="{ active: activeFilter === tag }"
                class="filter-btn"
            >
                {{ tag }}
            </button>
        </div>

        <div class="projects-grid">
            <div class="project-card" v-for="project in filteredProjects" :key="project.id" data-aos="fade-up">
                <div class="project-image">
                    <img :src="project.image" :alt="project.title" class="image"/>
                </div>
                <div class="project-content">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <div class="tags">
                        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                    <div class="links">
                        <a :href="project.demo" target="_blank" class="btn-link">Live Demo</a>
                        <a :href="project.github" target="_blank" class="btn-link">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import shop from '@/assets/shop.png'
import task from '@/assets/task.png'
import weather from '@/assets/weather.png'

const projects = ref([
    {
        id: 0,
        title: 'Invoxa Invoicing SaaS',
        description: 'A premium SaaS platform for professional invoicing, featuring automated PDF exports and live financial analytics.',
        tags: ['Vue.js', 'SaaS', 'FinTech', 'PDF Engine'],
        demo: 'https://invoxa-rw.vercel.app',
        image: shop, // Using shop as placeholder or I could leave it blank if no image
        github: '#'
    },
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart and checkout functionality.',
        tags: ['Vue.js', 'Firebase', 'Stripe'],
        demo: '#',
        image: shop,
        github: '#'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'Kanban-style task board for team collaboration.',
        tags: ['Vue.js', 'Node.js', 'MongoDB'],
        demo: '#',
        image: task,
        github: '#'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'Real-time weather tracking with location support.',
        tags: ['Vue.js', 'OpenWeather API'],
        demo: '#',
        image: weather,
        github: '#'
    }
])

const activeFilter = ref('All');
const searchQuery = ref(''); // New ref for search query

const uniqueTags = computed(() => {
    const tags = new Set();
    projects.value.forEach(project => {
        project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
});

const filteredProjects = computed(() => {
    let filtered = projects.value;

    // Filter by active tag
    if (activeFilter.value !== 'All') {
        filtered = filtered.filter(project => project.tags.includes(activeFilter.value));
    }

    // Filter by search query
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(project =>
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query)
        );
    }

    return filtered;
});

const setActiveFilter = (filter) => {
    activeFilter.value = filter;
};
</script>

<style scoped>
.projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 4rem;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: skyblue;
}

/* Search Bar */
.search-bar {
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 1rem;
}

.search-input {
  width: 100%;
  max-width: 600px;
  padding: 1.2rem 2rem;
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  color: var(--text-color);
  font-family: inherit;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: var(--card-shadow);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 4px rgba(0, 210, 255, 0.2);
  transform: translateY(-2px);
}

/* Filter Buttons */
.filter-buttons {
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
}

.filter-btn {
  background: var(--glass-bg);
  color: var(--text-color);
  border: 1px solid var(--glass-border);
  padding: 0.8rem 1.8rem;
  border-radius: 14px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-btn:hover {
  background: var(--glass-border);
  transform: translateY(-3px);
  border-color: var(--primary-color);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-color: transparent;
  box-shadow: 0 10px 20px -5px rgba(0, 210, 255, 0.4);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
}

.project-card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  box-shadow: var(--card-shadow);
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: var(--primary-color);
}

.project-image {
  height: 240px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(0, 210, 255, 0.1), rgba(58, 123, 213, 0.1));
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .image {
  transform: scale(1.1);
}

.project-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-content h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  font-weight: 700;
}

.project-content p {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.tag {
  background: rgba(0, 210, 255, 0.1);
  color: var(--primary-color);
  padding: 0.4rem 1rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  border: 1px solid rgba(0, 210, 255, 0.2);
}

.links {
  display: flex;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--glass-border);
}

.btn-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-link:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .search-input {
    padding: 0.8rem 1.2rem;
    font-size: 0.95rem;
    border-radius: 14px;
  }

  .filter-buttons {
    gap: 0.6rem;
    margin-bottom: 2.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card {
    border-radius: 18px;
  }

  .project-image {
    height: 180px;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-content h3 {
    font-size: 1.3rem;
  }

  .project-content p {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .tags {
    margin-bottom: 1.5rem;
  }

  .tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>