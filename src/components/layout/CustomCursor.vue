<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCursor } from '../../composables/useCursor'

const { cursorState, cursorLabel, isHoveringInteractive } = useCursor()

const mouseX = ref(-100)
const mouseY = ref(-100)
const followerX = ref(-100)
const followerY = ref(-100)
const isVisible = ref(false)

let animId: number

function onMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  if (!isVisible.value) isVisible.value = true
}

function updateFollower() {
  // Smooth spring lerp
  followerX.value += (mouseX.value - followerX.value) * 0.18
  followerY.value += (mouseY.value - followerY.value) * 0.18

  animId = requestAnimationFrame(updateFollower)
}

onMounted(() => {
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', onMouseMove)
    animId = requestAnimationFrame(updateFollower)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(animId)
})
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 pointer-events-none z-[9999] hidden md:block overflow-hidden"
  >
    <!-- Main Center Dot -->
    <div
      class="fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-prism-cyan transition-transform duration-75 ease-out shadow-[0_0_12px_#00F0FF]"
      :style="{
        transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }"
      :class="{ 'opacity-0': cursorState === 'VIEW_CASE' || cursorState === 'DRAG' }"
    />

    <!-- Follower Ring / Interactive Pill Sphere -->
    <div
      class="fixed top-0 left-0 rounded-full flex items-center justify-center font-display font-bold tracking-widest text-[10px] text-black uppercase transition-all duration-300 ease-out backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 select-none"
      :style="{
        transform: `translate3d(${followerX}px, ${followerY}px, 0)`
      }"
      :class="[
        cursorState === 'DEFAULT' ? 'w-9 h-9 border border-white/25 bg-transparent' : '',
        cursorState === 'HOVER' ? 'w-14 h-14 bg-prism-cyan/20 border border-prism-cyan scale-110 shadow-[0_0_24px_rgba(0,240,255,0.4)]' : '',
        cursorState === 'VIEW_CASE' ? 'w-24 h-24 bg-gradient-to-tr from-prism-cyan via-white to-prism-magenta text-black shadow-[0_0_32px_rgba(255,255,255,0.6)] scale-100' : '',
        cursorState === 'DRAG' ? 'w-20 h-20 bg-prism-magenta text-white shadow-[0_0_28px_#FF2E93]' : '',
        cursorState === 'TWEAK' ? 'w-20 h-20 bg-prism-gold text-black shadow-[0_0_28px_#FFD166]' : '',
      ]"
    >
      <span v-if="cursorLabel" class="animate-fade-in text-center px-2">
        {{ cursorLabel }}
      </span>
    </div>
  </div>
</template>
