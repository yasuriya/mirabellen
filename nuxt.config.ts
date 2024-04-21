export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Nunito Sans': true,
      'Abhaya Libre': true,
      download: true,
      inject: true,
    },
  },
})
