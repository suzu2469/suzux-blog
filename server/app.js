const express = require('express')
const app = express()
const {
  Nuxt,
  Builder
} = require('nuxt')
require('dotenv').config()
const isProd = process.env.NODE_ENV === 'production'

let config = require('../nuxt.config')
config.dev = !isProd
const nuxt = new Nuxt(config)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

const posts = require('./routes/posts')
app.use('/api/posts', posts)

app.use(nuxt.render)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})