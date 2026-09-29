<template>
    <div class="blog-post-container">
        <router-link to="/blog" class="back-to-blog">&larr; Back to Blog</router-link>

        <div v-if="post" class="post-content-card" data-aos="fade-up">
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-meta">{{ post.author }} | {{ post.date }}</p>
            <div class="post-body">
                <p v-for="(paragraph, index) in post.content" :key="index">{{ paragraph }}</p>
            </div>
        </div>
        <div v-else class="post-not-found" data-aos="fade-up">
            <h3>Post not found.</h3>
            <p>The blog post you are looking for does not exist.</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { blogPosts } from '@/data/blogPosts';

const route = useRoute();
const post = computed(() => blogPosts.find(p => p.id === route.params.id));
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
    margin-bottom: 1.25rem;
    color: var(--primary-text);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;
}

.back-to-blog:hover {
    color: var(--text-color);
}

.post-content-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: var(--card-shadow);
}

.post-title {
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    margin-bottom: 0.75rem;
    color: var(--heading-color);
    font-weight: 800;
    line-height: 1.15;
}

.post-meta {
    font-size: 0.97rem;
    font-weight: 600;
    color: var(--primary-text);
    margin-bottom: 2rem;
}

.post-body {
    line-height: 1.75;
    color: var(--text-color);
    font-size: 1.05rem;
}

.post-body p {
    margin-bottom: 1.25rem;
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
    color: var(--primary-text);
    margin-bottom: 1rem;
}
</style>