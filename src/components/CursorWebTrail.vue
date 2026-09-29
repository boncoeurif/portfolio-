<template>
  <canvas ref="canvas" class="cursor-web-trail" aria-hidden="true"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)

const LIFETIME = 850
const MAX_POINTS = 70
const RUNG_EVERY = 3

let ctx = null
let raf = null
let points = []
let color = '#00d2ff'
let colorCheck = 0
let dpr = 1

const isSupported = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(pointer: coarse)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const refreshColor = () => {
  color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#00d2ff'
}

const resize = () => {
  if (!canvas.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.value.width = window.innerWidth * dpr
  canvas.value.height = window.innerHeight * dpr
  canvas.value.style.width = window.innerWidth + 'px'
  canvas.value.style.height = window.innerHeight + 'px'
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return m ? `${parseInt(m[1], 16)},${parseInt(m[2], 16)},${parseInt(m[3], 16)}` : '0, 210, 255'
}

const drawSegment = (a, b, alpha, withRung) => {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy)
  if (len < 0.5) return

  ctx.strokeStyle = `rgba(${color}, ${alpha * 0.9})`
  ctx.lineWidth = 1.6
  ctx.beginPath()
  ctx.moveTo(a.x, a.y)
  ctx.lineTo(b.x, b.y)
  ctx.stroke()

  if (!withRung) return

  // Web rungs: perpendicular strands branching off the thread
  const nx = -dy / len
  const ny = dx / len
  const spread = 6 + alpha * 8

  ctx.lineWidth = 1
  ctx.strokeStyle = `rgba(${color}, ${alpha * 0.7})`
  ctx.beginPath()
  ctx.moveTo(a.x + nx * spread, a.y + ny * spread)
  ctx.lineTo(a.x - nx * spread, a.y - ny * spread)
  ctx.stroke()

  // Zig-zag strands linking rungs, like a web mesh
  if (alpha > 0.25) {
    ctx.lineWidth = 0.7
    ctx.strokeStyle = `rgba(${color}, ${alpha * 0.35})`
    ctx.beginPath()
    ctx.moveTo(a.x + nx * spread, a.y + ny * spread)
    ctx.lineTo(b.x - nx * spread * 0.6, b.y - ny * spread * 0.6)
    ctx.moveTo(a.x - nx * spread, a.y - ny * spread)
    ctx.lineTo(b.x + nx * spread * 0.6, b.y + ny * spread * 0.6)
    ctx.stroke()
  }
}

const drawHead = (p, alpha) => {
  // Radial web spokes around the current cursor position
  const spokes = 6
  const radius = 10 + alpha * 6
  ctx.strokeStyle = `rgba(${color}, ${alpha * 0.55})`
  ctx.lineWidth = 1
  ctx.beginPath()
  for (let i = 0; i < spokes; i++) {
    const ang = (Math.PI * 2 * i) / spokes
    ctx.moveTo(p.x, p.y)
    ctx.lineTo(p.x + Math.cos(ang) * radius, p.y + Math.sin(ang) * radius)
  }
  ctx.stroke()

  // Circular strand connecting the spokes
  ctx.beginPath()
  ctx.arc(p.x, p.y, radius * 0.7, 0, Math.PI * 2)
  ctx.stroke()
}

const tick = () => {
  const now = performance.now()
  raf = null

  if (now - colorCheck > 600) {
    refreshColor()
    colorCheck = now
  }

  points = points.filter((p) => now - p.t < LIFETIME)
  ctx.clearRect(0, 0, canvas.value.width / dpr, canvas.value.height / dpr)

  for (let i = 1; i < points.length; i++) {
    const alpha = 1 - (now - points[i].t) / LIFETIME
    drawSegment(points[i - 1], points[i], alpha, i % RUNG_EVERY === 0)
  }

  if (points.length) {
    const head = points[points.length - 1]
    drawHead(head, Math.max(0, 1 - (now - head.t) / LIFETIME))
  }

  if (points.length) raf = requestAnimationFrame(tick)
}

const onMove = (e) => {
  points.push({ x: e.clientX, y: e.clientY, t: performance.now() })
  if (points.length > MAX_POINTS) points.shift()
  if (!raf) raf = requestAnimationFrame(tick)
}

const stop = () => {
  if (raf) cancelAnimationFrame(raf)
  raf = null
  points = []
}

onMounted(() => {
  if (!isSupported() || !canvas.value) return
  ctx = canvas.value.getContext('2d')
  refreshColor()
  resize()
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('resize', resize)
  window.addEventListener('blur', stop)
})

onUnmounted(() => {
  stop()
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('resize', resize)
  window.removeEventListener('blur', stop)
})
</script>

<style scoped>
.cursor-web-trail {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9998;
}
</style>
