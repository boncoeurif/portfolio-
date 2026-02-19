<template>
    <div class="contact">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input id="name" v-model="form.name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input id="email" v-model="form.email" type="email" required />
            </div>
            <div>
                <label for="message">Message:</label>
                <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
        <div v-if="submitted" class="success-message">
            Thank you for contacting us!
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>