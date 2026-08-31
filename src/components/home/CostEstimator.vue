<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { useLenis } from '../../composables/useLenis'
import { Calculator, ArrowRight, ShieldCheck, Sparkles, Check, Clock } from 'lucide-vue-next'
import UiBadge from '../ui/UiBadge.vue'
import UiButton from '../ui/UiButton.vue'

const emit = defineEmits<{
  (e: 'inject-scope', scope: { service: string; budget: string; summary: string }): void
}>()

const { setCursor, resetCursor } = useCursor()
const { playClick, playHover, playSwoosh } = useSound()
const { scrollTo } = useLenis()

// Archetypes
const archetypes = [
  { id: 'webgl-atelier', name: 'Flagship WebGL Atelier', basePrice: 7500, desc: 'Bespoke 3D brand launch site with GSAP kinetic choreography.' },
  { id: 'product-config', name: '3D Product Configurator', basePrice: 5500, desc: 'Real-time interactive 3D viewer with materials & lighting.' },
  { id: 'spatial-xr', name: 'Spatial XR & Immersive Web', basePrice: 9000, desc: 'Cutting-edge WebXR spatial computing experience.' },
  { id: 'motion-sprint', name: 'Motion Engineering Sprint', basePrice: 3500, desc: 'Front-end subcontracting for complex WebGL/GSAP modules.' }
]
const selectedArchetype = ref(archetypes[0])

// Technical Add-ons
const addons = ref([
  { id: 'glsl', name: 'Custom GLSL Shaders & GPGPU Particles', price: 2000, selected: true },
  { id: 'physics', name: 'Physics Engine & Dynamic Collisions', price: 1500, selected: false },
  { id: 'audio', name: 'Procedural Web Audio Synthesizer', price: 800, selected: true },
  { id: 'cms', name: 'Headless CMS & Global CDN Pipeline', price: 1800, selected: false }
])

// Timelines
const timelines = [
  { id: 'rush', name: 'Express Launch (2–3 Weeks)', multiplier: 1.25, badge: 'High Priority' },
  { id: 'standard', name: 'Standard Agile (4–6 Weeks)', multiplier: 1.0, badge: 'Recommended' },
  { id: 'enterprise', name: 'Quarterly Suite (8+ Weeks)', multiplier: 1.15, badge: 'Full Spectrum' }
]
const selectedTimeline = ref(timelines[1])

// Calculated Totals
const calculatedMin = computed(() => {
  const base = selectedArchetype.value.basePrice
  const addonsTotal = addons.value.filter(a => a.selected).reduce((sum, a) => sum + a.price, 0)
  const total = (base + addonsTotal) * selectedTimeline.value.multiplier
  return Math.round(total / 100) * 100
})

const calculatedMax = computed(() => {
  return Math.round((calculatedMin.value * 1.35) / 100) * 100
})

function toggleAddon(addon: typeof addons.value[0]) {
  playClick()
  addon.selected = !addon.selected
}

function selectArchetype(arch: typeof archetypes[0]) {
  playSwoosh()
  selectedArchetype.value = arch
}

function selectTimeline(tl: typeof timelines[0]) {
  playClick()
  selectedTimeline.value = tl
}

function handleInjectScope() {
  playSwoosh()
  const activeAddonsList = addons.value.filter(a => a.selected).map(a => a.name).join(', ')
  const budgetStr = `$${(calculatedMin.value / 1000).toFixed(0)}k – $${(calculatedMax.value / 1000).toFixed(0)}k`
  
  emit('inject-scope', {
    service: selectedArchetype.value.name,
    budget: '$10k – $20k',
    summary: `Scope: ${selectedArchetype.value.name} | Timeline: ${selectedTimeline.value.name} | Addons: ${activeAddonsList || 'None'} | Calculated Est: ${budgetStr}`
  })

  scrollTo('#contact')
}
</script>

<template>
  <section
    id="estimator"
    class="relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none text-left"
  >
    <!-- Section Header -->
    <div class="max-w-3xl mb-12 space-y-3">
      <div class="flex items-center gap-3">
        <UiBadge variant="cyan" dot>
          Transparent Pricing Engine
        </UiBadge>
        <span class="text-xs font-mono text-hud-text uppercase tracking-widest">
          Project Cost Estimator
        </span>
      </div>
      <h2 class="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
        CALCULATE YOUR ROI.
      </h2>
      <p class="text-sm sm:text-base font-body text-zinc-400">
        Tailor your technical scope and get an instantaneous investment estimate designed for high-ticket commercial impact.
      </p>
    </div>

    <!-- Main Estimator Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left Configurator Deck (8 cols) -->
      <div class="lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-3xl bg-void-950/85 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-8">
        
        <!-- 1. Select Archetype -->
        <div class="space-y-4">
          <label class="block text-xs font-mono uppercase tracking-widest text-zinc-300">
            1. Select Deliverable Archetype
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              v-for="arch in archetypes"
              :key="arch.id"
              type="button"
              class="p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer space-y-1.5"
              :class="[
                selectedArchetype.id === arch.id
                  ? 'bg-void-900 border-prism-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)] ring-1 ring-prism-cyan'
                  : 'bg-void-950/60 border-white/5 hover:border-white/20 text-zinc-400 hover:text-white'
              ]"
              @click="selectArchetype(arch)"
              @mouseenter="setCursor('HOVER'); playHover()"
              @mouseleave="resetCursor"
            >
              <div class="flex items-center justify-between">
                <span class="font-display font-bold text-sm text-white">{{ arch.name }}</span>
                <span class="text-xs font-mono text-prism-cyan font-bold">${{ arch.basePrice.toLocaleString() }}+</span>
              </div>
              <p class="text-[11px] font-body text-zinc-400 leading-relaxed">{{ arch.desc }}</p>
            </button>
          </div>
        </div>

        <!-- 2. Technical Addons -->
        <div class="space-y-4 pt-4 border-t border-white/5">
          <label class="block text-xs font-mono uppercase tracking-widest text-zinc-300">
            2. Technical Depth & Visual Capabilities
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              v-for="addon in addons"
              :key="addon.id"
              type="button"
              class="p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer"
              :class="[
                addon.selected
                  ? 'bg-void-900 border-prism-magenta/80 text-white shadow-[0_0_16px_rgba(255,46,147,0.15)]'
                  : 'bg-void-950/60 border-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
              ]"
              @click="toggleAddon(addon)"
              @mouseenter="setCursor('HOVER')"
              @mouseleave="resetCursor"
            >
              <div class="flex items-center gap-2.5">
                <div
                  class="w-5 h-5 rounded-md border flex items-center justify-center transition-colors"
                  :class="addon.selected ? 'bg-prism-magenta border-prism-magenta text-black' : 'border-white/20'"
                >
                  <Check v-if="addon.selected" class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span class="text-xs font-body font-medium">{{ addon.name }}</span>
              </div>
              <span class="text-xs font-mono text-zinc-400 font-bold whitespace-nowrap">+${{ addon.price }}</span>
            </button>
          </div>
        </div>

        <!-- 3. Timeline Speed -->
        <div class="space-y-4 pt-4 border-t border-white/5">
          <label class="block text-xs font-mono uppercase tracking-widest text-zinc-300">
            3. Production Velocity & Timeline
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              v-for="tl in timelines"
              :key="tl.id"
              type="button"
              class="p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer space-y-1"
              :class="[
                selectedTimeline.id === tl.id
                  ? 'bg-void-900 border-prism-gold shadow-[0_0_16px_rgba(255,209,102,0.15)] ring-1 ring-prism-gold'
                  : 'bg-void-950/60 border-white/5 hover:border-white/20 text-zinc-400 hover:text-white'
              ]"
              @click="selectTimeline(tl)"
              @mouseenter="setCursor('HOVER')"
              @mouseleave="resetCursor"
            >
              <span class="block text-xs font-display font-bold text-white">{{ tl.name }}</span>
              <span class="block text-[10px] font-mono text-prism-gold">{{ tl.badge }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Summary & Action Card (5 cols sticky) -->
      <div class="lg:col-span-5 sticky top-28 p-6 sm:p-8 rounded-3xl bg-void-950/90 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-hud-text">
            <Calculator class="w-4 h-4 text-prism-cyan" />
            <span>Investment Estimate</span>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-400 border border-emerald-400/30">
            High-Ticket ROI
          </span>
        </div>

        <!-- Dynamic Price Display -->
        <div class="space-y-1">
          <span class="text-xs font-mono uppercase tracking-wider text-hud-text">ESTIMATED BALLPARK</span>
          <div class="text-3xl sm:text-4xl xl:text-5xl font-display font-black text-white tracking-tight">
            ${{ calculatedMin.toLocaleString() }} <span class="text-xl sm:text-2xl font-body font-normal text-zinc-500">–</span> ${{ calculatedMax.toLocaleString() }}
          </div>
          <p class="text-xs font-mono text-zinc-400 pt-1">
            USD // Fixed-price milestone billing with zero hidden costs.
          </p>
        </div>

        <!-- Scope Highlights Checklist -->
        <div class="space-y-2.5 py-4 border-y border-white/5 text-xs font-mono text-zinc-300">
          <div class="flex items-center gap-2">
            <Check class="w-4 h-4 text-prism-cyan flex-shrink-0" />
            <span>120 FPS WebGL Performance Guarantee</span>
          </div>
          <div class="flex items-center gap-2">
            <Check class="w-4 h-4 text-prism-cyan flex-shrink-0" />
            <span>100% Full IP & Source Code Ownership</span>
          </div>
          <div class="flex items-center gap-2">
            <Check class="w-4 h-4 text-prism-cyan flex-shrink-0" />
            <span>Awwwards & FWA Quality Benchmark</span>
          </div>
          <div class="flex items-center gap-2">
            <Clock class="w-4 h-4 text-prism-gold flex-shrink-0" />
            <span>Estimated Delivery: {{ selectedTimeline.name.split(' ')[0] }} ({{ selectedTimeline.name.split('(')[1].replace(')', '') }})</span>
          </div>
        </div>

        <!-- Action Button -->
        <UiButton
          variant="primary"
          size="lg"
          class="w-full justify-center"
          @click="handleInjectScope"
        >
          <span>Inject Scope Into Brief</span>
          <ArrowRight class="w-4 h-4" />
        </UiButton>
        <p class="text-[11px] font-mono text-zinc-500 text-center">
          Transfers configured scope directly to the project submission form.
        </p>
      </div>

    </div>
  </section>
</template>