/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#511E87',
        secondary: '#868686',
        dark: '#474747',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
}

