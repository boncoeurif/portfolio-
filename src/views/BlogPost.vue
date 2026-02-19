<template>
    <div class="blog-post-container">
        <router-link to="/blog" class="back-to-blog">&larr; Back to Blog</router-link>

        <div v-if="post" class="post-content-card" data-aos="fade-up">
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-meta">{{ post.author }} | {{ post.date }}</p>
            <div class="post-body">
                <p>{{ post.content }}</p>
                <!-- In a real application, you might use markdown-it or another library to render dynamic content -->
            </div>
        </div>
        <div v-else class="post-not-found" data-aos="fade-up">
            <h3>Post not found.</h3>
            <p>The blog post you are looking for does not exist.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

// Re-defining blogPosts here for simplicity. In a larger app, this might come from a store or API.
const allBlogPosts = ref([
    {
        id: 'first-post',
        title: 'Getting Started with Vue 3 and Vite',
        author: 'John Doe',
        date: 'January 15, 2024',
        excerpt: 'A comprehensive guide to setting up your first Vue 3 project using Vite for blazing fast development experience...',
        content: 'This is the full content for the first blog post. It explains how to set up a new Vue 3 project with Vite, detailing the commands, project structure, and initial configuration. It covers topics like component creation, basic routing, and styling with CSS preprocessors. The goal is to get developers up and running quickly with a modern Vue development environment.'
    },
    {
        id: 'understanding-composition-api',
        title: 'Understanding Vue 3 Composition API',
        author: 'Jane Smith',
        date: 'February 1, 2024',
        excerpt: 'Dive deep into the Composition API, exploring its benefits and how it changes component organization...',
        content: 'Here is the detailed explanation of the Vue 3 Composition API. It contrasts the Composition API with the Options API, highlighting benefits like better code organization, reusability, and type inference. Examples include `ref`, `reactive`, `computed`, `watch`, and lifecycle hooks. It also shows how to extract reusable logic into composables.'
    },
    {
        id: 'css-tips-for-responsive-design',
        title: 'CSS Tips for Responsive Design',
        author: 'Alice Johnson',
        date: 'March 10, 2024',
        excerpt: 'Learn effective CSS techniques to make your web applications look great on any device...',
        content: 'This post provides practical CSS tips for achieving responsive design. It covers media queries, flexible box layout (flexbox), grid layout, `viewport` units, and image optimization for different screen sizes. It emphasizes a mobile-first approach and best practices for creating adaptable user interfaces across various devices.'
    }
]);

const route = useRoute();
const post = ref(null);

watchEffect(() => {
    const postId = route.params.id;
    post.value = allBlogPosts.value.find(p => p.id === postId);
});
</script>

<style scoped>
.blog-post-container {
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 4rem;
    padding-top: 2rem;
}

.back-to-blog {
    display: inline-block;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
}

.back-to-blog:hover {
    color: var(--text-color);
}

.post-content-card {
    background: var(--bg-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .post-content-card {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
}

.post-title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.post-meta {
    font-size: 1rem;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 2rem;
}

.post-body {
    line-height: 1.8;
    color: var(--text-color);
}

.post-body p {
    margin-bottom: 1.5rem;
}

.post-not-found {
    text-align: center;
    padding: 3rem;
    background: var(--bg-color);
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .post-not-found {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
}

.post-not-found h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}
</style>