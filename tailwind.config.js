/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#090D1A',
        surface: '#111827',
        card: '#1B2A4A',
        blue: {
          accent: '#4F8EF7',
          dim: '#1e3a6e',
        },
        violet: {
          accent: '#C084FC',
          dim: '#4c1d95',
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-blue': 'glowBlue 3s ease-in-out infinite alternate',
        'glow-violet': 'glowViolet 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowBlue: {
          '0%': { boxShadow: '0 0 20px rgba(79,142,247,0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(79,142,247,0.5)' },
        },
        glowViolet: {
          '0%': { boxShadow: '0 0 20px rgba(192,132,252,0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(192,132,252,0.5)' },
        },
      },
    },
  },
  plugins: [],
}
