<script setup lang="ts">
import { reactive } from 'vue'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import type { PrismLabConfig, PrismShape } from '../../webgl/scenes/PrismScene'
import { RotateCcw, Eye, Sparkles, Box } from 'lucide-vue-next'
import UiBadge from '../ui/UiBadge.vue'
import UiSlider from '../ui/UiSlider.vue'

const emit = defineEmits<{
  (e: 'update-config', config: Partial<PrismLabConfig>): void
}>()

const { setCursor, resetCursor } = useCursor()
const { playClick, playHover, playSwoosh } = useSound()

const state = reactive<PrismLabConfig>({
  shape: 'icosahedron',
  dispersion: 1.0,
  roughness: 0.08,
  transmission: 0.82,
  colorTheme: 0,
  wireframe: true,
  rotationSpeed: 0.65
})

const defaultState: PrismLabConfig = {
  shape: 'icosahedron',
  dispersion: 1.0,
  roughness: 0.08,
  transmission: 0.82,
  colorTheme: 0,
  wireframe: true,
  rotationSpeed: 0.65
}

const shapes: { id: PrismShape; name: string; icon: string }[] = [
  { id: 'icosahedron', name: 'Diamond Icosahedron', icon: '💎' },
  { id: 'torusKnot', name: 'Quantum Torus Knot', icon: '🌀' },
  { id: 'octahedron', name: 'Cyber Octahedron', icon: '🔷' },
  { id: 'dodecahedron', name: 'Prismatic Dodecahedron', icon: '⭐' }
]

const themes = [
  { id: 0, name: 'Prism Rainbow & Cyan', color: 'from-prism-cyan to-prism-magenta', dots: ['#00F0FF', '#FF2E93', '#FFD166'], desc: 'Full visible light spectrum' },
  { id: 1, name: 'Cyber Magenta & Violet', color: 'from-prism-magenta to-prism-violet', dots: ['#FF2E93', '#7B2CBF', '#FF80BF'], desc: 'Deep ultraviolet laser caustics' },
  { id: 2, name: 'Quantum Gold & Amber', color: 'from-prism-gold to-amber-600', dots: ['#FFD166', '#FF9F1C', '#E71D36'], desc: 'Warm radiant luxury photons' }
]

function onSliderChange(key: keyof PrismLabConfig, val: number) {
  state[key] = val as never
  emit('update-config', { [key]: val })
}

function selectShape(shapeId: PrismShape) {
  playSwoosh()
  state.shape = shapeId
  emit('update-config', { shape: shapeId })
}

function selectTheme(themeId: number) {
  playClick()
  state.colorTheme = themeId
  emit('update-config', { colorTheme: themeId })
}

function toggleWireframe() {
  playClick()
  state.wireframe = !state.wireframe
  emit('update-config', { wireframe: state.wireframe })
}

function resetDefaults() {
  playClick()
  Object.assign(state, defaultState)
  emit('update-config', { ...defaultState })
}
</script>

<template>
  <section
    id="shader-lab"
    class="relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none"
  >
    <!-- Section Header -->
    <div class="flex flex-wrap items-end justify-between gap-6 mb-12">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <UiBadge variant="gold" dot>
            Interactive 3D Lab // 03
          </UiBadge>
          <span class="text-xs font-mono text-hud-text uppercase tracking-wider">
            Real-Time GLSL Shaders & Physics Sandbox
          </span>
        </div>
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          TWEAK THE CRYSTAL.
        </h2>
      </div>

      <button
        class="flex items-center gap-2 px-4 py-2 rounded-full bg-void-950/80 border border-white/10 hover:border-white/30 text-xs font-mono text-hud-text hover:text-white transition-all cursor-pointer shadow-lg"
        @click="resetDefaults"
        @mouseenter="setCursor('HOVER')"
        @mouseleave="resetCursor"
      >
        <RotateCcw class="w-3.5 h-3.5" />
        <span>RESET DEFAULTS</span>
      </button>
    </div>

    <!-- Main Glass Control Deck -->
    <div class="p-6 sm:p-8 md:p-10 rounded-3xl bg-void-950/85 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-10">
      
      <!-- 1. Geometry Shape Selector -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300">
          <Box class="w-4 h-4 text-prism-cyan" />
          <span>Select 3D Geometry Shape</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            v-for="shape in shapes"
            :key="shape.id"
            class="p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 cursor-pointer"
            :class="[
              state.shape === shape.id
                ? 'bg-void-900 border-prism-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)] ring-1 ring-prism-cyan'
                : 'bg-void-950/60 border-white/5 hover:border-white/20 text-zinc-400 hover:text-white'
            ]"
            @click="selectShape(shape.id)"
            @mouseenter="setCursor('HOVER'); playHover()"
            @mouseleave="resetCursor"
          >
            <span class="text-xl">{{ shape.icon }}</span>
            <div class="space-y-0.5">
              <span class="block text-xs font-display font-bold text-white">{{ shape.name }}</span>
              <span class="block text-[10px] font-mono text-hud-text">Dual-Pass Facets</span>
            </div>
          </button>
        </div>
      </div>

      <!-- 2. Slider Controls Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 border-t border-white/5">
        <UiSlider
          label="Light Dispersion"
          :model-value="state.dispersion"
          :min="0.1"
          :max="3.0"
          :step="0.05"
          unit=""
          accent-color="#00F0FF"
          description="Calculates chromatic separation of refracted RGB spectral rays."
          @update:model-value="(v: number) => onSliderChange('dispersion', v)"
        />

        <UiSlider
          label="Micro-Roughness"
          :model-value="state.roughness"
          :min="0.01"
          :max="0.5"
          :step="0.01"
          unit=""
          accent-color="#FF2E93"
          description="Controls specular crystal gleam and facet sharpness."
          @update:model-value="(v: number) => onSliderChange('roughness', v)"
        />

        <UiSlider
          label="Transmission Clarity"
          :model-value="state.transmission"
          :min="0.1"
          :max="1.0"
          :step="0.01"
          unit="%"
          accent-color="#FFD166"
          description="Simulates optical light passing through solid dielectric crystal."
          @update:model-value="(v: number) => onSliderChange('transmission', v)"
        />

        <UiSlider
          label="Orbital Speed"
          :model-value="state.rotationSpeed"
          :min="0.1"
          :max="2.5"
          :step="0.05"
          unit="x"
          accent-color="#34D399"
          description="Angular velocity of the 3D crystal polyhedron in space."
          @update:model-value="(v: number) => onSliderChange('rotationSpeed', v)"
        />
      </div>

      <!-- 3. Spectral Color Themes -->
      <div class="space-y-4 pt-2 border-t border-white/5">
        <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300">
          <Sparkles class="w-4 h-4 text-prism-gold" />
          <span>Spectral Color Themes</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            v-for="theme in themes"
            :key="theme.id"
            class="p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer"
            :class="[
              state.colorTheme === theme.id
                ? 'bg-void-900 border-prism-cyan shadow-[0_0_24px_rgba(0,240,255,0.15)] ring-1 ring-prism-cyan'
                : 'bg-void-950/60 border-white/5 hover:border-white/20 text-zinc-400 hover:text-white'
            ]"
            @click="selectTheme(theme.id)"
            @mouseenter="setCursor('HOVER'); playHover()"
            @mouseleave="resetCursor"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="font-display font-bold text-sm text-white">{{ theme.name }}</span>
              <div class="flex items-center gap-1.5">
                <span
                  v-for="(dot, i) in theme.dots"
                  :key="i"
                  class="w-2.5 h-2.5 rounded-full"
                  :style="{ backgroundColor: dot }"
                />
              </div>
            </div>
            <p class="text-xs font-mono text-hud-text">{{ theme.desc }}</p>
          </button>
        </div>
      </div>

      <!-- 4. Quick Toggles Bar -->
      <div class="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <button
            class="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono transition-all cursor-pointer"
            :class="[
              state.wireframe
                ? 'bg-prism-cyan/15 border-prism-cyan text-prism-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                : 'bg-void-900 border-white/10 text-hud-text hover:text-white'
            ]"
            @click="toggleWireframe"
            @mouseenter="setCursor('HOVER')"
            @mouseleave="resetCursor"
          >
            <Eye class="w-3.5 h-3.5" />
            <span>WIREFRAME: {{ state.wireframe ? 'ON' : 'OFF' }}</span>
          </button>
        </div>

        <div class="text-xs font-mono text-hud-text">
          <span>PIPELINE: </span>
          <span class="text-white font-bold">THREE.JS PMREM + DUAL-PASS GLSL</span>
        </div>
      </div>
    </div>
  </section>
</template>