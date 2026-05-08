import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/skill', 
    name: 'Skill', 
    component: () => import('@/views/SkillView.vue') 
  },
  { 
    path: '/projects', 
    name: 'Projects', 
    component: () => import('@/views/Projects.vue') 
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: () => import('@/views/Contact.vue') 
  },
  { 
    path: '/blog', 
    name: 'Blog', 
    component: () => import('@/views/Blog.vue') 
  },
  { 
    path: '/blog/:id', 
    name: 'BlogPost', 
    component: () => import('@/views/BlogPost.vue'), 
    props: true 
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('@/views/NotFound.vue') 
  }
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
