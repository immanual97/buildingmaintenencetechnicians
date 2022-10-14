module.exports = {
  purge: [],
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/img/login.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
