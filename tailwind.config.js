/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Deep Navy
          light: '#1E293B',
          dark: '#020617'
        },
        gold: {
          DEFAULT: '#D4AF37', // Luxury Gold
          light: '#E6C655',
          dark: '#B08E22'
        },
        seafoam: {
          DEFAULT: '#E8F5F2', // Soft Accent Highlight
          light: '#F3FAF8',
          dark: '#C8E6E0'
        },
        luxuryWhite: '#FAF7F2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'scroll-hint': 'scrollHintLine 2s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s infinite ease-in-out',
      },
      keyframes: {
        scrollHintLine: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
