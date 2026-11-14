/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          background: '#070A14',
          panel: '#0E1424',
          border: '#22304D',
          text: '#E8EEFC',
          moon: '#67E8F9',
          mars: '#FF7A45',
          violet: '#A78BFA',
        },
      },
    },
  },
  plugins: [],
};
