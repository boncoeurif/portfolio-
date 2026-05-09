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
import emailjs from '@emailjs/browser'
import locc from '@/assets/locc.png'
import phone from '@/assets/phone-call.png'
import email from '@/assets/em.png'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const submitForm = () => {
    // These IDs are from your original implementation.
    const serviceID = 'service_50k8dgx';
    const templateID = 'template_1bwd6ql';
    const publicKey = 'hic9ecb2SNWqo2ff8';

    const templateParams = {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
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
            console.error('FAILED...', err);
            alert('Sorry, there was an issue sending your message. Please try again later.');
        });
};
</script>

<style scoped>
.contact-container {
    max-width: 1000px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
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
    gap: 1.5rem;
    padding: 2rem;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    box-shadow: var(--card-shadow);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-item:hover {
    transform: translateY(-8px);
    border-color: var(--primary-color);
    background: var(--glass-border);
}

.icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 210, 255, 0.1);
    border-radius: 12px;
}

.icon img {
    width: 24px;
    height: 24px;
    object-fit: contain;
}

.info-item h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--primary-color);
}

.info-item p {
    margin: 0;
    font-weight: 600;
    opacity: 0.9;
}

/* Form Styles */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    padding: 3rem;
    border: 1px solid var(--glass-border);
    border-radius: 32px;
    box-shadow: var(--card-shadow);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

label {
    font-weight: 700;
    font-size: 0.95rem;
    margin-left: 0.5rem;
    opacity: 0.8;
}

input,
textarea {
    padding: 1.2rem;
    border-radius: 16px;
    border: 1px solid var(--glass-border);
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 4px rgba(0, 210, 255, 0.1);
}

.btn-submit {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    padding: 1.2rem;
    border-radius: 16px;
    font-weight: 800;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 20px -5px rgba(0, 210, 255, 0.4);
    margin-top: 1rem;
}

.btn-submit:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 30px -5px rgba(0, 210, 255, 0.6);
}

@media (max-width: 768px) {
    .contact-container {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        padding-bottom: 2rem;
    }

    .section-title {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }

    .contact-content {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .contact-info {
        gap: 0.75rem;
    }

    .info-item {
        padding: 1rem 1.25rem;
        gap: 0.75rem;
        border-radius: 16px;
    }

    .icon {
        width: 36px;
        height: 36px;
        border-radius: 8px;
    }

    .icon img {
        width: 18px;
        height: 18px;
    }

    .info-item h3 {
        font-size: 0.9rem;
        margin-bottom: 0.1rem;
    }

    .info-item p {
        font-size: 0.8rem;
    }

    .contact-form {
        padding: 1.5rem;
        gap: 1rem;
        border-radius: 20px;
    }

    .form-group {
        gap: 0.4rem;
    }

    label {
        font-size: 0.85rem;
    }

    input, textarea {
        padding: 0.75rem;
        font-size: 0.9rem;
        border-radius: 12px;
    }

    .btn-submit {
        padding: 0.9rem;
        font-size: 0.95rem;
        border-radius: 12px;
        margin-top: 0.5rem;
    }
}
</style>
