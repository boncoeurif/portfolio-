<template>
  <div class="skills-container">
    <h2 class="section-title" data-aos="fade-up">Technical Skills</h2>
    
    <div class="skills-category" v-for="(category, index) in skillCategories" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
      <h3 class="category-title">{{ category.name }}</h3>
      <div class="skills-grid">
        <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
          <div class="skill-icon">
            <img :src="skill.icon" :alt="skill.name" class="skill-img" />
          </div>
          <span class="skill-name">{{ skill.name }}</span>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vue from '@/assets/vue.png'
import react from '@/assets/react.png'
import js from '@/assets/js.png'
import html from '@/assets/html.png'
import css from '@/assets/css.png'
import tailwind from '@/assets/tailwind.png'
import node from '@/assets/NODE.png'
import express from '@/assets/Express-js.png'
import mongo from '@/assets/mongo.png'
import MYSQL from '@/assets/mysql.svg'
import sql from '@/assets/sql.png'
import git from '@/assets/github.svg'
import vscode from '@/assets/vscode.png'
import figma from '@/assets/figma.png'
import adobe from '@/assets/xd.png'

const skillCategories = ref([
  {
    name: 'Frontend Development',
    skills: [
      { name: 'Vue.js', icon: vue, description: 'A progressive framework for building user interfaces.' },
      { name: 'React', icon: react, description: 'A JavaScript library for building user interfaces.' },
      { name: 'JavaScript (ES6+)', icon: js, description: 'A versatile programming language for web development.' },
      { name: 'HTML5', icon: html, description: 'The standard markup language for creating web pages.' },
      { name: 'CSS3 / SCSS', icon: css, description: 'A style sheet language used for describing the presentation of a document.' },
      { name: 'Tailwind CSS', icon: tailwind, description: 'A utility-first CSS framework for rapid UI development.' }
    ]
  },
  {
    name: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: node, description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
      { name: 'Express', icon: express, description: 'A minimal and flexible Node.js web application framework.' },
      { name: 'MongoDB', icon: mongo, description: 'A cross-platform document-oriented database program.' },
      { name: 'Mysql', icon: MYSQL, description: 'An open-source relational database management system.' },
      { name: 'SQL', icon: sql, description: 'A domain-specific language used in programming and designed for managing data held in a relational database management system.' }
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', icon: git, description: 'A distributed version-control system for tracking changes in source code during software development.' },
      { name: 'VS Code', icon: vscode, description: 'A lightweight but powerful source code editor.' },
      { name: 'Figma', icon: figma, description: 'A vector graphics editor and prototyping tool.' },
      { name: 'AdobeXD', icon: adobe, description: 'A vector-based user experience design tool for web apps and mobile apps.' }
    ]
  }
])
</script>

<style scoped>
.skills-container {
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: skyblue;
}

.skills-category {
  margin-bottom: 5rem;
}

.category-title {
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: var(--text-color);
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.category-title::after {
  content: '';
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, var(--primary-color), transparent);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.skill-item {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  padding: 2.5rem 1.5rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: var(--card-shadow);
}

.skill-item:hover {
  transform: translateY(-12px);
  border-color: var(--primary-color);
  background: var(--glass-border);
}

.skill-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.skill-item:hover .skill-icon {
  transform: scale(1.1) rotate(5deg);
}

.skill-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
}

.skill-name {
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--text-color);
}

.skill-description {
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.8;
  color: var(--text-color);
}
</style>