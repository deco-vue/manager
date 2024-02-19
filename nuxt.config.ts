// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/ui'],
  css: ["~/assets/style/main.scss"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
})
