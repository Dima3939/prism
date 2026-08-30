# PRISM — Creative WebGL & 3D Interactive Agency

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-00F0FF?style=for-the-badge&logo=vercel)](https://dima3939.github.io/prism/)
[![Vue 3](https://img.shields.io/badge/Vue_3-Composition_API-42b883?style=for-the-badge&logo=vuedotjs)](https://vuejs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL_2.0-black?style=for-the-badge&logo=threedotjs)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP_3-ScrollTrigger-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

An Awwwards-caliber creative agency web experience built with **Vue 3, Three.js, Custom GLSL Shaders, and GSAP**. Features a real-time refractive physical 3D crystal gem, dual-pass chromatic dispersion, interactive 3D Shader Lab sandbox, horizontal pinned showcase gallery, bespoke sound synthesizers, and buttery-smooth Lenis inertial physics.

---

## 🌟 Key Architectural Features

- **💎 Dual-Pass 3D Prismatic Crystal:**
  - Custom GLSL vertex & fragment shaders (`prism.vert.glsl`, `prism.frag.glsl`) with flat facet normal computation (`dFdx` / `dFdy`).
  - True internal spectral chromatic dispersion ($R, G, B$ wavelength separation) with animated refractive caustics.
  - Multi-light specular highlights, Fresnel rim sheen, and subtle neon facet lines.

- **🧪 Interactive Real-Time 3D Shader Lab:**
  - Live control deck allowing visitors to tweak dispersion, micro-roughness, transmission, rotation speed, wireframe mode, and spectral palettes (*Prism Rainbow, Cyber Magenta, Quantum Gold*) in real time.

- **🎭 Kinetic Typography & Choreography:**
  - Massive condensed display typography (`Anton` + `Syne`) layered with depth behind the 3D crystal canvas.
  - GSAP ScrollTrigger timeline reveals, scroll-driven word-by-word Manifesto scrub, and dynamic magnetic buttons.

- **🏎️ Fluid Inertial Motion:**
  - Integrated `@studio-freight/lenis` smooth scrolling synchronized directly with `ScrollTrigger.update` and requestAnimationFrame ticker loop.

- **🔊 Zero-Dependency Web Audio Synthesizer:**
  - Native Web Audio API procedural sound engine generating subtle micro-clicks and futuristic spatial swooshes on hover/interactions.

- **📱 Full-Spectrum Responsiveness:**
  - Optimized 120 FPS performance across desktop, tablet, and mobile with dynamic camera scaling and responsive layout adaptations.

---

## 🛠️ Tech Stack & Dependencies

- **Core Framework:** Vue 3 (`<script setup lang="ts">`, Composition API)
- **3D Graphics Engine:** Three.js (WebGL 2.0, Custom Shaders, BufferGeometry)
- **Animation Suite:** GSAP 3 (ScrollTrigger, Timelines)
- **Smooth Scroll:** @studio-freight/lenis
- **Styling:** Tailwind CSS 3.4 + Custom Glassmorphism & PostCSS
- **Build System:** Vite 5 with inline GLSL transformer plugin
- **Icons:** Lucide Icons Vue

---

## 🚀 Quick Start & Development

```bash
# Clone the repository
git clone https://github.com/Dima3939/prism.git
cd prism

# Install dependencies
npm install

# Launch local development server
npm run dev

# Compile production build
npm run build
```

---

## 📦 Project Structure

```
prism/
├── .github/workflows/deploy.yml   # Automated GitHub Pages CI/CD Pipeline
├── public/                       # Static public assets
├── src/
│   ├── assets/css/               # Tailwind & custom CSS layers
│   ├── components/
│   │   ├── home/                 # Hero, Manifesto, Showcase, ShaderLab, Bento, Contact
│   │   ├── layout/               # Header with world clocks, Footer with marquee
│   │   └── ui/                   # Modal, Badges, Buttons, Sliders, Custom Cursor
│   ├── composables/              # useCursor, useSound, useLenis
│   ├── data/                     # Curated project cases & studio data
│   ├── types/                    # TypeScript interfaces & types
│   ├── webgl/                    # WebGLApp, PrismScene, and GLSL shaders
│   ├── App.vue                   # Root application orchestrator
│   └── main.ts                   # Vue app initialization
├── index.html                    # HTML entry point with web fonts
├── vite.config.ts                # Vite config with relative base & GLSL plugin
└── tailwind.config.js            # Custom design tokens & palette
```

---

## 📄 License

MIT License — Crafted for creative portfolio presentation.