<script setup lang="ts">
import { ref } from 'vue'
import { servicesData } from '../../data/services'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { Sparkles, Activity, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-vue-next'
import UiBadge from '../ui/UiBadge.vue'

const { setCursor, resetCursor } = useCursor()
const { playHover } = useSound()

const iconMap: Record<string, any> = {
  Sparkles,
  Activity,
  Layers,
  Cpu
}

function onCardMouseMove(e: MouseEvent, target: HTMLElement) {
  const rect = target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  target.style.setProperty('--mouse-x', `${x}px`)
  target.style.setProperty('--mouse-y', `${y}px`)
}
</script>

<template>
  <section
    id="services"
    class="relative py-28 px-4 md:px-10 max-w-7xl mx-auto z-20 select-none"
  >
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <UiBadge variant="cyan" dot>
            Capabilities // 04
          </UiBadge>
          <span class="text-xs font-mono text-hud-text uppercase tracking-wider">
            Full-Spectrum Creative Engineering
          </span>
        </div>
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          CORE CAPABILITIES.
        </h2>
      </div>

      <p class="text-sm font-body text-zinc-400 max-w-md">
        We bridge the gap between avant-garde visual artistry and bulletproof software engineering.
      </p>
    </div>

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(service, index) in servicesData"
        :key="service.id"
        class="relative p-8 md:p-10 rounded-3xl bg-void-950/70 border border-white/10 backdrop-blur-2xl overflow-hidden group hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
        @mousemove="(e) => onCardMouseMove(e, e.currentTarget as HTMLElement)"
        @mouseenter="setCursor('HOVER'); playHover()"
        @mouseleave="resetCursor"
      >
        <!-- Radial Spotlight Glow Follower -->
        <div
          class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          :style="{
            background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 240, 255, 0.08), transparent 40%)`
          }"
        />

        <div class="relative z-10 space-y-6">
          <div class="flex items-center justify-between">
            <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-prism-cyan group-hover:scale-110 transition-transform">
              <component :is="iconMap[service.icon]" class="w-6 h-6" />
            </div>
            <UiBadge variant="glass">
              {{ service.badge }}
            </UiBadge>
          </div>

          <div>
            <div class="flex items-baseline gap-2 mb-2">
              <h3 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-prism-cyan transition-colors">
                {{ service.title }}
              </h3>
              <span class="text-xs font-mono text-hud-text font-bold">// {{ service.number }}</span>
            </div>
            <p class="text-sm font-display font-medium text-prism-gold mb-3">
              {{ service.tagline }}
            </p>
            <p class="text-sm font-body text-zinc-300 leading-relaxed">
              {{ service.description }}
            </p>
          </div>

          <!-- Feature Bullets -->
          <div class="space-y-2 pt-4 border-t border-white/5">
            <div
              v-for="(feature, fIdx) in service.features"
              :key="fIdx"
              class="flex items-center gap-2.5 text-xs font-mono text-zinc-300"
            >
              <CheckCircle2 class="w-3.5 h-3.5 text-prism-cyan flex-shrink-0" />
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>

        <div class="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-hud-text group-hover:text-white transition-colors">
          <span>DEPLOYABLE WITHIN 2-4 WEEKS</span>
          <ArrowRight class="w-4 h-4 text-prism-cyan group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </section>
</template>
