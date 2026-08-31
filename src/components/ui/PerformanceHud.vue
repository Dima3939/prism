<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Activity, ChevronDown, ChevronUp, Cpu, Monitor, Zap } from 'lucide-vue-next'

const isOpen = ref(false)
const fps = ref(120)
const frameTime = ref(8.3)
const gpuInfo = ref('WebGL 2.0 Accelerating')
const rendererInfo = ref('Hardware GPU')

let frameCount = 0
let lastTime = performance.now()
let rafId: number

function detectGPU() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (debugInfo) {
        const unmaskedRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        const unmaskedVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
        gpuInfo.value = unmaskedVendor || 'High Performance'
        rendererInfo.value = unmaskedRenderer ? unmaskedRenderer.replace(/ANGLE \((.*)\)/, '$1') : 'Dedicated GPU'
      }
    }
  } catch (e) {
    // Fallback
    gpuInfo.value = 'Hardware Accelerated'
  }
}

function updateFPS() {
  const now = performance.now()
  frameCount++

  if (now - lastTime >= 500) {
    const calculatedFps = Math.round((frameCount * 1000) / (now - lastTime))
    fps.value = Math.min(calculatedFps, 144)
    frameTime.value = parseFloat((1000 / Math.max(fps.value, 1)).toFixed(1))
    frameCount = 0
    lastTime = now
  }

  rafId = requestAnimationFrame(updateFPS)
}

onMounted(() => {
  detectGPU()
  rafId = requestAnimationFrame(updateFPS)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="fixed bottom-6 left-6 z-40 select-none font-mono text-left">
    <!-- Collapsed Pill Indicator -->
    <div
      class="flex items-center gap-3 px-3.5 py-2 rounded-full bg-void-950/90 border border-white/15 backdrop-blur-xl shadow-2xl hover:border-prism-cyan/40 transition-all cursor-pointer group"
      @click="isOpen = !isOpen"
    >
      <!-- Pulse dot with FPS color -->
      <span
        class="w-2 h-2 rounded-full animate-ping"
        :class="fps >= 90 ? 'bg-emerald-400' : (fps >= 50 ? 'bg-prism-cyan' : 'bg-prism-gold')"
      />
      <div class="flex items-center gap-1.5 text-xs font-bold text-white">
        <span :class="fps >= 90 ? 'text-emerald-400' : 'text-prism-cyan'">{{ fps }}</span>
        <span class="text-[10px] text-zinc-400 font-normal">FPS</span>
      </div>

      <div class="h-3 w-px bg-white/15 mx-0.5" />

      <span class="text-[10px] text-zinc-400 group-hover:text-white transition-colors">
        {{ isOpen ? 'HIDE HUD' : 'GPU METRICS' }}
      </span>

      <ChevronUp v-if="!isOpen" class="w-3 h-3 text-zinc-400 group-hover:text-white" />
      <ChevronDown v-else class="w-3 h-3 text-zinc-400 group-hover:text-white" />
    </div>

    <!-- Expanded Diagnostic Deck -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-95"
    >
      <div
        v-if="isOpen"
        class="mt-2.5 p-4 rounded-2xl bg-void-950/95 border border-white/15 backdrop-blur-2xl shadow-2xl w-72 space-y-3"
      >
        <div class="flex items-center justify-between pb-2 border-b border-white/10">
          <div class="flex items-center gap-1.5 text-xs font-bold text-white">
            <Activity class="w-3.5 h-3.5 text-prism-cyan" />
            <span>WebGL Engine HUD</span>
          </div>
          <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400 font-bold">
            OPTIMIZED
          </span>
        </div>

        <div class="space-y-2 text-xs">
          <!-- Frame Rate & Delta -->
          <div class="flex items-center justify-between">
            <span class="text-hud-text text-[11px] flex items-center gap-1">
              <Zap class="w-3 h-3 text-prism-gold" />
              Frame Budget:
            </span>
            <span class="font-bold text-white">{{ frameTime }} ms ({{ fps }} FPS)</span>
          </div>

          <!-- GPU Hardware -->
          <div class="space-y-0.5 pt-1">
            <span class="text-hud-text text-[10px] flex items-center gap-1">
              <Cpu class="w-3 h-3 text-prism-magenta" />
              Active GPU Device:
            </span>
            <p class="text-[11px] text-zinc-200 font-medium truncate" :title="rendererInfo">
              {{ rendererInfo }}
            </p>
          </div>

          <!-- Pipeline Architecture -->
          <div class="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
            <span class="text-hud-text">Pipeline:</span>
            <span class="text-prism-cyan font-bold">Three.js 0.162 // GLSL ES</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>