import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e3e7dc',
          200: '#c8d0ba',
          300: '#a8b88b',
          400: '#8B9A6B',
          500: '#6B7A4B',
          600: '#556240',
          700: '#434d34',
          800: '#383f2d',
          900: '#303628',
        },
        cream: {
          50: '#F2EBE0',
          100: '#EBE3D6',
          200: '#E3D9CA',
          300: '#D4C5B5',
          400: '#C4A77D',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(139, 154, 107, 0.08)',
        'soft-lg': '0 10px 40px rgba(139, 154, 107, 0.12)',
        'soft-xl': '0 20px 60px rgba(139, 154, 107, 0.15)',
        'inner-soft': 'inset 0 2px 10px rgba(139, 154, 107, 0.05)',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        meineauszeit: {
          'primary': '#8B9A6B',
          'primary-focus': '#6B7A4B',
          'primary-content': '#FDFCFA',
          'secondary': '#D4C5B5',
          'secondary-focus': '#C4A77D',
          'secondary-content': '#3D3D3D',
          'accent': '#C4A77D',
          'accent-focus': '#B39567',
          'accent-content': '#3D3D3D',
          'neutral': '#3D3D3D',
          'neutral-focus': '#2D2D2D',
          'neutral-content': '#FDFCFA',
          'base-100': '#FDFCFA',
          'base-200': '#F5F2ED',
          'base-300': '#EDE7E0',
          'base-content': '#3D3D3D',
          'info': '#7CB4B8',
          'success': '#8B9A6B',
          'warning': '#C4A77D',
          'error': '#C17B7B',
          '--rounded-box': '0.75rem',
          '--rounded-btn': '0.375rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.98',
        },
      },
    ],
  },
};

export default config;
