/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'shadow1': '0px 8px 15px 0px #1414141F',
        'shadow2': '0px 0px 4px 0px #1414141A',
      }
    },
  },
  plugins: [],
}

