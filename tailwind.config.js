/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        // Custom Scrollbar Styles for WebKit (Chrome, Safari)
        '::-webkit-scrollbar': {
          width: '10px',
        },
        '::-webkit-scrollbar-track': {
          background: '#f8f8f8',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#c5c5c5',
          borderRadius: '5px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#555',
          borderRadius: '5px',
        },
        // Custom Scrollbar Styles for Firefox
        '.cust-scrollbar': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: 'initial',
          },
          'scrollbar-color': '#c5c5c5 #f8f8f8', // Firefox track color and thumb color
        },
      });
    },
  ],
};
