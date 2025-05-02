/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'charcoal': {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0d0d0d',
          950: '#050505',
        },
        'violet': {
          50: '#f5f0ff',
          100: '#ece0ff',
          200: '#d9c2ff',
          300: '#bf95ff',
          400: '#a45cff',
          500: '#9221ff',
          600: '#8a0aff',
          700: '#7000e3',
          800: '#5d00b8',
          900: '#4c0096',
          950: '#2c0062',
        },
        'accent': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fbd24e',
          400: '#fabe1e',
          500: '#eaa30a',
          600: '#c67e06',
          700: '#a15c08',
          800: '#85470d',
          900: '#6f3b0f',
          950: '#421f05',
        }
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'body': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'shine': 'shine 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px theme("colors.violet.500")' },
          '50%': { boxShadow: '0 0 30px theme("colors.violet.400")' },
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='20' height='20' fill='none' stroke='%23333' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/svg%3E\")",
        'hex-pattern': "url(\"data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.8 0L0 24L13.8 48L27.6 24L13.8 0ZM13.8 4L2.8 24L13.8 44L24.8 24L13.8 4Z' fill='%23333' fill-opacity='0.1'/%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};