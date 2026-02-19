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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.blog-card {
    background: var(--bg-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

[data-theme="dark"] .blog-card {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.blog-link {
    text-decoration: none;
    color: inherit;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.blog-header h3 {
    margin: 0 0 0.5rem 0;
    color: skyblue;
    font-size: 1.5rem;
}

.blog-meta {
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 1rem;
}

.blog-excerpt {
    flex-grow: 1;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.read-more {
    color: var(--primary-color);
    font-weight: 600;
    align-self: flex-start;
}
</style>