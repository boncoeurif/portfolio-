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
    font-size: 8rem;
    font-weight: 800;
    color: var(--primary-color);
    margin: 0;
    line-height: 1;
    text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
}

.error-message {
    font-size: 2rem;
    margin: 1rem 0;
    color: var(--text-color);
}

.description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    color: var(--text-color);
    opacity: 0.8;
}

.btn-home {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
}

.btn-home:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(66, 185, 131, 0.5);
}
</style>