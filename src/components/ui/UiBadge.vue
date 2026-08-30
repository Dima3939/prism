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
    class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-widest uppercase rounded-full border backdrop-blur-md transition-all duration-300"
    :class="[
      variant === 'cyan' ? 'bg-prism-cyan/10 border-prism-cyan/30 text-prism-cyan' : '',
      variant === 'magenta' ? 'bg-prism-magenta/10 border-prism-magenta/30 text-prism-magenta' : '',
      variant === 'gold' ? 'bg-prism-gold/10 border-prism-gold/30 text-prism-gold' : '',
      variant === 'glass' ? 'bg-white/5 border-white/10 text-hud-text hover:text-white hover:border-white/20' : '',
    ]"
  >
    <span
      v-if="dot"
      class="w-1.5 h-1.5 rounded-full animate-pulse"
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
