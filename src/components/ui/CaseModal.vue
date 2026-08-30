<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'
import type { ProjectCase } from '../../types'
import { useSound } from '../../composables/useSound'
import { X, Award, CheckCircle2, Cpu } from 'lucide-vue-next'
import UiBadge from './UiBadge.vue'
import UiButton from './UiButton.vue'

interface Props {
  project: ProjectCase | null
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

const { playClick, playSwoosh } = useSound()

function handleClose() {
  playClick()
  emit('close')
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.isOpen) {
    handleClose()
  }
}

watch(() => props.isOpen, (open) => {
  if (open) {
    playSwoosh()
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen && project"
      data-lenis-prevent
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-void-950/90 backdrop-blur-2xl overflow-y-auto"
      @click.self="handleClose"
    >
      <div
        data-lenis-prevent
        class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-void-900 border border-white/10 rounded-3xl shadow-2xl shadow-black/90 my-auto text-left"
        :style="{ borderColor: `${project.accentColor}33` }"
      >
        <!-- Top Gradient Strip -->
        <div
          class="sticky top-0 left-0 right-0 h-1 bg-gradient-to-r z-30"
          :style="{
            backgroundImage: `linear-gradient(to right, ${project.accentColor}, #FF2E93, #00F0FF)`
          }"
        />

        <!-- Close Button -->
        <button
          class="sticky top-6 right-6 float-right z-30 w-10 h-10 rounded-full bg-void-950/90 border border-white/20 hover:border-white/40 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg ml-auto mr-6 mt-4"
          @click="handleClose"
        >
          <X class="w-5 h-5" />
        </button>

        <!-- Header Hero Image -->
        <div class="relative h-60 md:h-80 w-full overflow-hidden -mt-14">
          <img
            :src="project.thumbnail"
            :alt="project.title"
            class="w-full h-full object-cover filter brightness-90"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-void-900 via-void-900/40 to-transparent" />
          
          <div class="absolute bottom-6 left-6 md:left-10 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <UiBadge variant="cyan" dot>{{ project.category }}</UiBadge>
                <span class="text-xs font-mono text-hud-text">{{ project.year }} // {{ project.client }}</span>
              </div>
              <h2 class="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white">
                {{ project.title }}
              </h2>
            </div>
            <div class="text-right hidden sm:block">
              <span class="text-xs font-mono text-hud-text">CASE ID</span>
              <p class="text-xl font-mono font-bold text-prism-cyan">// {{ project.number }}</p>
            </div>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-6 md:p-10 space-y-8">
          <div>
            <p class="text-base md:text-lg text-zinc-300 font-body leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              v-for="(metric, i) in project.metrics"
              :key="i"
              class="p-5 rounded-2xl bg-void-950/80 border border-white/5 flex flex-col justify-between"
            >
              <span class="text-xs font-mono uppercase text-hud-text tracking-wider">{{ metric.label }}</span>
              <p class="text-2xl sm:text-3xl font-display font-bold text-white mt-2" :style="{ color: project.accentColor }">
                {{ metric.value }}
              </p>
            </div>
          </div>

          <!-- Challenge & Solution -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 rounded-2xl bg-void-950/60 border border-white/5 space-y-3">
              <div class="flex items-center gap-2 text-prism-magenta font-mono text-xs uppercase tracking-wider">
                <Cpu class="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p class="text-sm font-body text-zinc-300 leading-relaxed">
                {{ project.challenge }}
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-void-950/60 border border-white/5 space-y-3">
              <div class="flex items-center gap-2 text-prism-cyan font-mono text-xs uppercase tracking-wider">
                <CheckCircle2 class="w-4 h-4" />
                <span>Architectural Solution</span>
              </div>
              <p class="text-sm font-body text-zinc-300 leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          </div>

          <!-- Awards Recognition -->
          <div v-if="project.awards && project.awards.length > 0" class="p-5 rounded-2xl bg-void-950/50 border border-white/5">
            <div class="flex items-center gap-2 mb-3 text-prism-gold font-mono text-xs uppercase tracking-wider">
              <Award class="w-4 h-4" />
              <span>Accolades & Industry Recognition</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <UiBadge
                v-for="award in project.awards"
                :key="award"
                variant="gold"
              >
                🏆 {{ award }}
              </UiBadge>
            </div>
          </div>

          <!-- Tech Stack Tags -->
          <div>
            <span class="block text-xs font-mono text-hud-text uppercase tracking-wider mb-3">Technologies Deployed</span>
            <div class="flex flex-wrap gap-2">
              <UiBadge
                v-for="tech in project.techStack"
                :key="tech"
                variant="glass"
              >
                {{ tech }}
              </UiBadge>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div class="text-xs font-mono text-hud-text">
              ROLE: <span class="text-white">{{ project.role }}</span>
            </div>
            <UiButton variant="primary" size="md" @click="handleClose">
              Close Case Study
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>