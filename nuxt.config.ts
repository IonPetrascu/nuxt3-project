// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/custom.css','~/assets/scss/app.scss'],
  modules: ["@nuxtjs/tailwindcss"],
  app:{
    head:{
      link:[
        {
          rel:'stylesheet',
          href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
        }
      ]
    },
    pageTransition:{
      name:'page',
      mode:'out-in'
    }
  },
  runtimeConfig:{
    secretKey:'',
    public:{
      apiBase:''
    }
  }
})
