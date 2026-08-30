<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projectsData } from '../../data/projects'
import type { ProjectCase } from '../../types'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { ArrowUpRight, Award } from 'lucide-vue-next'
import UiBadge from '../ui/UiBadge.vue'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits<{
  (e: 'select-project', project: ProjectCase): void
}>()

const { setCursor, resetCursor } = useCursor()
const { playHover, playClick } = useSound()

const sectionRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
let scrollTriggerInstance: ScrollTrigger | null = null

function setupScroll() {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
    scrollTriggerInstance = null
  }

  if (window.innerWidth >= 768 && trackRef.value && sectionRef.value) {
    const scrollWidth = trackRef.value.scrollWidth - window.innerWidth + 120

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: sectionRef.value,
      start: 'top top',
      end: () => `+=${scrollWidth}`,
      pin: true,
      scrub: 1,
      animation: gsap.to(trackRef.value, {
        x: () => -scrollWidth,
        ease: 'none'
      }),
      invalidateOnRefresh: true
    })
  } else if (trackRef.value) {
    gsap.set(trackRef.value, { clearProps: 'x,transform' })
  }
}

onMounted(() => {
  setupScroll()
  window.addEventListener('resize', setupScroll)
})

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }
  window.removeEventListener('resize', setupScroll)
})

function onCardClick(project: ProjectCase) {
  playClick()
  emit('select-project', project)
}
</script>

<template>
  <section
    id="works"
    ref="sectionRef"
    class="relative min-h-screen py-24 px-4 md:px-10 z-20 select-none overflow-hidden"
  >
    <!-- Section Header HUD -->
    <div class="max-w-7xl mx-auto flex flex-wrap items-end justify-between gap-6 mb-12">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <UiBadge variant="cyan" dot>
            Selected Works // 02
          </UiBadge>
          <span class="text-xs font-mono text-hud-text uppercase tracking-wider">
            Curated WebGL Case Studies
          </span>
        </div>
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          ARCHITECTED TO WIN.
        </h2>
      </div>

      <div class="hidden md:flex items-center gap-4 text-xs font-mono text-hud-text">
        <span class="w-2 h-2 rounded-full bg-prism-cyan animate-ping" />
        <span>SCROLL HORIZONTALLY TO EXPLORE CASES</span>
      </div>
    </div>

    <!-- Horizontal Cards Track -->
    <div
      ref="trackRef"
      class="flex flex-col md:flex-row gap-8 md:gap-10 pb-8 will-change-transform"
    >
      <div
        v-for="(project, index) in projectsData"
        :key="project.id"
        class="w-full md:w-[480px] lg:w-[540px] flex-shrink-0 group cursor-pointer"
        @click="onCardClick(project)"
        @mouseenter="setCursor('VIEW_CASE', 'VIEW CASE'); playHover()"
        @mouseleave="resetCursor"
      >
        <!-- Project Glass Card Container -->
        <div
          class="relative rounded-3xl bg-void-950/80 border border-white/10 overflow-hidden backdrop-blur-2xl transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          :style="{
            borderColor: `${project.accentColor}22`
          }"
        >
          <!-- Card Thumbnail with Zoom on Hover -->
          <div class="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
            <img
              :src="project.thumbnail"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/30 to-transparent" />

            <!-- Category & Index Badges -->
            <div class="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10">
              <UiBadge variant="glass">
                {{ project.category }}
              </UiBadge>
              <span class="w-9 h-9 rounded-full bg-void-900/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-xs font-mono font-bold text-white group-hover:bg-prism-cyan group-hover:text-black transition-colors">
                <ArrowUpRight class="w-4 h-4" />
              </span>
            </div>

            <!-- Awards Tag in Image -->
            <div v-if="project.awards[0]" class="absolute bottom-4 left-4 sm:left-5 z-10 flex items-center gap-1.5 text-[11px] font-mono text-prism-gold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-prism-gold/30">
              <Award class="w-3.5 h-3.5" />
              <span>{{ project.awards[0] }}</span>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 sm:p-8 space-y-4 text-left">
            <div class="flex items-baseline justify-between gap-2">
              <h3 class="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight group-hover:text-prism-cyan transition-colors">
                {{ project.title }}
              </h3>
              <span class="text-xs font-mono font-bold text-hud-text">
                // {{ project.number }}
              </span>
            </div>

            <p class="text-sm font-body text-zinc-300 line-clamp-2">
              {{ project.subtitle }}
            </p>

            <!-- Metrics Bar -->
            <div class="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
              <div
                v-for="(metric, mIdx) in project.metrics.slice(0, 2)"
                :key="mIdx"
              >
                <span class="block text-[10px] font-mono uppercase text-hud-text">{{ metric.label }}</span>
                <span class="text-lg font-display font-bold text-white" :style="{ color: project.accentColor }">
                  {{ metric.value }}
                </span>
              </div>
            </div>

            <!-- Tech Tags Pills -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="tag in project.tags.slice(0, 3)"
                :key="tag"
                class="px-2.5 py-0.5 text-[10px] font-mono text-hud-text rounded bg-white/5 border border-white/5"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>