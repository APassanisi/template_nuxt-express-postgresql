export default {
  target: 'static',
  head: {
    title: 'template_static',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Amaranth&display=swap',
      },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-67915014-1',
      },
    ],
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.andrewpassanisi.com/',
  },
  build: {
    'html.minify': {
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true,
    },
  },
}
