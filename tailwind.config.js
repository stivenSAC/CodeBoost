/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lime': '#A3E635',
        'lime-dark': '#166534',
        'gray-light': '#D1D5DB',
        'smoke': '#111827',
        'bg-soft': '#F9FAFB',
      },
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
        'container-lg': '1280px',
        'container-xl': '1440px',
      },
      spacing: {
        'section': '4rem',
        'section-sm': '2rem',
        'section-lg': '6rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}