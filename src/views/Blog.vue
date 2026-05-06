<template>
    <div class="blog-container">
        <h2 class="section-title" data-aos="fade-up">My Blog</h2>

        <div class="blog-posts-grid">
            <div class="blog-card" v-for="post in blogPosts" :key="post.id" data-aos="fade-up">
                <router-link :to="`/blog/${post.id}`" class="blog-link">
                    <div class="blog-header">
                        <h3>{{ post.title }}</h3>
                        <p class="blog-meta">{{ post.author }} | {{ post.date }}</p>
                    </div>
                    <p class="blog-excerpt">{{ post.excerpt }}</p>
                    <span class="read-more">Read More &rarr;</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const blogPosts = ref([
    {
        id: 'first-post',
        title: 'Getting Started with Vue 3 and Vite',
        author: 'John Doe',
        date: 'January 15, 2024',
        excerpt: 'A comprehensive guide to setting up your first Vue 3 project using Vite for blazing fast development experience...',
        content: 'Content for the first blog post goes here...'
    },
    {
        id: 'understanding-composition-api',
        title: 'Understanding Vue 3 Composition API',
        author: 'Jane Smith',
        date: 'February 1, 2024',
        excerpt: 'Dive deep into the Composition API, exploring its benefits and how it changes component organization...',
        content: 'Content for the second blog post goes here...'
    },
    {
        id: 'css-tips-for-responsive-design',
        title: 'CSS Tips for Responsive Design',
        author: 'Alice Johnson',
        date: 'March 10, 2024',
        excerpt: 'Learn effective CSS techniques to make your web applications look great on any device...',
        content: 'Content for the third blog post goes here...'
    }
]);
</script>

<style scoped>
.blog-container {
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

.blog-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
}

.blog-card {
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

.blog-card:hover {
    transform: translateY(-12px);
    border-color: var(--primary-color);
    background: var(--glass-border);
}

.blog-link {
    text-decoration: none;
    color: inherit;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.blog-header h3 {
    margin: 0 0 1rem 0;
    color: var(--primary-color);
    font-size: 1.75rem;
    font-weight: 800;
}

.blog-meta {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.blog-excerpt {
    flex-grow: 1;
    margin-bottom: 2rem;
    line-height: 1.7;
    font-size: 1.05rem;
    opacity: 0.9;
}

.read-more {
    color: var(--primary-color);
    font-weight: 800;
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.3s ease;
}

.blog-card:hover .read-more {
    transform: translateX(8px);
}
</style>