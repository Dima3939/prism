import * as THREE from 'three'
import gsap from 'gsap'
import { MouseTracker } from './utils/mouseTracker'
import { PrismScene, type PrismLabConfig } from './scenes/PrismScene'
import { createStudioEnvironment } from './utils/environment'
import { disposeHierarchy } from './utils/dispose'

export class WebGLApp {
  public canvas: HTMLCanvasElement
  public renderer: THREE.WebGLRenderer
  public scene: THREE.Scene
  public camera: THREE.PerspectiveCamera
  public mouseTracker: MouseTracker
  public prismScene: PrismScene
  
  private clock: THREE.Clock
  private isRunning: boolean = false
  private scrollProgress: number = 0
  private tickerCallback: () => void

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.clock = new THREE.Clock()
    this.mouseTracker = new MouseTracker(0.06)

    // 1. Scene & Camera
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    this.camera.position.set(0, 0, 7.2)

    // 2. Renderer with High-Precision Tone Mapping
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.35

    // 3. Generate Studio HDR Environment Map for Realistic Diamond Reflections
    this.scene.environment = createStudioEnvironment(this.renderer)

    // 4. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0e1220, 2.0)
    this.scene.add(ambientLight)

    // Cyan Key Light
    const cyanLight = new THREE.PointLight(0x00F0FF, 8, 30)
    cyanLight.position.set(5, 4, 6)
    this.scene.add(cyanLight)

    // Magenta Rim Light
    const magentaLight = new THREE.PointLight(0xFF2E93, 7, 30)
    magentaLight.position.set(-5, -4, 5)
    this.scene.add(magentaLight)

    // Gold Top Accent Light
    const goldLight = new THREE.PointLight(0xFFD166, 4, 25)
    goldLight.position.set(0, 6, 3)
    this.scene.add(goldLight)

    // 5. Prism 3D Crystal Gem
    this.prismScene = new PrismScene(this.renderer)
    this.scene.add(this.prismScene.group)

    // 6. Events & Ticker Bindings
    this.onResize = this.onResize.bind(this)
    this.render = this.render.bind(this)
    window.addEventListener('resize', this.onResize)

    this.tickerCallback = () => this.render()
    gsap.ticker.add(this.tickerCallback)
    this.isRunning = true
  }

  public onResize() {
    const width = window.innerWidth
    const height = window.innerHeight

    this.camera.aspect = width / height
    if (width < 768) {
      this.camera.position.z = 9.2
    } else {
      this.camera.position.z = 7.2
    }
    
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  public setScrollProgress(progress: number) {
    this.scrollProgress = progress
  }

  public updateLabConfig(config: Partial<PrismLabConfig>) {
    this.prismScene.setConfig(config)
  }

  private render() {
    if (!this.isRunning) return

    const elapsedTime = this.clock.getElapsedTime()
    this.mouseTracker.update()

    this.prismScene.update(
      elapsedTime,
      this.mouseTracker.current,
      this.scrollProgress
    )

    this.renderer.render(this.scene, this.camera)
  }

  public destroy() {
    this.isRunning = false
    window.removeEventListener('resize', this.onResize)
    gsap.ticker.remove(this.tickerCallback)
    this.mouseTracker.destroy()

    disposeHierarchy(this.scene)
    this.renderer.dispose()
  }
}