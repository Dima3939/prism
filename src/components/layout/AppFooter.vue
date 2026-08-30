<script setup lang="ts">
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { ArrowUpRight, Mail } from 'lucide-vue-next'

const { setCursor, resetCursor } = useCursor()
const { playHover } = useSound()

const marqueeItems = [
  'CREATIVE WEBGL ATELIER',
  'CUSTOM GLSL SHADERS',
  'GSAP KINETIC MOTION',
  'AWWWARDS BENCHMARK',
  'SPATIAL 3D EXPERIENCES',
  '120 FPS FLUID PHYSICS',
  'HIGH-TICKET CLIENT ROI'
]
</script>

<template>
  <footer class="relative pt-20 pb-12 px-4 sm:px-8 md:px-10 border-t border-white/10 bg-void-950 z-20 select-none overflow-hidden text-left">
    <!-- Kinetic Marquee Ticker Strip -->
    <div class="relative w-full overflow-hidden py-4 border-b border-white/10 mb-16">
      <div class="flex gap-8 whitespace-nowrap animate-marquee">
        <div
          v-for="(item, i) in [...marqueeItems, ...marqueeItems]"
          :key="i"
          class="flex items-center gap-8 text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-zinc-400 uppercase"
        >
          <span>{{ item }}</span>
          <span class="w-2 h-2 rounded-full bg-prism-cyan" />
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto space-y-16">
      <!-- Main Columns Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand & Vision -->
        <div class="md:col-span-2 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold flex items-center justify-center text-black font-mono font-bold text-xs rotate-45">
              <span class="-rotate-45 font-extrabold text-white">P</span>
            </div>
            <span class="text-xl font-display font-extrabold tracking-widest text-white">
              PRISM ATELIER
            </span>
          </div>
          <p class="text-sm font-body text-zinc-400 max-w-md leading-relaxed">
            A multidisciplinary creative tech laboratory engineering bespoke WebGL, GLSL shader choreography, and high-conversion flagship web experiences for global brands.
          </p>
          <div class="flex items-center gap-4 pt-2">
            <a
              href="mailto:contact@prism-atelier.dev"
              class="inline-flex items-center gap-2 text-xs font-mono text-prism-cyan hover:underline"
              @mouseenter="setCursor('HOVER'); playHover()"
              @mouseleave="resetCursor"
            >
              <Mail class="w-4 h-4" />
              <span>contact@prism-atelier.dev</span>
            </a>
          </div>
        </div>

        <!-- Direct Platforms -->
        <div class="space-y-3">
          <p class="text-xs font-mono uppercase text-hud-text tracking-widest">
            Freelance & Direct
          </p>
          <ul class="space-y-2 text-sm font-display font-medium text-zinc-300">
            <li>
              <a href="#" class="hover:text-prism-cyan transition-colors flex items-center gap-1.5" @mouseenter="setCursor('HOVER')" @mouseleave="resetCursor">
                <span>Upwork Pro Profile</span>
                <ArrowUpRight class="w-3.5 h-3.5 text-hud-text" />
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-prism-cyan transition-colors flex items-center gap-1.5" @mouseenter="setCursor('HOVER')" @mouseleave="resetCursor">
                <span>Fiverr Pro Top Rated</span>
                <ArrowUpRight class="w-3.5 h-3.5 text-hud-text" />
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-prism-cyan transition-colors flex items-center gap-1.5" @mouseenter="setCursor('HOVER')" @mouseleave="resetCursor">
                <span>Awwwards Directory</span>
                <ArrowUpRight class="w-3.5 h-3.5 text-hud-text" />
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-prism-cyan transition-colors flex items-center gap-1.5" @mouseenter="setCursor('HOVER')" @mouseleave="resetCursor">
                <span>Telegram Direct</span>
                <ArrowUpRight class="w-3.5 h-3.5 text-hud-text" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Channels -->
        <div class="space-y-3">
          <p class="text-xs font-mono uppercase text-hud-text tracking-widest">
            Network & Code
          </p>
          <ul class="space-y-2 text-sm font-display font-medium text-zinc-300">
            <li>
              <a href="#" class="hover:text-prism-magenta transition-colors flex items-center gap-1.5" @mouseenter="setCursor('HOVER')" @mouseleave="resetCursor">
                <span>GitHub Repository</span>
                <ArrowUpRight class="w-3.5 h-3.5 text-hud-text" />
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-prism-magenta transition-colors flex items-center gap-1.5" @mouseenter="setCursor('HOVER')" @mouseleave="resetCursor">
                <span>Twitter / X (@prism_dev)</span>
                <ArrowUpRight class="w-3.5 h-3.5 text-hud-text" />
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-prism-magenta transition-colors flex items-center gap-1.5" @mouseenter="setCursor('HOVER')" @mouseleave="resetCursor">
                <span>LinkedIn Atelier</span>
                <ArrowUpRight class="w-3.5 h-3.5 text-hud-text" />
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-prism-magenta transition-colors flex items-center gap-1.5" @mouseenter="setCursor('HOVER')" @mouseleave="resetCursor">
                <span>CodePen Creative Lab</span>
                <ArrowUpRight class="w-3.5 h-3.5 text-hud-text" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Credits & Copyright -->
      <div class="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-hud-text">
        <div>
          (C) 2026 PRISM CREATIVE ATELIER. ALL RIGHTS RESERVED.
        </div>
        <div class="flex items-center gap-4">
          <span>DESIGNED FOR MAXIMUM WOW</span>
          <span>-</span>
          <span class="text-prism-cyan">VUE 3 + THREE.JS + GSAP</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: 200%;
  animation: marquee 25s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>