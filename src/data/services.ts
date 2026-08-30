import type { ServiceItem } from '../types'

export const servicesData: ServiceItem[] = [
  {
    id: 'webgl-3d',
    number: '01',
    title: 'Creative WebGL & 3D Shaders',
    tagline: 'Hyper-immersive, awards-winning interactive 3D web experiences.',
    description: 'We engineer bespoke WebGL scenes, custom GLSL vertex/fragment shaders, particle fluid dynamics, and optical dispersion models that turn standard websites into world-class digital art.',
    features: [
      'Custom GLSL Vertex & Fragment Shaders',
      'Interactive 3D Meshes & GPGPU Particles',
      'Zero-Latency 60/120 FPS Performance Architecture',
      'Photorealistic PBR Materials & Caustics'
    ],
    icon: 'Sparkles',
    badge: 'FLAGSHIP EXPERTISE'
  },
  {
    id: 'motion-gsap',
    number: '02',
    title: 'Kinetic Motion & Micro-Physics',
    tagline: 'Fluid choreography engineered with mathematical precision.',
    description: 'Every scroll, hover, and drag carries organic weight. We leverage GSAP 3, Lenis inertial physics, and responsive SVG/Canvas choreography to captivate visitors and drive conversions.',
    features: [
      'Inertial Lenis Smooth Scroll Architecture',
      'GSAP ScrollTrigger Timeline Orchestration',
      'Split-Type Kinetic Typography Reveals',
      'Magnetic Cursor Trailing & Spring Mechanics'
    ],
    icon: 'Activity',
    badge: 'AWARDS BENCHMARK'
  },
  {
    id: 'brand-experience',
    number: '03',
    title: 'Digital Brand Architecture & UI/UX',
    tagline: 'Avant-garde digital presence for high-growth tech & luxury.',
    description: 'From Silicon Valley AI unicorns to European luxury ateliers, we architect distinctive design systems, Bento Grid UI frameworks, and interactive product narratives.',
    features: [
      'Avant-Garde Typography & Design Tokens',
      'Interactive Bento Grids & HUD Overlays',
      'High-Conversion Landing Page Archetypes',
      'Sound Design & Web Audio API Synthesis'
    ],
    icon: 'Layers',
    badge: 'HIGH IMPACT'
  },
  {
    id: 'fullstack-arch',
    number: '04',
    title: 'High-Performance Frontend Engineering',
    tagline: 'Enterprise-grade stability meets creative avant-garde execution.',
    description: 'We ensure your creative website loads instantaneously worldwide, passes 100/100 Lighthouse audits, is fully accessible, and scales smoothly across every device.',
    features: [
      'Vue 3 / TypeScript Clean Architecture',
      'Adaptive DPR & Mobile GPU Throttling',
      'Automated Asset Optimization & Zero-Leak GC',
      'Complete SEO, OpenGraph & Structured Data'
    ],
    icon: 'Cpu',
    badge: 'ENGINEERING EXCELLENCE'
  }
]
