/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#07070a',
        charcoal: '#0c0a14',
        surface: '#12101e',
        'surface-light': '#1a162b',
        'purple-deep': '#240e46',
        'purple-primary': '#7c3aed',
        'purple-glow': '#a855f7',
        'purple-light': '#c084fc',
        lavender: '#ddd6fe',
        'crimson-dark': '#5a1025',
        'crimson-bright': '#ef4444',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 35px -5px rgba(124, 58, 237, 0.4)',
        'purple-glow-lg': '0 0 60px -10px rgba(168, 85, 247, 0.5)',
        'crimson-glow': '0 0 35px -5px rgba(239, 68, 68, 0.4)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(28px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
