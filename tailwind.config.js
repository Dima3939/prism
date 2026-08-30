/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          950: '#06070B',
          900: '#0D0E15',
          800: '#141622',
          700: '#1D202D'
        },
        prism: {
          cyan: '#00F0FF',
          magenta: '#FF2E93',
          violet: '#7B2CBF',
          gold: '#FFD166',
          electric: '#4D6BFE'
        },
        hud: {
          text: '#9496A1',
          muted: '#525462',
          border: 'rgba(255, 255, 255, 0.08)'
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}