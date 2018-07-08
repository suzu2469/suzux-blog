module.exports = {
  head: {
    title: 'Suzux Blog',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css'
    }]
  },
  css: [{
    src: 'reset-css/reset.css',
    lang: 'css'
  }, {
    src: 'bulma/bulma.sass',
    lang: 'sass'
  }, {
    src: '@/assets/css/app.css',
    lang: 'css'
  }],
  modules: [
    '@nuxtjs/axios'
  ]
}