<script setup lang="ts">
interface Props {
  variant?: 'cyan' | 'magenta' | 'gold' | 'glass'
  dot?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'glass',
  dot: false
})
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase rounded-full border backdrop-blur-xl shadow-lg transition-all duration-300 select-none"
    :class="[
      variant === 'cyan' ? 'bg-void-950/85 border-prism-cyan/40 text-prism-cyan shadow-[0_0_12px_rgba(0,240,255,0.15)]' : '',
      variant === 'magenta' ? 'bg-void-950/85 border-prism-magenta/40 text-prism-magenta shadow-[0_0_12px_rgba(255,46,147,0.15)]' : '',
      variant === 'gold' ? 'bg-void-950/85 border-prism-gold/40 text-prism-gold shadow-[0_0_12px_rgba(255,209,102,0.15)]' : '',
      variant === 'glass' ? 'bg-void-950/85 border-white/20 text-white hover:border-white/40 shadow-black/60' : '',
    ]"
  >
    <span
      v-if="dot"
      class="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
      :class="[
        variant === 'cyan' ? 'bg-prism-cyan shadow-[0_0_8px_#00F0FF]' : '',
        variant === 'magenta' ? 'bg-prism-magenta shadow-[0_0_8px_#FF2E93]' : '',
        variant === 'gold' ? 'bg-prism-gold shadow-[0_0_8px_#FFD166]' : '',
        variant === 'glass' ? 'bg-white shadow-[0_0_6px_#fff]' : '',
      ]"
    />
    <slot />
  </span>
</template>