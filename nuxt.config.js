export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'final-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // Add Open Graph meta tags for social media sharing
      { hid: 'og:title', property: 'og:title', content: 'My Awesome Website' },
      { hid: 'og:description', property: 'og:description', content: 'Add your Open Graph description here' },
      { hid: 'og:image', property: 'og:image', content: '/og-image.jpg' }, // Replace '/og-image.jpg' with your actual Open Graph image URL
      { hid: 'og:url', property: 'og:url', content: 'https://www.example.com' }, // Replace 'https://www.example.com' with your website URL
      
      // Add Twitter Card meta tags
      { hid: 'twitter:card', name: 'twitter:card', content: 'This is a summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Final Project' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Hope this shows up on twitter' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/twitter-card-image.jpg' }, // Replace '/twitter-card-image.jpg' with your actual Twitter Card image URL
      { hid: 'twitter:site', name: 'twitter:site', content: '@yourtwitterhandle' }, // Replace '@yourtwitterhandle' with your Twitter handle
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
