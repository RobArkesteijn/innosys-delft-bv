// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    'vue3-carousel-nuxt',
    '@nuxt/image',
    'nuxt-icon',
    '@vee-validate/nuxt',
    '@nuxt/ui',
  ],
  image: {
    format: ['webp'],
  },
  ui: {
    global: true,
    safelistColors: ['innosysShaft'],
    icons: ['material-symbols']
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
  },
});
