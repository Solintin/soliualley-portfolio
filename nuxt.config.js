export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Soliu Alley - Frontend Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/styles/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  },
  //Tailwind Custom Configuartion Path 
  tailwindcss: {
    cssPath: './assets/css/tailwind.css',
    configPath: '~~/tailwind.config.js',
    exposeConfig: false,
    config: {} 
  },
    //Nuxt Fontsawesome Configuaration

    fontawesome: {
    conponent: 'fa',
    icons: {
      solid : true,
      brands : true
    }
    },
}
