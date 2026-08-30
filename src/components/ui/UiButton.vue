<script setup lang="ts">
import { ref } from 'vue'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'

interface Props {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const { setCursor, resetCursor } = useCursor()
const { playClick, playHover } = useSound()
const buttonRef = ref<HTMLElement | null>(null)
const transformStyle = ref({ transform: 'translate(0px, 0px)' })

function onMouseMove(e: MouseEvent) {
  if (!buttonRef.value) return
  const rect = buttonRef.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  // Magnetic pull towards cursor (max 12px)
  const distanceX = (e.clientX - centerX) * 0.25
  const distanceY = (e.clientY - centerY) * 0.25
  
  transformStyle.value = {
    transform: `translate(${distanceX}px, ${distanceY}px)`
  }
}

function onMouseEnter() {
  setCursor('HOVER')
  playHover()
}

function onMouseLeave() {
  resetCursor()
  transformStyle.value = { transform: 'translate(0px, 0px)' }
}

function onClick() {
  playClick()
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    ref="buttonRef"
    :href="href"
    :style="transformStyle"
    class="relative inline-flex items-center justify-center font-display font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none group"
    :class="[
      size === 'sm' ? 'px-4 py-2 text-xs rounded-full gap-1.5' : '',
      size === 'md' ? 'px-6 py-3.5 text-xs md:text-sm rounded-full gap-2.5' : '',
      size === 'lg' ? 'px-8 py-4 text-sm md:text-base rounded-full gap-3' : '',
      variant === 'primary' ? 'bg-gradient-to-r from-prism-cyan via-prism-electric to-prism-magenta text-black hover:shadow-[0_0_28px_rgba(0,240,255,0.45)]' : '',
      variant === 'secondary' ? 'bg-white text-black hover:bg-prism-cyan hover:text-black' : '',
      variant === 'glass' ? 'bg-void-800/80 backdrop-blur-md text-white border border-white/10 hover:border-prism-cyan/60 hover:text-prism-cyan shadow-lg' : '',
      variant === 'outline' ? 'bg-transparent text-white border border-white/20 hover:border-prism-magenta hover:text-prism-magenta' : '',
    ]"
    @mousemove="onMouseMove"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onClick"
  >
    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>
  </component>
</template>
