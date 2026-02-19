<template>
    <div class="contact-container">
        <h2 class="section-title" data-aos="fade-up">Get in Touch</h2>

        <div class="contact-content">
            <!-- Contact Info -->
            <div class="contact-info" data-aos="fade-right">
                <div class="info-item">
                    <span class="icone"><img :src="email" alt="Email Icon"></span>
                    <div>
                        <h3>Email</h3>
                        <p>irakozefabricebonceour@gmail.com</p>
                    </div>
                </div>
                <div class="info-item">
                    <span class="icon"><img :src="locc" alt="Location Icon"></span>
                    <div>
                        <h3>Location</h3>
                        <p>Kigali, Rwanda</p>
                    </div>
                </div>
                <div class="info-item">
                    <span class="icon"><img :src="phone" alt="Phone Icon"></span>
                    <div>
                        <h3>WhatsApp</h3>
                        <p>+250 795 158 623</p>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <form class="contact-form" @submit.prevent="submitForm" data-aos="fade-left">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="form.name" required placeholder="Your Name" />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="form.email" required placeholder="Your Email" />
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" v-model="form.message" required placeholder="Your Message"
                        rows="5"></textarea>
                </div>

                <button type="submit" class="btn-submit">Send Message</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import locc from '@/assets/locc.png'
import phone from '@/assets/phone-call.png'
import email from '@/assets/em.png'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const submitForm = () => {
    // These IDs should be replaced with your actual EmailJS IDs.
    // You can find them in your EmailJS account dashboard.
    const serviceID = 'service_50k8dgx';
    const templateID = 'template_1bwd6ql';

    const templateParams = {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            alert(`Thank you ${form.value.name}! Your message has been sent.`);
            console.log('SUCCESS!');
            // Reset form
            form.value = {
                name: '',
                email: '',
                message: ''
            };
        }, (err) => {
            alert(JSON.stringify(err));
            console.log('FAILED...', err);
        });
};
</script>

<style scoped>
.contact-container {
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 4rem;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: skyblue;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
}

/* Info Styles */
.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--bg-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
}

[data-theme="dark"] .info-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
}

.info-item:hover {
    transform: translateY(-5px);
}

.icon {
    font-size: 2rem;
}


.info-item h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1.1rem;
    color: skyblue;
}

.info-item p {
    margin: 0;
    opacity: 0.8;
}

/* Form Styles */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: var(--bg-color);
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .contact-form {
    background: rgba(255, 255, 255, 0.05);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-weight: 500;
    margin-left: 0.5rem;
}

input,
textarea {
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--bg-color);
    color: var(--text-color);
    font-family: inherit;
    transition: border-color 0.3s ease;
}

[data-theme="dark"] input,
[data-theme="dark"] textarea {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.2);
}

input:focus,
textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.btn-submit {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.2s ease;
    margin-top: 1rem;
}

.btn-submit:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}
</style>
