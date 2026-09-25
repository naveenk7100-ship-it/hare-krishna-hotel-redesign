/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#FAF7F0',
          100: '#F4ECE0',
          200: '#E7D8C0',
          300: '#D7BE9B',
          400: '#C7A577',
          500: '#B88E56',
          600: '#9C733F',
          700: '#7B5830',
          800: '#5C4023',
          900: '#3D2A18',
        },
        luxe: {
          bg: '#0A0E17',
          card: '#111827',
          cardElevated: '#172033',
          border: 'rgba(215, 190, 155, 0.18)',
          borderLight: 'rgba(215, 190, 155, 0.35)',
          textMuted: '#9CA3AF',
          textSubtle: '#D1D5DB',
        },
        warm: {
          50: '#FDFBF7',
          100: '#F7F3EB',
          200: '#EFE8DA',
          300: '#DFD4C0',
          400: '#C4B59B',
          500: '#9E8D72',
          600: '#7B6C55',
          700: '#594D3C',
          800: '#393125',
          900: '#1C1812',
        }
      },
      boxShadow: {
        'luxe': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px -5px rgba(184, 142, 86, 0.08)',
        'luxe-hover': '0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 0 35px 0 rgba(184, 142, 86, 0.15)',
        'luxe-gold': '0 10px 25px -5px rgba(184, 142, 86, 0.35)',
        'luxe-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
