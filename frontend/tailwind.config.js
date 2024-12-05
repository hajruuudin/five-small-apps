/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-md': { max: '767px' },
      },
      colors: {
        'dark': {
          'bg' : '#1D1B1B',
          'sidebar' : "#353131"
        },
        'tones' : {
          'velvet' : "#B14044",
          'blood' : "#962F31",
          'pale' : "#A05A5A"
        },
        'white': "#F1E2E2"
      }
    },
  },
  plugins: [],
}

