const {
  Router
} = require('express')
const router = Router()
const db = require('../db/models')
const checkApikey = require('../middleware/checkApikey')

router.get('/', async (req, res, next) => {
  const posts = await db.posts.findAll()
  res.json(posts)
  return
})

router.post('/', checkApikey, async (req, res, next) => {
  try {
    const post = await db.posts.create({
      title: req.body.title,
      body: req.body.body
    })
    res.json(post)
  } catch (e) {
    res.status(400).json({
      error: 'Bad request.'
    })
  }
  return
})

router.put('/:id', checkApikey, async (req, res, next) => {
  const id = parseInt(req.params.id)
  try {
    const post = await db.posts.findById(id)
    await post.update({
      title: req.body.title || post.title,
      body: req.body.body || post.body
    })
    res.json(post)
  } catch (e) {
    res.status(404).json({
      error: 'Not found.'
    })
  }
  return
})

router.delete('/:id', checkApikey, async (req, res, next) => {
  const id = parseInt(req.params.id)
  try {
    const post = await db.posts.findById(id)
    post.destroy()
    res.json({
      message: 'Completed'
    })
  } catch (e) {
    res.status(404).json({
      error: 'Not found'
    })
  }
  return
})

module.exports = router