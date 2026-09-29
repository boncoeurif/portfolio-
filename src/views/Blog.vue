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
import { blogPosts } from '@/data/blogPosts'
</script>

<style scoped>
.blog-container {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 4rem;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2.25rem;
    color: var(--primary-text);
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
    margin: 0 0 0.75rem 0;
    color: var(--primary-text);
    font-size: 1.4rem;
    font-weight: 800;
}

.blog-meta {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.blog-excerpt {
    flex-grow: 1;
    margin-bottom: 1.75rem;
    line-height: 1.7;
    font-size: 0.97rem;
    opacity: 0.9;
}

.read-more {
    color: var(--primary-text);
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

@media (max-width: 768px) {
    .section-title {
        font-size: 1.45rem;
        margin-bottom: 1.75rem;
    }

    .blog-posts-grid {
        gap: 2rem;
    }

    .blog-link {
        padding: 1.5rem;
    }

    .blog-header h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .blog-meta {
        font-size: 0.82rem;
        margin-bottom: 1rem;
    }

    .blog-excerpt {
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 1.25rem;
    }

    .read-more {
        font-size: 0.85rem;
    }
}
</style>