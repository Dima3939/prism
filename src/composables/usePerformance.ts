import { ref, onMounted, onUnmounted } from 'vue'

export function usePerformance() {
  const fps = ref(60)
  const isLowPerf = ref(false)
  let frameCount = 0
  let lastTime = performance.now()
  let animId: number

  function measure() {
    frameCount++
    const now = performance.now()

    if (now >= lastTime + 1000) {
      fps.value = Math.round((frameCount * 1000) / (now - lastTime))
      if (fps.value < 45 && !isLowPerf.value) {
        isLowPerf.value = true
      }
      frameCount = 0
      lastTime = now
    }

    animId = requestAnimationFrame(measure)
  }

  onMounted(() => {
    animId = requestAnimationFrame(measure)
  })

  onUnmounted(() => {
    cancelAnimationFrame(animId)
  })

  return {
    fps,
    isLowPerf
  }
}
