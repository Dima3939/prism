import * as THREE from 'three'
import prismVert from '../shaders/prism.vert.glsl'
import prismFrag from '../shaders/prism.frag.glsl'

export interface PrismLabConfig {
  dispersion: number
  roughness: number
  transmission: number
  colorTheme: number // 0 = Cyan Rainbow, 1 = Cyber Magenta, 2 = Quantum Gold
  wireframe: boolean
  rotationSpeed: number
}

export class PrismScene {
  public group: THREE.Group
  public backMesh!: THREE.Mesh
  public frontMesh!: THREE.Mesh
  public edgeLinesMesh!: THREE.LineSegments
  public coreFlareSprite!: THREE.Sprite
  public particlesMesh!: THREE.Points
  
  private backMaterial!: THREE.ShaderMaterial
  private frontMaterial!: THREE.ShaderMaterial
  private edgeLinesMaterial!: THREE.LineBasicMaterial

  public config: PrismLabConfig = {
    dispersion: 1.0,
    roughness: 0.08,
    transmission: 0.82,
    colorTheme: 0,
    wireframe: true,
    rotationSpeed: 0.65
  }

  constructor(renderer?: THREE.WebGLRenderer) {
    this.group = new THREE.Group()
    this.initDualPassCrystal()
    this.initEdgeLines()
    this.initCoreFlare()
    this.initParticles()
  }

  private initDualPassCrystal() {
    const geometry = new THREE.IcosahedronGeometry(1.6, 0).toNonIndexed()
    geometry.computeVertexNormals()

    // 1. Back Faces Material
    this.backMaterial = new THREE.ShaderMaterial({
      vertexShader: prismVert,
      fragmentShader: prismFrag,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      side: THREE.BackSide,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uDispersion: { value: this.config.dispersion },
        uRoughness: { value: this.config.roughness },
        uTransmission: { value: 0.5 },
        uColorTheme: { value: this.config.colorTheme },
        uIsBack: { value: 1.0 },
        uScrollProgress: { value: 0 }
      }
    })

    this.backMesh = new THREE.Mesh(geometry, this.backMaterial)
    this.group.add(this.backMesh)

    // 2. Front Faces Material
    this.frontMaterial = new THREE.ShaderMaterial({
      vertexShader: prismVert,
      fragmentShader: prismFrag,
      transparent: true,
      depthWrite: true,
      depthTest: true,
      side: THREE.FrontSide,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uDispersion: { value: this.config.dispersion },
        uRoughness: { value: this.config.roughness },
        uTransmission: { value: this.config.transmission },
        uColorTheme: { value: this.config.colorTheme },
        uIsBack: { value: 0.0 },
        uScrollProgress: { value: 0 }
      }
    })

    this.frontMesh = new THREE.Mesh(geometry, this.frontMaterial)
    this.group.add(this.frontMesh)
  }

  private initEdgeLines() {
    // Subtle, elegant facet lines
    const wireGeo = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.604, 0))
    this.edgeLinesMaterial = new THREE.LineBasicMaterial({
      color: 0x00F0FF,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    })
    this.edgeLinesMesh = new THREE.LineSegments(wireGeo, this.edgeLinesMaterial)
    this.edgeLinesMesh.visible = this.config.wireframe
    this.group.add(this.edgeLinesMesh)
  }

  private initCoreFlare() {
    // Subtle, soft core glow (dimmed)
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext('2d')!
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
    grad.addColorStop(0.3, 'rgba(0, 240, 255, 0.25)')
    grad.addColorStop(0.7, 'rgba(255, 46, 147, 0.1)')
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 128, 128)

    const texture = new THREE.CanvasTexture(canvas)
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.35
    })
    this.coreFlareSprite = new THREE.Sprite(material)
    this.coreFlareSprite.scale.set(2.4, 2.4, 1)
    this.group.add(this.coreFlareSprite)
  }

  private initParticles() {
    const count = 180
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 4.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const pCanvas = document.createElement('canvas')
    pCanvas.width = 32
    pCanvas.height = 32
    const pctx = pCanvas.getContext('2d')!
    const pGrad = pctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    pGrad.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
    pGrad.addColorStop(0.35, 'rgba(0, 240, 255, 0.5)')
    pGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
    pctx.fillStyle = pGrad
    pctx.fillRect(0, 0, 32, 32)

    const pTex = new THREE.CanvasTexture(pCanvas)
    const pMat = new THREE.PointsMaterial({
      size: 0.11,
      map: pTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.5
    })

    this.particlesMesh = new THREE.Points(geo, pMat)
    this.group.add(this.particlesMesh)
  }

  public update(time: number, mouse: { x: number; y: number }, scrollProgress: number) {
    this.backMaterial.uniforms.uTime.value = time
    this.backMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y)
    this.backMaterial.uniforms.uScrollProgress.value = scrollProgress

    this.frontMaterial.uniforms.uTime.value = time
    this.frontMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y)
    this.frontMaterial.uniforms.uScrollProgress.value = scrollProgress

    const speed = this.config.rotationSpeed
    const rotX = time * 0.08 * speed + mouse.y * 0.25
    const rotY = time * 0.12 * speed + mouse.x * 0.35
    const rotZ = Math.sin(time * 0.05) * 0.08

    this.frontMesh.rotation.set(rotX, rotY, rotZ)
    this.backMesh.rotation.set(rotX, rotY, rotZ)
    this.edgeLinesMesh.rotation.copy(this.frontMesh.rotation)

    if (this.particlesMesh) {
      this.particlesMesh.rotation.y = -time * 0.015 * speed
      this.particlesMesh.rotation.x = time * 0.008 * speed
    }

    this.group.position.y = -scrollProgress * 2.2
  }

  public setConfig(newConfig: Partial<PrismLabConfig>) {
    Object.assign(this.config, newConfig)

    if (newConfig.dispersion !== undefined) {
      this.frontMaterial.uniforms.uDispersion.value = this.config.dispersion
      this.backMaterial.uniforms.uDispersion.value = this.config.dispersion
    }
    if (newConfig.roughness !== undefined) {
      this.frontMaterial.uniforms.uRoughness.value = this.config.roughness
      this.backMaterial.uniforms.uRoughness.value = this.config.roughness
    }
    if (newConfig.transmission !== undefined) {
      this.frontMaterial.uniforms.uTransmission.value = this.config.transmission
    }
    if (newConfig.colorTheme !== undefined) {
      this.frontMaterial.uniforms.uColorTheme.value = this.config.colorTheme
      this.backMaterial.uniforms.uColorTheme.value = this.config.colorTheme
      if (this.config.colorTheme === 0) {
        this.edgeLinesMaterial.color.setHex(0x00F0FF)
      } else if (this.config.colorTheme === 1) {
        this.edgeLinesMaterial.color.setHex(0xFF2E93)
      } else {
        this.edgeLinesMaterial.color.setHex(0xFFD166)
      }
    }
    if (newConfig.wireframe !== undefined) {
      this.edgeLinesMesh.visible = this.config.wireframe
    }
  }
}