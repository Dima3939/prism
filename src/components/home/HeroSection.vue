<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { useLenis } from '../../composables/useLenis'
import { ArrowDown } from 'lucide-vue-next'
import UiButton from '../ui/UiButton.vue'

const { setCursor, resetCursor } = useCursor()
const { playHover, playClick } = useSound()
const { scrollTo } = useLenis()

const bottomHudRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })

  tl.from('.hero-line-1, .hero-line-2, .hero-line-3', {
    y: 50,
    opacity: 0,
    rotateX: -10,
    stagger: 0.1,
    delay: 0.1
  })
  .from(bottomHudRef.value, {
    opacity: 0,
    y: 25,
    duration: 0.8
  }, '-=0.5')
})

function onExploreClick() {
  playClick()
  scrollTo('#works')
}
</script>

<template>
  <section
    id="hero"
    class="relative h-screen w-full flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 select-none overflow-hidden"
  >
    <!-- Top Spacing -->
    <div class="w-full flex items-center justify-between z-10 pointer-events-none opacity-0">
      <span>TOP SPACING</span>
    </div>

    <!-- Balanced Modern Typography (Plus Jakarta Sans - Perfect Proportions) -->
    <div class="backdrop-layer w-full max-w-6xl mx-auto text-center my-auto pointer-events-none flex flex-col justify-center items-center select-none space-y-1 sm:space-y-2 px-4">
      <!-- Line 1: PRISM CREATIVE STUDIO -->
      <div class="w-full overflow-hidden flex justify-center">
        <h1 class="hero-line-1 whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-[4.0vw] font-display font-extrabold uppercase tracking-tight leading-tight text-[#F4F4F0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          PRISM CREATIVE STUDIO
        </h1>
      </div>

      <!-- Line 2: DIGITAL EXPERIENCE -->
      <div class="w-full overflow-hidden flex justify-center">
        <h2 class="hero-line-2 whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-[4.4vw] font-display font-extrabold uppercase tracking-tight leading-tight text-[#E8E8E3] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          DIGITAL EXPERIENCE
        </h2>
      </div>

      <!-- Line 3: & WEBGL ATELIER -->
      <div class="w-full overflow-hidden flex justify-center">
        <p class="hero-line-3 whitespace-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-[3.7vw] font-display font-extrabold uppercase tracking-tight leading-tight text-[#E8E8E3] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          & WEBGL ATELIER
        </p>
      </div>
    </div>

    <!-- Bottom Floating HUD Card (Foreground z-30) -->
    <div
      ref="bottomHudRef"
      class="max-w-7xl mx-auto w-full z-30 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 pointer-events-auto"
    >
      <!-- Glassmorphic HUD Deck -->
      <div class="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl bg-void-950/85 border border-white/15 backdrop-blur-2xl shadow-2xl">
        <!-- Thumbnail Indicator -->
        <div class="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-void-900 border border-white/15 overflow-hidden flex items-center justify-center relative flex-shrink-0 shadow-lg">
          <div class="w-5 h-5 rounded bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold rotate-45 animate-spin-slow opacity-95 shadow-[0_0_14px_#00F0FF]" />
        </div>

        <!-- WORKS block -->
        <div class="text-left space-y-0.5">
          <div class="flex items-center gap-2">
            <span class="text-xs font-display font-bold tracking-wider text-white uppercase">WORKS</span>
            <span class="text-[10px] font-mono text-prism-cyan font-bold">70%</span>
          </div>
          <p class="text-[10px] sm:text-[11px] font-mono text-zinc-400">
            Coordinates: 40.7128 N, 74.0060 W | New York
          </p>
        </div>

        <div class="hidden md:block h-8 w-px bg-white/15 mx-1" />

        <!-- SERVICES block -->
        <div class="hidden md:block text-left space-y-0.5">
          <span class="text-xs font-display font-bold tracking-wider text-white uppercase">SERVICES</span>
          <p class="text-[11px] font-mono text-zinc-400">
            Coordinates: 51.5074 N, 0.1278 W | London
          </p>
        </div>
      </div>

      <!-- Right Action CTA & Locations -->
      <div class="flex items-center gap-5">
        <UiButton
          variant="primary"
          size="md"
          @click="onExploreClick"
        >
          <span>Explore Projects</span>
          <ArrowDown class="w-3.5 h-3.5 animate-bounce" />
        </UiButton>
        <span class="hidden lg:inline text-xs font-mono text-hud-text tracking-widest uppercase">
          Paris | LA
        </span>
      </div>
    </div>
  </section>
</template>