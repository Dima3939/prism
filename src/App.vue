<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { WebGLApp } from './webgl/WebGLApp'
import { useLenis } from './composables/useLenis'
import type { ProjectCase } from './types'
import type { PrismLabConfig } from './webgl/scenes/PrismScene'

// Layout & UI Components
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import CustomCursor from './components/layout/CustomCursor.vue'
import CaseModal from './components/ui/CaseModal.vue'
import PerformanceHud from './components/ui/PerformanceHud.vue'

// Home Sections
import HeroSection from './components/home/HeroSection.vue'
import ManifestoSection from './components/home/ManifestoSection.vue'
import ShowcaseSection from './components/home/ShowcaseSection.vue'
import ShaderLabSection from './components/home/ShaderLabSection.vue'
import ServicesBento from './components/home/ServicesBento.vue'
import CostEstimator from './components/home/CostEstimator.vue'
import ContactSection from './components/home/ContactSection.vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let webglApp: WebGLApp | null = null

const { initLenis } = useLenis()
let destroyLenis: (() => void) | undefined

// Modal State
const selectedProject = ref<ProjectCase | null>(null)
const isModalOpen = ref(false)

// Contact Form Ref
const contactSectionRef = ref<InstanceType<typeof ContactSection> | null>(null)

function openProjectModal(project: ProjectCase) {
  selectedProject.value = project
  isModalOpen.value = true
}

function closeProjectModal() {
  isModalOpen.value = false
}

function onUpdateLabConfig(config: Partial<PrismLabConfig>) {
  if (webglApp) {
    webglApp.updateLabConfig(config)
  }
}

function onInjectScope(scope: { service: string; budget: string; summary: string }) {
  if (contactSectionRef.value) {
    contactSectionRef.value.setCustomScope(scope)
  }
}

onMounted(() => {
  // 1. Initialize Lenis Smooth Scrolling
  destroyLenis = initLenis()

  // 2. Initialize WebGL 3D Canvas Engine
  if (canvasRef.value) {
    webglApp = new WebGLApp(canvasRef.value)
  }

  // 3. Sync scroll progress with WebGL App
  window.addEventListener('scroll', () => {
    if (webglApp) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      webglApp.setScrollProgress(progress)
    }
  }, { passive: true })
})

onUnmounted(() => {
  if (destroyLenis) destroyLenis()
  if (webglApp) webglApp.destroy()
})
</script>

<template>
  <div class="relative min-h-screen bg-void-950 text-white selection:bg-prism-cyan selection:text-black">
    <!-- 1. Global Interactive WebGL Background Canvas -->
    <canvas id="webgl-canvas" ref="canvasRef"></canvas>

    <!-- 2. Subtle Film Grain Texture Overlay -->
    <div class="grain-overlay"></div>

    <!-- 3. Magnetic Trailing Custom Cursor -->
    <CustomCursor />

    <!-- 4. Global Navigation Header -->
    <AppHeader />

    <!-- 5. Main Content Layer -->
    <main class="content-layer">
      <!-- Hero Screen with Kinetic 3D Headline -->
      <HeroSection />

      <!-- Manifesto & Metrics -->
      <ManifestoSection />

      <!-- Horizontal Pinned Showcase Gallery with Category Filter & Liquid Hover -->
      <ShowcaseSection @select-project="openProjectModal" />

      <!-- Interactive 3D Shader Sandbox Lab with 4 Geometry Shapes -->
      <ShaderLabSection @update-config="onUpdateLabConfig" />

      <!-- Capabilities & Bento Services Grid -->
      <ServicesBento />

      <!-- Interactive Project Cost & Scope Estimator -->
      <CostEstimator @inject-scope="onInjectScope" />

      <!-- High-Conversion Project Inquiry Form -->
      <ContactSection ref="contactSectionRef" />
    </main>

    <!-- 6. Retro-Futuristic Performance Diagnostics HUD -->
    <PerformanceHud />

    <!-- 7. Kinetic Ticker Footer -->
    <AppFooter />

    <!-- 8. Deep-Dive Case Study Modal -->
    <CaseModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeProjectModal"
    />
  </div>
</template>