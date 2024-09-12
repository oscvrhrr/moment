/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**.ejs",
    "./public/**/*.{js,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/openart-c3614209ec04407e89803a2e1c853ae2_raw.jpg')"
      }
    },
  },
  plugins: [],
}

