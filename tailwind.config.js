/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#E8A020',
          light: '#F0B84A',
          dark: '#C88010',
        },
        navy: {
          DEFAULT: '#0D1B2E',
          2: '#1E3A55',
          light: '#2A4F70',
        },
        gray: {
          site: '#F5F5F5',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Arimo"', 'sans-serif'],
      },
      animation: {
        'nav-fade-in':    'navFadeIn 0.5s ease both',
        'hero-slide':     'heroSlideLeft 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both',
        'hero-fade-up':   'heroFadeUp 0.6s ease 0.4s both',
        'card-stagger':   'cardStagger 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'count-pulse':    'countPulse 0.7s cubic-bezier(0.34,1.56,0.64,1) both',
        'pulse-ring':     'pulseRing 2s ease-in-out infinite',
        'logo-fade':      'logoFade 0.6s ease both',
        'grow-bar':       'growBar 0.5s ease 0.5s both',
        'ken-burns':      'kenBurns 8s ease-in-out infinite alternate',
        'shimmer':        'shimmer 2.5s linear infinite',
        'tab-slide':      'tabSlide 0.3s ease both',
        'form-slide-up':  'formSlideUp 0.5s ease both',
      },
      keyframes: {
        navFadeIn: {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        heroSlideLeft: {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        heroFadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        cardStagger: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        countPulse: {
          '0%':   { opacity: '0', transform: 'scale(0.6)' },
          '70%':  { transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseRing: {
          '0%':   { boxShadow: '0 0 0 0 rgba(232,160,32,0.6)' },
          '70%':  { boxShadow: '0 0 0 20px rgba(232,160,32,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(232,160,32,0)' },
        },
        logoFade: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '0.45', transform: 'translateY(0)' },
        },
        growBar: {
          from: { width: '0' },
          to:   { width: '40px' },
        },
        kenBurns: {
          from: { transform: 'scale(1)' },
          to:   { transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        tabSlide: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        formSlideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to top, rgba(13,27,46,0.92) 40%, rgba(13,27,46,0.2))',
        'gradient-card': 'linear-gradient(to top, rgba(13,27,46,0.95) 0%, transparent 60%)',
      },
      boxShadow: {
        gold: '0 4px 20px rgba(232,160,32,0.15)',
        'gold-lg': '0 8px 40px rgba(232,160,32,0.25)',
        card: '0 4px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
