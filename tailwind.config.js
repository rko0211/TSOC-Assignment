/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        customMax: {
          max: '1199px'
        },
        flexWidth: {
          max: '1299px'
        },
        'customlg': '1200px',
        'containerxl': '1280px'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Add Rubik font
      },
      fontSize: {
        'custom-sm': '18px', // Use a semantic name
        'custom-text-size': '13px',
      },
      lineHeight: {
        'custom-sm': '28px', // Matching line height
      },
      colors: {
        customTextColor: '#707070',
        customblueBg: ' #0060E7',
        customTextBlack: ' #292929',

      },
    },
  },
  plugins: [],
};
