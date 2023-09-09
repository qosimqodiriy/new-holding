export default defineNuxtConfig({
  ssr: true,

  head() {
    return {
      title: "Jahon Invest Holding",
      meta: [
        { property: "type", content: "website" },
        { property: "og:type", content: "website" },

        { property: "title", content: "Jahon Invest Holding" },
        { property: "og:title", content: "Jahon Invest Holding" },

        { property: "url", content: "https://holdings.pythonanywhere.com" },
        { property: "og:url", content: "https://holdings.pythonanywhere.com" },
        
        { name: "keywords", content: "Jahon Invest Holding, Jahon invest, Holding." },
        { name: "og:keywords", content: "Jahon Invest Holding, Jahon invest, Holding." },
        
        { property: "image", content: "https://holdings.pythonanywhere.com/media/dropzone/business_multiple/2023/9/9/1694258864273484.png.900x900_q85.webp" },
        { property: "og:image", content: "https://holdings.pythonanywhere.com/media/dropzone/business_multiple/2023/9/9/1694258864273484.png.900x900_q85.webp" },

        { name: 'description', content: "Yillar davomida JIP o'zini ishonchli va mas'uliyatli ishlab chiqaruvchi sifatida ko'rsatdi, uning mahsulotlariga ishonchingiz komil bo'ladi. Bugungi kunda korxona Markaziy Osiyodagi eng yirik avtomatlashtirilgan ishlab chiqarish majmualaridan biriga ega." },
        { name: 'og:description', content: "Yillar davomida JIP o'zini ishonchli va mas'uliyatli ishlab chiqaruvchi sifatida ko'rsatdi, uning mahsulotlariga ishonchingiz komil bo'ladi. Bugungi kunda korxona Markaziy Osiyodagi eng yirik avtomatlashtirilgan ishlab chiqarish majmualaridan biriga ega." },
      ],
      
      // link: [
      //   { href: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css' }
      // ],

      // script: [
      //   {
      //     type: 'text/javascript',
      //     src: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
      //   },
      // ],
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
      "~/*": ["./**/**/**/.*"],
      "@/*": ["./**/**/**.*"]
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
