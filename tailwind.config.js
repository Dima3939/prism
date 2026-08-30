/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#06070B',
          900: '#08080C',
          800: '#0E1017',
          700: '#151722',
          600: '#1F2232',
        },
        prism: {
          cyan: '#00F0FF',
          magenta: '#FF2E93',
          violet: '#7B2CBF',
          gold: '#FFD166',
          electric: '#4D6BFE'
        },
        hud: {
          border: 'rgba(255, 255, 255, 0.08)',
          glass: 'rgba(14, 16, 23, 0.65)',
          text: '#9496A1'
        }
      },
      fontFamily: {
        condensed: ['Anton', 'Syne', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Grotesk"', '"JetBrains Mono"', 'monospace'],
        body: ['Inter', '"Plus Jakarta Sans"', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}