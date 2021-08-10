module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin': 'spin 7s linear infinite',
      },
      backgroundImage: theme => ({
        'hero-wallpaper': "url('@/assets/images/Home-Wallpaper.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
