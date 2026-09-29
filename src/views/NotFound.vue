<template>
    <div class="not-found-container">
        <h1 class="error-code">404</h1>
        <h2 class="error-message">Page Not Found</h2>
        <p class="description">Oops! The page you are looking for does not exist or has been moved.</p>
        <router-link to="/" class="btn-home">Go Back Home</router-link>
    </div>
</template>

<script setup>
// No script logic needed for this simple view
</script>

<style scoped>
.not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
    padding: 2rem;
}

.error-code {
    font-size: 6.5rem;
    font-weight: 800;
    color: var(--primary-text);
    margin: 0;
    line-height: 1;
    text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
}

.error-message {
    font-size: 1.6rem;
    margin: 0.75rem 0;
    color: var(--heading-color);
}

.description {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    opacity: 0.8;
}

.btn-home {
    display: inline-block;
    padding: 0.85rem 2.1rem;
    background-color: var(--primary-color);
    color: #01151c;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
}

.btn-home:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(66, 185, 131, 0.5);
}
</style>