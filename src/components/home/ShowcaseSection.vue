<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projectsData } from '../../data/projects'
import type { ProjectCase } from '../../types'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { ArrowUpRight, Award, Sparkles } from 'lucide-vue-next'
import UiBadge from '../ui/UiBadge.vue'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits<{
  (e: 'select-project', project: ProjectCase): void
}>()

const { setCursor, resetCursor } = useCursor()
const { playHover, playClick, playSwoosh } = useSound()

const sectionRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
let scrollTriggerInstance: ScrollTrigger | null = null

// Category Filter State
const selectedCategory = ref<string>('ALL')

const categories = [
  { id: 'ALL', label: 'All Cases', count: projectsData.length },
  { id: 'WEBGL 3D', label: 'WebGL 3D', count: projectsData.filter(p => p.category.includes('3D') || p.category.includes('WebGL')).length },
  { id: 'SPATIAL XR', label: 'Spatial XR', count: projectsData.filter(p => p.category.includes('XR') || p.category.includes('Spatial')).length },
  { id: 'AI PRODUCT', label: 'GenAI Suites', count: projectsData.filter(p => p.category.includes('AI')).length },
  { id: 'LUXURY MOTION', label: 'Luxury & Auto', count: projectsData.filter(p => p.category.includes('Luxury') || p.category.includes('Motion')).length }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'ALL') return projectsData
  if (selectedCategory.value === 'WEBGL 3D') return projectsData.filter(p => p.category.includes('3D') || p.category.includes('WebGL'))
  if (selectedCategory.value === 'SPATIAL XR') return projectsData.filter(p => p.category.includes('XR') || p.category.includes('Spatial'))
  if (selectedCategory.value === 'AI PRODUCT') return projectsData.filter(p => p.category.includes('AI'))
  if (selectedCategory.value === 'LUXURY MOTION') return projectsData.filter(p => p.category.includes('Luxury') || p.category.includes('Motion'))
  return projectsData
})

function setCategory(catId: string) {
  playClick()
  selectedCategory.value = catId
  nextTick(() => {
    animateFilteredCards()
    setupScroll()
  })
}

function animateFilteredCards() {
  if (!trackRef.value) return
  const cards = trackRef.value.querySelectorAll('.project-card')
  gsap.fromTo(
    cards,
    { opacity: 0, y: 25, scale: 0.96 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out' }
  )
}

function setupScroll() {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
    scrollTriggerInstance = null
  }

  if (window.innerWidth >= 768 && trackRef.value && sectionRef.value && filteredProjects.value.length > 1) {
    const scrollWidth = trackRef.value.scrollWidth - window.innerWidth + 140

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: sectionRef.value,
      start: 'top top',
      end: () => `+=${Math.max(scrollWidth, 600)}`,
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

// 3D Parallax & Liquid Chromatic Tilt on Mouse Move over Card
function onCardMouseMove(e: MouseEvent, cardEl: HTMLElement) {
  const rect = cardEl.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -8
  const rotateY = ((x - centerX) / centerX) * 8

  const img = cardEl.querySelector('.card-image') as HTMLElement
  const ripple = cardEl.querySelector('.chromatic-ripple') as HTMLElement

  if (img) {
    gsap.to(img, {
      rotateX,
      rotateY,
      scale: 1.06,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800
    })
  }

  if (ripple) {
    gsap.to(ripple, {
      x: x - centerX,
      y: y - centerY,
      opacity: 0.6,
      duration: 0.3
    })
  }
}

function onCardMouseLeave(cardEl: HTMLElement) {
  const img = cardEl.querySelector('.card-image') as HTMLElement
  const ripple = cardEl.querySelector('.chromatic-ripple') as HTMLElement

  if (img) {
    gsap.to(img, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out'
    })
  }

  if (ripple) {
    gsap.to(ripple, {
      opacity: 0,
      duration: 0.5
    })
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
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
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

    <!-- Category Filter Tabs Bar -->
    <div class="max-w-7xl mx-auto mb-10 flex flex-wrap items-center gap-2.5">
      <button
        v-for="cat in categories"
        :key="cat.id"
        class="px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 cursor-pointer border"
        :class="[
          selectedCategory === cat.id
            ? 'bg-void-950/90 border-prism-cyan text-prism-cyan shadow-[0_0_16px_rgba(0,240,255,0.2)] font-bold'
            : 'bg-void-950/60 border-white/10 text-hud-text hover:text-white hover:border-white/25'
        ]"
        @click="setCategory(cat.id)"
        @mouseenter="setCursor('HOVER'); playHover()"
        @mouseleave="resetCursor"
      >
        <span>{{ cat.label }}</span>
        <span
          class="px-1.5 py-0.2 rounded-full text-[10px]"
          :class="selectedCategory === cat.id ? 'bg-prism-cyan/20 text-prism-cyan' : 'bg-white/5 text-zinc-500'"
        >
          {{ cat.count }}
        </span>
      </button>
    </div>

    <!-- Horizontal Cards Track -->
    <div
      ref="trackRef"
      class="flex flex-col md:flex-row gap-8 md:gap-10 pb-8 will-change-transform"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        :ref="(el) => {}"
        class="project-card w-full md:w-[480px] lg:w-[540px] flex-shrink-0 group cursor-pointer"
        @click="onCardClick(project)"
        @mousemove="onCardMouseMove($event, $el as HTMLElement)"
        @mouseleave="onCardMouseLeave($el as HTMLElement); resetCursor()"
        @mouseenter="setCursor('VIEW_CASE', 'VIEW CASE'); playHover()"
      >
        <!-- Project Glass Card Container -->
        <div
          class="relative rounded-3xl bg-void-950/85 border border-white/10 overflow-hidden backdrop-blur-2xl transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
          :style="{
            borderColor: `${project.accentColor}22`
          }"
        >
          <!-- Card Thumbnail with Liquid Chromatic & Parallax Distortion -->
          <div class="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden preserve-3d">
            <img
              :src="project.thumbnail"
              :alt="project.title"
              class="card-image w-full h-full object-cover transition-transform duration-500 ease-out filter brightness-95"
            />
            
            <!-- Liquid Chromatic Sheen Overlay on Hover -->
            <div class="chromatic-ripple absolute inset-0 opacity-0 pointer-events-none mix-blend-screen bg-gradient-to-tr from-prism-cyan/30 via-prism-magenta/30 to-prism-gold/20 filter blur-xl transition-opacity duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/30 to-transparent" />

            <!-- Category & Action Badges (Hyper High Contrast) -->
            <div class="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10">
              <UiBadge variant="cyan" dot>
                {{ project.category }}
              </UiBadge>
              <span class="w-9 h-9 rounded-full bg-void-950/90 border border-white/20 backdrop-blur-md flex items-center justify-center text-xs font-mono font-bold text-white group-hover:bg-prism-cyan group-hover:text-black transition-colors shadow-lg">
                <ArrowUpRight class="w-4 h-4" />
              </span>
            </div>

            <!-- Awards Tag in Image -->
            <div v-if="project.awards[0]" class="absolute bottom-4 left-4 sm:left-5 z-10 flex items-center gap-1.5 text-[11px] font-mono text-prism-gold bg-void-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-prism-gold/40 shadow-lg">
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
              {{ project.description }}
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

<style scoped>
.preserve-3d {
  transform-style: preserve-3d;
}
</style>