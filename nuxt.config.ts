// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: '',
    preference: 'light',
  },

  compatibilityDate: '2024-08-22',

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  css: ['@/assets/scss/main.scss'],

  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  image: {
    format: ['webp'],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-icon',
    '@vee-validate/nuxt',
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],

  runtimeConfig: {
    googleMapsApiKey: '',
  },

  transpile: ['gsap'],

  ui: {
    global: true,
    safelistColors: ['innosysShaft'],
    icons: ['material-symbols'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
})
