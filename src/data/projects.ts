import type { ProjectCase } from '../types'

export const projectsData: ProjectCase[] = [
  {
    id: 'neo-vortex',
    number: '01',
    title: 'NEO VORTEX',
    subtitle: 'Autonomous AI Neural Compute Platform',
    client: 'Vortex Quantum Labs (San Francisco)',
    year: '2026',
    role: 'Creative WebGL Engineering & Art Direction',
    category: 'WEBGL & 3D',
    tags: ['THREE.JS', 'CUSTOM GLSL', 'PARTICLE PHYSICS', 'GSAP SCROLL'],
    awards: ['Awwwards Site of the Day', 'FWA of the Day', 'CSSDA Best UI/UX'],
    metrics: [
      { label: 'Conversion Lift', value: '+142%' },
      { label: 'Avg Session Time', value: '3m 48s' },
      { label: 'Series-A Funding Raised', value: '$24M' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#00F0FF',
    description: 'A groundbreaking WebGL interactive experience representing quantum neural compute matrices through high-density particle fluid dynamics and optical chromatic dispersion.',
    challenge: 'Deliver 120 FPS high-fidelity 3D fluid simulations across desktop and mobile without stalling main-thread UI interactions.',
    solution: 'Engineered an instanced particle computation engine utilizing GPGPU curl noise textures, GPU instanced meshes, and adaptive dynamic resolution scaling.',
    techStack: ['Vue 3', 'Three.js GPGPU', 'GLSL Shaders', 'GSAP ScrollTrigger', 'Lenis Smooth Scroll', 'TailwindCSS']
  },
  {
    id: 'aetheria-xr',
    number: '02',
    title: 'AETHERIA XR',
    subtitle: 'Spatial Computing & Mixed Reality OS',
    client: 'Aetheria Systems (Zurich / Tokyo)',
    year: '2025',
    role: 'Lead Spatial Frontend Architect',
    category: 'SPATIAL XR',
    tags: ['WEBXR', 'THREE.JS', 'PHYSICS ENGINE', 'SHADERS'],
    awards: ['Awwwards Developer Award', 'FWA of the Month'],
    metrics: [
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'App Store Waitlist', value: '180K+' },
      { label: 'Global Press Features', value: '35+' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#FF2E93',
    description: 'An avant-garde digital ecosystem showcasing next-generation holographic interface primitives, spatial depth audio, and interactive refractive glass geometry.',
    challenge: 'Translating complex spatial UI navigation paradigms into intuitive browser gestures with instantaneous feedback.',
    solution: 'Designed custom raycasting controllers paired with inertia-weighted spring kinematics and optical Fresnel shader material pipelines.',
    techStack: ['Vue 3 Composition API', 'Three.js', 'Web Audio API', 'Custom Postprocessing', 'TypeScript']
  },
  {
    id: 'lumina-void',
    number: '03',
    title: 'LUMINA VOID',
    subtitle: 'Haute Horlogerie & Digital Timepiece Exhibition',
    client: 'Atelier Lumina (Geneva)',
    year: '2025',
    role: 'Creative WebGL & Motion Developer',
    category: 'LUXURY MOTION',
    tags: ['RAYMARCHING', 'PBR MATERIALS', 'KINETIC MOTION', 'LENIS'],
    awards: ['CSSDA Special Kudos', 'Awwwards Mobile of the Week'],
    metrics: [
      { label: 'Pre-Order Volume', value: '$8.2M' },
      { label: 'Bounce Rate Reduction', value: '-38%' },
      { label: 'Lighthouse Performance', value: '98/100' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#FFD166',
    description: 'A digital high-luxury gallery unveiling a limited-edition tourbillon mechanical watch through interactive 3D exploded assemblies and micro-precision animations.',
    challenge: 'Achieving photorealistic metallic reflections, diamond caustics, and sapphire crystal transparency in real-time WebGL.',
    solution: 'Implemented HDRI environment probe reflections, custom transmission roughness shaders, and cinematic GSAP camera path interpolations.',
    techStack: ['Vue 3', 'Three.js PBR', 'GLSL Transmission', 'GSAP Timeline', 'Lenis']
  },
  {
    id: 'kroma-ai',
    number: '04',
    title: 'KROMA AI',
    subtitle: 'Generative Diffusion Intelligence Suite',
    client: 'Kroma Labs (New York)',
    year: '2026',
    role: 'Interactive Developer & System Designer',
    category: 'AI PRODUCT',
    tags: ['GENERATIVE CANVAS', 'WEB WORKERS', 'BENTO UI', 'GLSL NOISE'],
    awards: ['Awwwards Honorable Mention', 'FWA of the Day'],
    metrics: [
      { label: 'Monthly Active Users', value: '1.2M+' },
      { label: 'Design System Adoption', value: '100%' },
      { label: 'Customer Retention', value: '91%' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#4D6BFE',
    description: 'An ultra-refined SaaS interface combining generative noise shaders, interactive bento grid layouts, and real-time neural canvas rendering.',
    challenge: 'Rendering heavy multi-layered canvas previews without blocking standard interactive Vue state mutations.',
    solution: 'Delegated background image synthesis to Web Workers while maintaining a lightweight GLSL post-processing pass on the main thread.',
    techStack: ['Vue 3', 'TypeScript', 'Web Workers', 'TailwindCSS', 'GSAP Flip']
  },
  {
    id: 'chrono-pulse',
    number: '05',
    title: 'CHRONO PULSE',
    subtitle: 'Hyper-Performance Electric Hypercar Showcase',
    client: 'Chrono Motors (Milan / Munich)',
    year: '2025',
    role: 'Lead Creative Developer',
    category: 'IMMERSIVE BRAND',
    tags: ['3D CONFIGURATOR', 'THREE.JS', 'AUDIO SYNTH', 'GSAP SCROLL'],
    awards: ['Awwwards Site of the Month Nominee', 'CSSDA Site of the Day'],
    metrics: [
      { label: 'VIP Test Drive Bookings', value: '4,200+' },
      { label: 'Global Reach', value: '3.8M Views' },
      { label: 'Engagement Rate', value: '14.6%' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#00F0FF',
    description: 'A high-octane 3D car configurator featuring real-time carbon fiber shaders, aerodynamic particle wind tunnels, and dynamic engine acoustic synthesis.',
    challenge: 'Smoothly streaming high-poly GLTF CAD models without long initial loader pauses.',
    solution: 'Implemented Draco mesh compression, progressive LOD level-of-detail streaming, and Web Audio API Doppler effect synthesis.',
    techStack: ['Vue 3', 'Three.js Draco', 'Custom GLSL Shaders', 'Web Audio API', 'GSAP']
  }
]
