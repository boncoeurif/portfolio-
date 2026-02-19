import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Skill from '@/views/skill.vue'
import Projects from '@/views/ProjectS.vue'
import Contact from '@/views/Contact.vue'
import Blog from '@/views/Blog.vue' // New import
import BlogPost from '@/views/BlogPost.vue' // New import

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/skill', name: 'Skill', component: Skill },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/blog', name: 'Blog', component: Blog }, // New route for blog list
  { path: '/blog/:id', name: 'BlogPost', component: BlogPost, props: true } // New dynamic route for individual posts
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' })
        }, 300)
      })
    }
  }
})

export default router
