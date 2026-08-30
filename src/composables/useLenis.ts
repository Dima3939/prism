import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lenisInstance = ref<Lenis | null>(null)
const scrollProgress = ref(0)

export function useLenis() {
  function initLenis() {
    if (typeof window === 'undefined') return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false
    })

    lenisInstance.value = lenis

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update()
      if (document.documentElement.scrollHeight > window.innerHeight) {
        scrollProgress.value = e.scroll / (document.documentElement.scrollHeight - window.innerHeight)
      }
    })

    // GSAP Ticker Hook
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
      lenisInstance.value = null
    }
  }

  function scrollTo(target: string | HTMLElement, options?: any) {
    if (lenisInstance.value) {
      lenisInstance.value.scrollTo(target, options)
    }
  }

  return {
    lenis: lenisInstance,
    scrollProgress,
    initLenis,
    scrollTo
  }
}
