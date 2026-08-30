<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { PrismLabConfig } from '../../webgl/scenes/PrismScene'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { Sliders, Sparkles, RefreshCw, Eye, EyeOff, Palette, RotateCw } from 'lucide-vue-next'
import UiBadge from '../ui/UiBadge.vue'
import UiButton from '../ui/UiButton.vue'

const emit = defineEmits<{
  (e: 'update-config', config: Partial<PrismLabConfig>): void
}>()

const { setCursor, resetCursor } = useCursor()
const { playHover, playClick } = useSound()

const config = reactive<PrismLabConfig>({
  dispersion: 1.4,
  roughness: 0.12,
  transmission: 0.95,
  colorTheme: 0,
  wireframe: false,
  rotationSpeed: 1.2
})

function applyChanges() {
  emit('update-config', { ...config })
}

function selectTheme(themeIndex: number) {
  playClick()
  config.colorTheme = themeIndex
  applyChanges()
}

function toggleWireframe() {
  playClick()
  config.wireframe = !config.wireframe
  applyChanges()
}

function resetDefaults() {
  playClick()
  config.dispersion = 1.2
  config.roughness = 0.15
  config.transmission = 0.95
  config.colorTheme = 0
  config.wireframe = false
  config.rotationSpeed = 1.0
  applyChanges()
}

watch(config, () => {
  applyChanges()
}, { deep: true })
</script>

<template>
  <section
    id="shader-lab"
    class="relative py-28 px-4 md:px-10 max-w-7xl mx-auto z-20 select-none"
  >
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
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

      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-full bg-void-950/70 border border-white/10 hover:border-white/30 text-xs font-mono text-hud-text hover:text-white transition-all cursor-pointer"
          @click="resetDefaults"
          @mouseenter="setCursor('HOVER'); playHover()"
          @mouseleave="resetCursor"
        >
          <RefreshCw class="w-3.5 h-3.5" />
          <span>RESET DEFAULTS</span>
        </button>
      </div>
    </div>

    <!-- Main Control Deck Glass Container -->
    <div class="p-6 md:p-10 rounded-3xl bg-void-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-8 text-left">
      <!-- Top Deck Banner -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-prism-gold/10 border border-prism-gold/30 flex items-center justify-center text-prism-gold">
            <Sliders class="w-5 h-5" />
          </div>
          <div>
            <h3 class="text-lg font-display font-bold text-white uppercase">
              Live Shader Control Deck
            </h3>
            <p class="text-xs font-mono text-hud-text">
              Direct uniform manipulation affecting the background 3D canvas in real-time
            </p>
          </div>
        </div>

        <!-- Wireframe & Quick Toggles -->
        <div class="flex items-center gap-3">
          <button
            class="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono border transition-all cursor-pointer"
            :class="[
              config.wireframe ? 'bg-prism-cyan/20 border-prism-cyan text-prism-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]' : 'bg-white/5 border-white/10 text-hud-text hover:text-white'
            ]"
            @click="toggleWireframe"
            @mouseenter="setCursor('HOVER'); playHover()"
            @mouseleave="resetCursor"
          >
            <component :is="config.wireframe ? Eye : EyeOff" class="w-4 h-4" />
            <span>WIREFRAME: {{ config.wireframe ? 'ON' : 'OFF' }}</span>
          </button>
        </div>
      </div>

      <!-- Control Sliders Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Dispersion / Rainbow Split -->
        <div class="p-5 rounded-2xl bg-void-900/70 border border-white/5 space-y-3">
          <div class="flex justify-between items-center text-xs font-mono">
            <span class="text-hud-text uppercase">Light Dispersion</span>
            <span class="text-prism-cyan font-bold">{{ config.dispersion.toFixed(2) }}</span>
          </div>
          <input
            v-model.number="config.dispersion"
            type="range"
            min="0.2"
            max="3.0"
            step="0.05"
            class="w-full accent-prism-cyan cursor-pointer"
            @input="playHover"
          />
          <p class="text-[11px] font-mono text-zinc-500">
            Calculates chromatic separation of refracted RGB spectral rays.
          </p>
        </div>

        <!-- Surface Roughness -->
        <div class="p-5 rounded-2xl bg-void-900/70 border border-white/5 space-y-3">
          <div class="flex justify-between items-center text-xs font-mono">
            <span class="text-hud-text uppercase">Micro-Roughness</span>
            <span class="text-prism-magenta font-bold">{{ config.roughness.toFixed(2) }}</span>
          </div>
          <input
            v-model.number="config.roughness"
            type="range"
            min="0.02"
            max="0.8"
            step="0.02"
            class="w-full accent-prism-magenta cursor-pointer"
            @input="playHover"
          />
          <p class="text-[11px] font-mono text-zinc-500">
            Controls specular crystal gleam and facet sharpness.
          </p>
        </div>

        <!-- Glass Transmission -->
        <div class="p-5 rounded-2xl bg-void-900/70 border border-white/5 space-y-3">
          <div class="flex justify-between items-center text-xs font-mono">
            <span class="text-hud-text uppercase">Transmission Clarity</span>
            <span class="text-prism-gold font-bold">{{ (config.transmission * 100).toFixed(0) }}%</span>
          </div>
          <input
            v-model.number="config.transmission"
            type="range"
            min="0.4"
            max="1.0"
            step="0.02"
            class="w-full accent-prism-gold cursor-pointer"
            @input="playHover"
          />
          <p class="text-[11px] font-mono text-zinc-500">
            Simulates optical light passing through solid dielectric crystal.
          </p>
        </div>

        <!-- Kinematic Rotation Speed -->
        <div class="p-5 rounded-2xl bg-void-900/70 border border-white/5 space-y-3">
          <div class="flex justify-between items-center text-xs font-mono">
            <span class="text-hud-text uppercase">Orbital Speed</span>
            <span class="text-emerald-400 font-bold">{{ config.rotationSpeed.toFixed(1) }}x</span>
          </div>
          <input
            v-model.number="config.rotationSpeed"
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            class="w-full accent-emerald-400 cursor-pointer"
            @input="playHover"
          />
          <p class="text-[11px] font-mono text-zinc-500">
            Angular velocity of the 3D crystal polyhedron in space.
          </p>
        </div>
      </div>

      <!-- Color Palette Preset Selectors -->
      <div class="space-y-3 pt-4 border-t border-white/5">
        <div class="flex items-center gap-2 text-xs font-mono text-hud-text uppercase tracking-wider">
          <Palette class="w-4 h-4" />
          <span>Spectral Color Themes</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Theme 0 -->
          <button
            class="p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer"
            :class="[
              config.colorTheme === 0 ? 'bg-void-900 border-prism-cyan shadow-[0_0_20px_rgba(0,240,255,0.2)]' : 'bg-void-900/40 border-white/5 hover:border-white/20'
            ]"
            @click="selectTheme(0)"
            @mouseenter="setCursor('HOVER')"
            @mouseleave="resetCursor"
          >
            <div>
              <p class="text-xs font-display font-bold text-white uppercase">Prism Rainbow & Cyan</p>
              <p class="text-[10px] font-mono text-hud-text">Full visible light spectrum</p>
            </div>
            <div class="flex gap-1">
              <span class="w-3 h-3 rounded-full bg-prism-cyan" />
              <span class="w-3 h-3 rounded-full bg-prism-magenta" />
              <span class="w-3 h-3 rounded-full bg-prism-gold" />
            </div>
          </button>

          <!-- Theme 1 -->
          <button
            class="p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer"
            :class="[
              config.colorTheme === 1 ? 'bg-void-900 border-prism-magenta shadow-[0_0_20px_rgba(255,46,147,0.2)]' : 'bg-void-900/40 border-white/5 hover:border-white/20'
            ]"
            @click="selectTheme(1)"
            @mouseenter="setCursor('HOVER')"
            @mouseleave="resetCursor"
          >
            <div>
              <p class="text-xs font-display font-bold text-white uppercase">Cyber Magenta & Violet</p>
              <p class="text-[10px] font-mono text-hud-text">Deep ultraviolet laser caustics</p>
            </div>
            <div class="flex gap-1">
              <span class="w-3 h-3 rounded-full bg-prism-magenta" />
              <span class="w-3 h-3 rounded-full bg-prism-violet" />
              <span class="w-3 h-3 rounded-full bg-pink-300" />
            </div>
          </button>

          <!-- Theme 2 -->
          <button
            class="p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer"
            :class="[
              config.colorTheme === 2 ? 'bg-void-900 border-prism-gold shadow-[0_0_20px_rgba(255,209,102,0.2)]' : 'bg-void-900/40 border-white/5 hover:border-white/20'
            ]"
            @click="selectTheme(2)"
            @mouseenter="setCursor('HOVER')"
            @mouseleave="resetCursor"
          >
            <div>
              <p class="text-xs font-display font-bold text-white uppercase">Quantum Gold & Amber</p>
              <p class="text-[10px] font-mono text-hud-text">Warm radiant luxury photons</p>
            </div>
            <div class="flex gap-1">
              <span class="w-3 h-3 rounded-full bg-prism-gold" />
              <span class="w-3 h-3 rounded-full bg-amber-600" />
              <span class="w-3 h-3 rounded-full bg-yellow-200" />
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
