/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5dd',
          300: '#7d99c0',
          400: '#4a6a9b',
          500: '#2c4870',
          600: '#1A2B4C',
          700: '#15263d',
          800: '#0e1a2c',
          900: '#070f1a',
          950: '#03070f',
        },
        gold: {
          50: '#fbf7ed',
          100: '#f5ecd0',
          200: '#ead8a1',
          300: '#ddbd6d',
          400: '#d4a94a',
          500: '#c4922f',
          600: '#a87323',
          700: '#85561f',
          800: '#6e451f',
          900: '#5d3a1f',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
