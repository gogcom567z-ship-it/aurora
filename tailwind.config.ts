import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        mono: ['SF Mono', 'JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Aurora Brand Colors
        aurora: {
          dark: '#040812',
          darker: '#000000',
          bg: '#0a0e1a',
          card: '#101c34',
          border: '#1a2c4d',
          accent: '#00e5ff',
          accentDark: '#00b8cc',
          gold: '#ffd700',
          goldDark: '#ccaa00',
          platinum: '#e5e4e2',
          success: '#00ff9c',
          warning: '#ffb800',
          error: '#ff4d6d',
        },
        // Neutral
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.04)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
      borderColor: {
        glass: 'rgba(255, 255, 255, 0.08)',
      },
      backdropBlur: {
        glass: '16px',
        'glass-sm': '8px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 229, 255, 0.3)',
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.3)',
        'glow-sm': '0 0 10px rgba(0, 229, 255, 0.2)',
        glass: '0 8px 32px rgba(31, 38, 135, 0.37)',
        'card-dark': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        // Aurora Animations
        'aurora-pulse': 'aurora-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora-glow': 'aurora-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-in': 'slide-in 0.4s ease-out',
        'slide-in-up': 'slide-in-up 0.4s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-light': 'bounce-light 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        'aurora-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'aurora-glow': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(0, 229, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.6)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-in': {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'scale-in': {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-light': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      transitionTimingFunction: {
        'spring-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring-in': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        'glass': '0.5px',
      },
      opacity: {
        'glass': '0.04',
        'glass-md': '0.08',
      },
    },
  },
  plugins: [
    // Glass morphism plugin
    plugin(function ({ addComponents, e, theme }) {
      const colors = theme('colors')
      const glassComponents = {
        '.glass': {
          '@apply relative rounded-xl border border-glass bg-glass backdrop-blur-glass shadow-glass': {},
        },
        '.glass-lg': {
          '@apply relative rounded-2xl border border-glass bg-glass backdrop-blur-glass shadow-glass': {},
        },
        '.glass-dark': {
          '@apply relative rounded-xl border border-glass bg-black/20 backdrop-blur-glass shadow-card-dark': {},
        },
        '.card-glass': {
          '@apply relative rounded-2xl border border-glass bg-glass/30 backdrop-blur-glass': {},
        },
        '.aurora-glow': {
          '@apply shadow-glow': {},
        },
        '.aurora-glow-gold': {
          '@apply shadow-glow-gold': {},
        },
        '.text-gradient': {
          '@apply bg-gradient-to-r from-aurora-accent to-aurora-gold bg-clip-text text-transparent': {},
        },
        '.btn-primary': {
          '@apply px-6 py-3 rounded-xl bg-gradient-to-r from-aurora-accent to-aurora-accent hover:from-aurora-accentDark hover:to-aurora-accentDark text-black font-semibold transition-all duration-200 hover:scale-105 active:scale-95': {},
        },
        '.btn-secondary': {
          '@apply px-6 py-3 rounded-xl border border-aurora-accent/30 text-aurora-accent hover:bg-aurora-accent/10 font-semibold transition-all duration-200': {},
        },
        '.btn-gold': {
          '@apply px-6 py-3 rounded-xl bg-gradient-to-r from-aurora-gold to-aurora-goldDark hover:from-aurora-goldDark hover:to-aurora-gold text-black font-semibold transition-all duration-200 hover:scale-105 active:scale-95': {},
        },
      }
      addComponents(glassComponents)
    }),

    // Utility plugins
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.no-tap-highlight': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective': {
          perspective: '1000px',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
  darkMode: ['class'],
}

export default config
