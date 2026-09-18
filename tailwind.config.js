/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          950: '#04060f',
          900: '#070a18',
          850: '#0a0e22',
          800: '#0e1230',
          700: '#161b3d',
        },
        nebula: {
          50: '#eef0ff',
          100: '#dfe3ff',
          200: '#c4cbff',
          300: '#9aa6ff',
          400: '#6b7bff',
          500: '#4b5bff',
          600: '#3a45e6',
          700: '#2f34b8',
        },
        aqua: {
          300: '#5ef2ff',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        magenta: {
          400: '#f472d4',
          500: '#e649b6',
        },
      },
      animation: {
        'blob-slow': 'blob 22s ease-in-out infinite',
        'blob-slower': 'blob 30s ease-in-out infinite',
        'float-y': 'floatY 7s ease-in-out infinite',
        'float-soft': 'floatSoft 9s ease-in-out infinite',
        'orbit-slow': 'orbit 26s linear infinite',
        'orbit-rev': 'orbitRev 20s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'gradient-pan': 'gradientPan 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'rise': 'rise 0.7s cubic-bezier(0.22,1,0.36,1) both',
      },
      keyframes: {
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,20px) scale(0.95)' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatSoft: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(6deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-r,120px)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-r,120px)) rotate(-360deg)' },
        },
        orbitRev: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-r,90px)) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(var(--orbit-r,90px)) rotate(360deg)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.55', filter: 'blur(60px)' },
          '50%': { opacity: '0.9', filter: 'blur(80px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientPan: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
