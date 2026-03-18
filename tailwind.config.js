module.exports = {
  content: [
    './**/*.html',
    './style.css',
    './script.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E40AF',
        'secondary': '#FBBF24',
        'dark': '#0f172a',
        'estate': {
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
        },
        'gold': '#fbbf24',
        'gold-accent': '#fef3c7',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
