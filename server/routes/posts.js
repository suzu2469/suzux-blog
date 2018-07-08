const {
  Router
} = require('express')
const router = Router()
const db = require('../db/models')

router.get('/', (req, res, next) => {
  db.posts.findAll().then(posts => {
    res.json(posts)
  })
  return
})

module.exports = router