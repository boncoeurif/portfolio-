<template>
  <canvas ref="canvas" class="matrix-canvas" aria-hidden="true"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)

let rafId = null
let onResize = null
let onVisibility = null

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  const cvs = canvas.value
  const ctx = cvs.getContext('2d')
  const glyphs = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]#$%&*+=?'
  const fontSize = window.innerWidth < 768 ? 14 : 16

  let width = 0
  let height = 0
  let drops = []
  let speeds = []
  let running = true

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = window.innerWidth
    height = window.innerHeight
    cvs.width = Math.floor(width * dpr)
    cvs.height = Math.floor(height * dpr)
    cvs.style.width = width + 'px'
    cvs.style.height = height + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)

    const columns = Math.ceil(width / fontSize)
    drops = new Array(columns)
    speeds = new Array(columns)
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * height
      speeds[i] = 0.35 + Math.random() * 0.5
    }
  }

  const draw = () => {
    if (!running) return

    ctx.globalCompositeOperation = 'destination-out'
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'
    ctx.fillRect(0, 0, width, height)
    ctx.globalCompositeOperation = 'source-over'

    ctx.font = `${fontSize}px "Courier New", monospace`
    ctx.textBaseline = 'top'

    for (let i = 0; i < drops.length; i++) {
      const y = drops[i]
      if (y > -fontSize && y < height) {
        const roll = Math.random()
        ctx.fillStyle = roll > 0.985 ? '#00d2ff' : roll > 0.95 ? '#d8fff4' : '#00ff9c'
        ctx.fillText(glyphs[(Math.random() * glyphs.length) | 0], i * fontSize, y)
      }

      drops[i] += speeds[i] * fontSize

      if (drops[i] > height + fontSize) {
        drops[i] = -Math.random() * 15 * fontSize
        speeds[i] = 0.35 + Math.random() * 0.5
      }
    }

    rafId = requestAnimationFrame(draw)
  }

  const start = () => {
    if (running || rafId) return
    running = true
    rafId = requestAnimationFrame(draw)
  }

  const stop = () => {
    running = false
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  onResize = () => resize()
  onVisibility = () => {
    if (document.hidden) stop()
    else start()
  }

  resize()
  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', onVisibility)
  rafId = requestAnimationFrame(draw)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (onResize) window.removeEventListener('resize', onResize)
  if (onVisibility) document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<style scoped>
.matrix-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>
