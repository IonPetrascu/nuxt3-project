// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/custom.css','~/assets/scss/app.scss'],
  modules: ["@nuxtjs/tailwindcss"]
})