/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        op: {
          darkest: '#06090e',
          dark: '#0c121c',
          card: '#121a28',
          hover: '#182438',
          border: '#1e2c44',
          laser: '#ff2a5f',
          fire: '#ff6b00',
          cryo: '#00f2fe',
          kinetic: '#9d4edd',
          gold: '#ffb703',
          green: '#10b981',
          muted: '#8ba2c4',
          dim: '#5f7596',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-laser': '0 0 25px -4px rgba(255, 42, 95, 0.4)',
        'glow-cryo': '0 0 25px -4px rgba(0, 242, 254, 0.4)',
        'glow-kinetic': '0 0 25px -4px rgba(157, 78, 221, 0.4)',
        'glow-fire': '0 0 25px -4px rgba(255, 107, 0, 0.4)',
      }
    },
  },
  plugins: [],
};
