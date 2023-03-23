/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-cell': '#f0d9b5',
        'dark-cell': '#b58863',
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
    plugins: [],
  }
}
