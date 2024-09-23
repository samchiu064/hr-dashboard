// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxt/eslint'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'primary-red': '#FF5151',
            'secondary-red': '#F64848',
            'accent-red': '#FF6262',
            'light-red': '#FF9797',
            tertiary: '#121843',
            'primary-subtitle': '#686868',
            'secondary-subtitle': '#686868',
            'secondary-title': '#303030',
          },
          fontFamily: {
            'sans-tc': 'Chocolate Classical Sans, Poppins, sans-serif',
          },
        },
      },
    },
  },
})
