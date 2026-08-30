<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { useLenis } from '../../composables/useLenis'
import { Volume2, VolumeX, Menu, X } from 'lucide-vue-next'
import UiButton from '../ui/UiButton.vue'

const { setCursor, resetCursor } = useCursor()
const { isMuted, toggleMute, playHover, playClick } = useSound()
const { scrollTo } = useLenis()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const timeNY = ref('')
const timeLON = ref('')
const timeTYO = ref('')

function updateClocks() {
  const now = new Date()
  timeNY.value = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false })
  timeLON.value = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false })
  timeTYO.value = now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false })
}

let clockInterval: number

onMounted(() => {
  updateClocks()
  clockInterval = window.setInterval(updateClocks, 1000)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 40
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  clearInterval(clockInterval)
})

function navigateTo(target: string) {
  playClick()
  isMobileMenuOpen.value = false
  scrollTo(target)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-5 transition-all duration-300 pointer-events-none"
    :class="[isScrolled ? 'backdrop-blur-md bg-void-950/80 border-b border-white/5 py-3.5' : 'bg-transparent']"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
      <!-- Left: Brand Logo -->
      <a
        href="#hero"
        class="flex items-center gap-3 group cursor-pointer"
        @click.prevent="navigateTo('#hero')"
        @mouseenter="setCursor('HOVER'); playHover()"
        @mouseleave="resetCursor"
      >
        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold flex items-center justify-center text-black font-mono font-bold text-xs rotate-45 group-hover:rotate-180 transition-transform duration-500 shadow-[0_0_16px_rgba(0,240,255,0.4)]">
          <span class="-rotate-45 group-hover:-rotate-180 transition-transform duration-500 font-extrabold text-white">P</span>
        </div>
        <div class="flex flex-col text-left">
          <span class="font-display font-extrabold text-sm sm:text-base tracking-widest text-white leading-none">
            PRISM
          </span>
          <span class="font-mono text-[9px] text-hud-text tracking-widest uppercase">
            Creative Atelier
          </span>
        </div>
      </a>

      <!-- World Clocks (Desktop Only) -->
      <div class="hidden xl:flex items-center gap-4 px-4 py-2 rounded-full bg-void-900/60 border border-white/5 text-[11px] font-mono text-hud-text">
        <span class="flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          NYC {{ timeNY }}
        </span>
        <span>•</span>
        <span class="flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-prism-cyan" />
          LON {{ timeLON }}
        </span>
        <span>•</span>
        <span class="flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-prism-gold" />
          TYO {{ timeTYO }}
        </span>
      </div>

      <!-- Navigation Links (Desktop) -->
      <nav class="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-300">
        <a
          href="#works"
          class="hover:text-prism-cyan transition-colors"
          @click.prevent="navigateTo('#works')"
          @mouseenter="setCursor('HOVER'); playHover()"
          @mouseleave="resetCursor"
        >
          Selected Works
        </a>
        <a
          href="#manifesto"
          class="hover:text-prism-magenta transition-colors"
          @click.prevent="navigateTo('#manifesto')"
          @mouseenter="setCursor('HOVER'); playHover()"
          @mouseleave="resetCursor"
        >
          Manifesto
        </a>
        <a
          href="#shader-lab"
          class="hover:text-prism-gold transition-colors flex items-center gap-1.5"
          @click.prevent="navigateTo('#shader-lab')"
          @mouseenter="setCursor('TWEAK'); playHover()"
          @mouseleave="resetCursor"
        >
          <span class="w-2 h-2 rounded-full bg-prism-gold animate-ping" />
          3D Lab
        </a>
        <a
          href="#services"
          class="hover:text-prism-cyan transition-colors"
          @click.prevent="navigateTo('#services')"
          @mouseenter="setCursor('HOVER'); playHover()"
          @mouseleave="resetCursor"
        >
          Capabilities
        </a>
      </nav>

      <!-- Right Action Controls -->
      <div class="flex items-center gap-3">
        <!-- Sound Synthesizer Toggle -->
        <button
          class="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-void-900/80 border border-white/10 hover:border-white/20 text-[11px] font-mono text-hud-text hover:text-white transition-all cursor-pointer"
          :class="{ 'border-prism-cyan/40 text-prism-cyan': !isMuted }"
          @click="toggleMute(); playClick()"
          @mouseenter="setCursor('HOVER')"
          @mouseleave="resetCursor"
        >
          <Volume2 v-if="!isMuted" class="w-3.5 h-3.5 text-prism-cyan animate-pulse" />
          <VolumeX v-else class="w-3.5 h-3.5 text-zinc-500" />
          <span class="uppercase tracking-wider">{{ isMuted ? 'Sound Off' : 'Sound On' }}</span>
        </button>

        <!-- CTA Button -->
        <UiButton
          variant="secondary"
          size="sm"
          class="hidden sm:inline-flex"
          @click="navigateTo('#contact')"
        >
          Let's Talk
        </UiButton>

        <!-- Mobile Menu Toggle Button -->
        <button
          class="md:hidden w-10 h-10 rounded-full bg-void-900 border border-white/10 text-white flex items-center justify-center cursor-pointer"
          @click="isMobileMenuOpen = !isMobileMenuOpen; playClick()"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-3 p-6 rounded-3xl bg-void-950/95 border border-white/10 backdrop-blur-2xl pointer-events-auto space-y-5 shadow-2xl"
      >
        <nav class="flex flex-col gap-4 text-base font-display font-bold uppercase tracking-wider text-left text-zinc-200">
          <a href="#works" class="py-2 border-b border-white/5" @click.prevent="navigateTo('#works')">Selected Works</a>
          <a href="#manifesto" class="py-2 border-b border-white/5" @click.prevent="navigateTo('#manifesto')">Manifesto</a>
          <a href="#shader-lab" class="py-2 border-b border-white/5 text-prism-gold" @click.prevent="navigateTo('#shader-lab')">3D Crystal Lab</a>
          <a href="#services" class="py-2 border-b border-white/5" @click.prevent="navigateTo('#services')">Capabilities</a>
          <a href="#contact" class="py-2 text-prism-cyan" @click.prevent="navigateTo('#contact')">Initiate Collaboration</a>
        </nav>

        <div class="pt-2 flex items-center justify-between border-t border-white/10">
          <button
            class="flex items-center gap-2 text-xs font-mono text-zinc-400"
            @click="toggleMute(); playClick()"
          >
            <Volume2 v-if="!isMuted" class="w-4 h-4 text-prism-cyan" />
            <VolumeX v-else class="w-4 h-4" />
            <span>{{ isMuted ? 'Enable Audio' : 'Mute Audio' }}</span>
          </button>
          <span class="text-xs font-mono text-zinc-600">NYC {{ timeNY }}</span>
        </div>
      </div>
    </Transition>
  </header>
</template>