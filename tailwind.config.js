/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#070A0F',       // page background (graphite near-black)
        panel: '#0E141C',      // elevated cards
        hair: '#1C2733',       // hairline borders
        silver: '#E6EDF3',     // primary text
        muted: '#8A99A8',      // secondary text
        cyan: '#38E1FF',       // primary neon accent
        electric: '#4C7DFF',   // secondary accent
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(56, 225, 255, 0.45)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
