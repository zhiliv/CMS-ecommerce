/* eslint-disable import/order */
/* eslint-disable import/first */
/* eslint-disable no-dupe-keys */
// const imageminMozjpeg = require('imagemin-mozjpeg')// const ImageminPlugin = require('imagemin-webpack-plugin').default

// eslint-disable-next-line nuxt/no-cjs-in-config
const { start } = require('./generator-whitelist')
// const { getComponents } = require('./scripts/get-components')
// getComponents()

import * as fs from 'fs'
const whitelist = fs.readFileSync('whitelist.js').toString()

const isDev = process.env.NODE_ENV !== 'production'
export default {
  // target: 'static', // TODO для развертыывания на статическом хостинге
   // serverMiddleware: [{ path: '/api', handler: '~/api/app.js' }], // TODO убрать запуск сервера
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-vue-select',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/content',
    // https://github.com/nuxt-community/auth-module
    // '@nuxtjs/auth-next', // TODO включить для авторизации
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
  ],
  loading: false,

  mode: 'universal',
  ...(!isDev && {
    modern: 'client',
  }),

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    title: 'CMS-ecommerce',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  rootDir: __dirname, // указание корневого каталога для построения ссылок в подключаемых файлах
  // Global CSS: https://go.nuxtjs.dev/config-css
  // '~/assets/css/main.css'
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~~/plugins/vue-demo.js',
    '~~/plugins/draggable',
    // '~/plugins/toast.js',
    { src: '~~/plugins/vue-js-modal.js', mode: 'client' },
    { src: '~~/plugins/vue-validate.js', mode: 'client' },
    // { src: '~~/plugins/vue-lazy-load.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-purgecss',
    // '@nuxt/postcss8',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
  ],
  purgeCSS: {
    mode: 'postcss',
    enabled: !isDev,
    keyframes: true,
    paths: [
      'components/**/*.vue',
      'components/app/*.vue',
      'layouts/**/*.vue',
      'layouts/*.vue',
      'pages/**/*.vue',
      'pages/**/**/*.vue',
      'pages/*.vue',
      'plugins/**/*.js',
    ],
    whitelist: whitelist.split(','),
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js'],
      },
    ],
  },

  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false,
    resourceHints: false,
    // etag: false,
    // static: {
    //   etag: false,
    // },
  },

  auths: {
    strategies: {
      local: {
        //      scheme: "refresh",
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 3600,
        },
        user: {
          property: 'user',
          autoFetch: true,
          // maxAge: 3600
        },
        /*       refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
        property: "refresh_token",
        data: "refresh_token",
      }, */
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          //        refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: '/auth/user', method: 'get' },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCss: true,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
      font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
      video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'),
    },
    ...(!isDev && {
      html: {
        minify: {
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
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true,
        allChunks: true,
      },
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|vue)$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
    }),
    transpile: ['vue-lazy-hydration', 'intersection-observer'],
    extend(config, ctx) {
      start()
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;
      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      });

      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
}
