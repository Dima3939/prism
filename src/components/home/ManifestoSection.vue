<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import UiBadge from '../ui/UiBadge.vue'
import { Award, Zap, ShieldCheck, Flame } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const manifestoWords = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!manifestoWords.value) return

  const words = manifestoWords.value.querySelectorAll('.manifesto-word')

  gsap.fromTo(
    words,
    { opacity: 0.15, y: 15 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 75%',
        end: 'bottom 60%',
        scrub: 0.8
      }
    }
  )
})

const stats = [
  { value: '120 FPS', label: 'Ultra-Fluid Frame Rate', icon: Zap, color: 'text-prism-cyan' },
  { value: '14+', label: 'Awwwards & FWA Honors', icon: Award, color: 'text-prism-gold' },
  { value: '$50M+', label: 'Client Value Generated', icon: Flame, color: 'text-prism-magenta' },
  { value: '100%', label: 'Bespoke GLSL Codebase', icon: ShieldCheck, color: 'text-emerald-400' }
]

const manifestoText = `We architect digital masterworks at the exact intersection of high-octane WebGL 3D graphics, fluid physics choreography, and conversion psychology. In a web flooded with generic templates, PRISM engineers bespoke interactive worlds that command premium valuations and captivate global audiences.`
</script>

<template>
  <section
    id="manifesto"
    ref="sectionRef"
    class="relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none"
  >
    <!-- Section Badge & Subhead -->
    <div class="flex items-center gap-3 mb-8">
      <UiBadge variant="magenta" dot>
        Studio Manifesto // 01
      </UiBadge>
      <span class="text-xs font-mono text-hud-text uppercase tracking-widest">
        Why Creative Development Dominates
      </span>
    </div>

    <!-- Scroll-Driven Word-by-Word Reveal Text -->
    <div ref="manifestoWords" class="mb-16">
      <p class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-white flex flex-wrap gap-x-3 gap-y-2">
        <span
          v-for="(word, index) in manifestoText.split(' ')"
          :key="index"
          class="manifesto-word inline-block transition-colors duration-200"
        >
          {{ word }}
        </span>
      </p>
    </div>

    <!-- Impact & Credibility Metrics Grid (Fixed Padding & Sizing) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="p-6 sm:p-7 rounded-3xl bg-void-950/80 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group overflow-hidden"
      >
        <div class="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <component :is="stat.icon" class="w-5 h-5" :class="stat.color" />
        </div>
        <p class="text-3xl sm:text-4xl lg:text-[2.2rem] xl:text-4xl font-condensed font-black text-white tracking-normal mb-1.5 whitespace-nowrap">
          {{ stat.value }}
        </p>
        <p class="text-[11px] font-mono uppercase tracking-wider text-hud-text">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>