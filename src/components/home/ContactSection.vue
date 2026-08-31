<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useCursor } from '../../composables/useCursor'
import { useSound } from '../../composables/useSound'
import { Send, CheckCircle2, ShieldCheck } from 'lucide-vue-next'
import UiBadge from '../ui/UiBadge.vue'
import UiButton from '../ui/UiButton.vue'

const { setCursor, resetCursor } = useCursor()
const { playClick, playHover, playSwoosh } = useSound()

const form = reactive({
  name: '',
  email: '',
  service: 'WebGL & 3D Experience',
  budget: '$5k - $10k',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const serviceOptions = [
  'WebGL & 3D Experience',
  'Flagship Creative Site',
  '3D Product Configurator',
  'Subcontracting / Motion'
]

const budgetOptions = [
  '$3k - $5k',
  '$5k - $10k',
  '$10k - $20k',
  '$20k+'
]

function handleSubmit() {
  playClick()
  isSubmitting.value = true
  
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    playSwoosh()
  }, 1200)
}

function resetForm() {
  isSubmitted.value = false
  form.name = ''
  form.email = ''
  form.message = ''
}

function setCustomScope(scope: { service: string; budget: string; summary: string }) {
  if (serviceOptions.includes(scope.service)) {
    form.service = scope.service
  }
  form.budget = scope.budget
  form.message = scope.summary
}

defineExpose({
  setCustomScope
})
</script>

<template>
  <section
    id="contact"
    class="relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none"
  >
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div class="flex items-center justify-center gap-3">
        <UiBadge variant="magenta" dot>
          Initialize Collaboration // 05
        </UiBadge>
      </div>
      <h2 class="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
        LET'S BUILD A MASTERPIECE.
      </h2>
      <p class="text-sm sm:text-base font-body text-zinc-300">
        Ready to captivate your audience and command premium industry authority? Fill out the brief below or contact directly.
      </p>
    </div>

    <!-- Contact Form Container -->
    <div class="max-w-4xl mx-auto p-6 sm:p-8 md:p-12 rounded-3xl bg-void-950/85 border border-white/10 backdrop-blur-2xl shadow-2xl text-left">
      <!-- Success State -->
      <div v-if="isSubmitted" class="py-16 text-center space-y-6 animate-fade-in">
        <div class="w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_32px_rgba(52,211,153,0.3)]">
          <CheckCircle2 class="w-8 h-8" />
        </div>
        <div class="space-y-2">
          <h3 class="text-2xl sm:text-3xl font-display font-bold text-white">INQUIRY RECEIVED.</h3>
          <p class="text-sm font-mono text-hud-text max-w-md mx-auto">
            Thank you {{ form.name }}. Our creative directors will review your brief and reply within 12 business hours.
          </p>
        </div>
        <UiButton variant="primary" size="md" @click="resetForm">
          Send Another Message
        </UiButton>
      </div>

      <!-- Active Form -->
      <form v-else class="space-y-8" @submit.prevent="handleSubmit">
        <!-- Service Selection Chips -->
        <div class="space-y-3">
          <label class="block text-xs font-mono uppercase text-hud-text tracking-wider">
            1. Select Project Scope
          </label>
          <div class="flex flex-wrap gap-2.5">
            <button
              v-for="service in serviceOptions"
              :key="service"
              type="button"
              class="px-4 py-2.5 text-xs font-mono rounded-full border transition-all cursor-pointer"
              :class="[
                form.service === service
                  ? 'bg-prism-cyan/20 border-prism-cyan text-prism-cyan shadow-[0_0_16px_rgba(0,240,255,0.2)] font-bold'
                  : 'bg-void-900/60 border-white/10 text-hud-text hover:text-white hover:border-white/20'
              ]"
              @click="form.service = service; playClick()"
              @mouseenter="setCursor('HOVER')"
              @mouseleave="resetCursor"
            >
              {{ service }}
            </button>
          </div>
        </div>

        <!-- Budget Range Chips -->
        <div class="space-y-3">
          <label class="block text-xs font-mono uppercase text-hud-text tracking-wider">
            2. Anticipated Investment Tier
          </label>
          <div class="flex flex-wrap gap-2.5">
            <button
              v-for="budget in budgetOptions"
              :key="budget"
              type="button"
              class="px-4 py-2.5 text-xs font-mono rounded-full border transition-all cursor-pointer"
              :class="[
                form.budget === budget
                  ? 'bg-prism-magenta/20 border-prism-magenta text-prism-magenta shadow-[0_0_16px_rgba(255,46,147,0.2)] font-bold'
                  : 'bg-void-900/60 border-white/10 text-hud-text hover:text-white hover:border-white/20'
              ]"
              @click="form.budget = budget; playClick()"
              @mouseenter="setCursor('HOVER')"
              @mouseleave="resetCursor"
            >
              {{ budget }}
            </button>
          </div>
        </div>

        <!-- Inputs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="block text-xs font-mono uppercase text-hud-text tracking-wider">
              Your Name / Studio
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="e.g. Alex Vance"
              class="w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body"
            />
          </div>

          <div class="space-y-2">
            <label class="block text-xs font-mono uppercase text-hud-text tracking-wider">
              Work Email Address
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="alex@company.com"
              class="w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body"
            />
          </div>
        </div>

        <!-- Message Input -->
        <div class="space-y-2">
          <label class="block text-xs font-mono uppercase text-hud-text tracking-wider">
            Project Overview & Goals
          </label>
          <textarea
            v-model="form.message"
            rows="4"
            required
            placeholder="Tell us about your brand, launch deadlines, or desired interactive features..."
            class="w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body resize-none"
          />
        </div>

        <!-- Submit Button -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div class="flex items-center gap-2 text-xs font-mono text-hud-text">
            <ShieldCheck class="w-4 h-4 text-emerald-400" />
            <span>NDA & Confidentiality Guaranteed</span>
          </div>
          <UiButton
            variant="primary"
            size="lg"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="animate-pulse">Transmitting Brief...</span>
            <span v-else class="flex items-center gap-2">
              <span>Submit Project Brief</span>
              <Send class="w-4 h-4" />
            </span>
          </UiButton>
        </div>
      </form>
    </div>
  </section>
</template>