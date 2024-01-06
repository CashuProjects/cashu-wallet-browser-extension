/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*{html,js}', './app/static/templates/*html', './src/app/**/*.{js,jsx,ts,tsx}', './src/app/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'the-blue': '#1A80B9',
        'the-gray': '#313131',
      },
    },
  },
  // ...
};
