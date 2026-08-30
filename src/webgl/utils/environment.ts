import * as THREE from 'three'

export function createStudioEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmremGenerator = new THREE.PMREMGenerator(renderer)
  pmremGenerator.compileEquirectangularShader()

  // Generate a rich 2048x1024 HDR studio lighting texture on canvas
  const canvas = document.createElement('canvas')
  canvas.width = 2048
  canvas.height = 1024
  const ctx = canvas.getContext('2d')!

  // Deep luxury dark background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 1024)
  bgGrad.addColorStop(0, '#040508')
  bgGrad.addColorStop(0.5, '#080912')
  bgGrad.addColorStop(1, '#040508')
  ctx.fillStyle = bgGrad
  ctx.fillRect(0, 0, 2048, 1024)

  // 1. Brilliant Neon Cyan Light Strip (Top-Right)
  const cyanGrad = ctx.createRadialGradient(1500, 300, 0, 1500, 300, 450)
  cyanGrad.addColorStop(0, 'rgba(0, 240, 255, 1)')
  cyanGrad.addColorStop(0.3, 'rgba(0, 200, 255, 0.8)')
  cyanGrad.addColorStop(0.7, 'rgba(0, 120, 255, 0.3)')
  cyanGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = cyanGrad
  ctx.fillRect(1000, 0, 1000, 700)

  // 2. Hot Neon Magenta & Violet Light Strip (Bottom-Left)
  const magGrad = ctx.createRadialGradient(400, 700, 0, 400, 700, 500)
  magGrad.addColorStop(0, 'rgba(255, 46, 147, 1)')
  magGrad.addColorStop(0.35, 'rgba(200, 30, 180, 0.75)')
  magGrad.addColorStop(0.7, 'rgba(123, 44, 191, 0.3)')
  magGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = magGrad
  ctx.fillRect(0, 300, 900, 724)

  // 3. Golden Amber Core Highlight (Top-Center)
  const goldGrad = ctx.createRadialGradient(1024, 150, 0, 1024, 150, 350)
  goldGrad.addColorStop(0, 'rgba(255, 255, 255, 1)')
  goldGrad.addColorStop(0.25, 'rgba(255, 209, 102, 0.9)')
  goldGrad.addColorStop(0.6, 'rgba(255, 140, 0, 0.3)')
  goldGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = goldGrad
  ctx.fillRect(700, 0, 650, 450)

  // 4. White Specular Diamond Kickers (Sharp light bars)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
  ctx.fillRect(950, 80, 150, 20)
  ctx.fillRect(1400, 250, 120, 15)

  const envTexture = new THREE.CanvasTexture(canvas)
  envTexture.mapping = THREE.EquirectangularReflectionMapping
  envTexture.needsUpdate = true

  const renderTarget = pmremGenerator.fromEquirectangular(envTexture)
  pmremGenerator.dispose()
  envTexture.dispose()

  return renderTarget.texture
}