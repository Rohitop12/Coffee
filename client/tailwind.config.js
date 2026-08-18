/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brewed: {
          cream: '#F7F3EA',
          'cream-dark': '#EFE8DA',
          dark: '#171512',
          brown: '#6B4226',
          'brown-light': '#8C5734',
          accent: '#C98B52',
          'accent-light': '#E5A56A',
          card: '#FFFDF8',
          muted: '#766F65',
          border: '#DED6C9',
          'border-light': '#ECE6DA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['DM Sans', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(23, 21, 18, 0.04), 0 1px 4px -1px rgba(23, 21, 18, 0.02)',
        'soft-md': '0 12px 32px -8px rgba(23, 21, 18, 0.08), 0 4px 12px -2px rgba(23, 21, 18, 0.04)',
        'soft-lg': '0 24px 48px -12px rgba(23, 21, 18, 0.12), 0 8px 24px -4px rgba(23, 21, 18, 0.06)',
        'glow': '0 0 24px -4px rgba(201, 139, 82, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
}
