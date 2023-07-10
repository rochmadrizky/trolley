/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        oren: '#FE5353',
        abu: '#64748b',
        dark: '#111827',
        lumayan: '#e5e7eb',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

