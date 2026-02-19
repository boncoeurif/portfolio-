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
    margin-bottom: 2rem;
    padding: 0 1rem;
}

.search-input {
    width: 100%;
    max-width: 500px;
    padding: 0.8rem 1.2rem;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--bg-color);
    color: var(--text-color);
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

[data-theme="dark"] .search-input {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.2);
}

.search-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
}


/* Filter Buttons */
.filter-buttons {
    text-align: center;
    margin-bottom: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.filter-btn {
    background: var(--bg-color);
    color: var(--text-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

[data-theme="dark"] .filter-btn {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
}

.filter-btn:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.filter-btn.active {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    box-shadow: 0 4px 10px rgba(66, 185, 131, 0.3);
}


.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--bg-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

[data-theme="dark"] .project-card {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.project-image {
    height: 200px;
    background: linear-gradient(45deg, var(--primary-color), #2c3e50);
    display: flex;
    align-items: center;
    justify-content: center;
}

.placeholder-image {
    font-size: 5rem;
}

.project-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.project-content h3 {
    margin: 0 0 0.5rem 0;
    color: skyblue;
}

.project-content p {
    margin-bottom: 1.5rem;
    opacity: 0.8;
    flex: 1;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tag {
    background: rgba(66, 185, 131, 0.1);
    color: var(--primary-color);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

.links {
    display: flex;
    gap: 1rem;
}

.btn-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 0.2s;
}

.btn-link:hover {
    color: var(--primary-color);
}
.image{
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;
    color: #fff;
    border-radius: 10px;
}
</style>