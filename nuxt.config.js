// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  head() {
    return {
      title: "Jahon Invest Holding",
      meta: [
        { property: "og:title", content: "Jahon Invest Holding" },
      ],
      
      link: [
        { href: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css' }
      ],

      script: [
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
        },
      ],
    };
  },

  
  css: [
    '@/assets/css/main.css',
  ],
  
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  plugins: [],

  compilerOptions: {
    paths: {
      "~/*": ["./**/**"],
      "@/*": ["./**/**"]
    },
  },

  axios: {
    proxy: true,
    baseURL: 'http://holdings.pythonanywhere.com/api/',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.VITE_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.VITE_BASE_URL
    }
  },

  env: {
    baseUrl: 'http://holdings.pythonanywhere.com/api/'
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
})
