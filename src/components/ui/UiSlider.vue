<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label: string
  modelValue: number
  min: number
  max: number
  step: number
  unit?: string
  accentColor?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  unit: '',
  accentColor: '#00F0FF',
  description: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', parseFloat(target.value))
}
</script>

<template>
  <div class="space-y-2 text-left select-none">
    <div class="flex items-center justify-between">
      <span class="text-xs font-mono uppercase text-hud-text tracking-wider">{{ label }}</span>
      <span class="text-xs font-mono font-bold" :style="{ color: accentColor }">
        {{ modelValue.toFixed(2) }}{{ unit }}
      </span>
    </div>

    <!-- Custom Range Slider -->
    <div class="relative flex items-center h-5">
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        class="custom-slider w-full h-1.5 bg-void-900 rounded-lg appearance-none cursor-pointer focus:outline-none"
        :style="{
          background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${percentage}%, #141622 ${percentage}%, #141622 100%)`
        }"
        @input="onInput"
      />
    </div>

    <p v-if="description" class="text-[10px] font-body text-zinc-400 leading-tight">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid v-bind(accentColor);
  cursor: pointer;
  box-shadow: 0 0 10px v-bind(accentColor);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.custom-slider::-webkit-slider-thumb:hover {
  transform: scale(1.25);
  box-shadow: 0 0 16px v-bind(accentColor);
}

.custom-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid v-bind(accentColor);
  cursor: pointer;
  box-shadow: 0 0 10px v-bind(accentColor);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.custom-slider::-moz-range-thumb:hover {
  transform: scale(1.25);
  box-shadow: 0 0 16px v-bind(accentColor);
}
</style>