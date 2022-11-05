/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#6CA649',
        darkBlue: '#1F375F',
        lightBlue: '#1F375F',
        grey: '#464545',
      },
      fontFamily: {
        poppins: `var(--poppins)`,
      },
    },
  },
  plugins: [],
};
