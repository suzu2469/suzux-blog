require('dotenv').config()
const apiKey = process.env.API_KEY

module.exports = (req, res, next) => {
  const requestKey = req.get('x-api-key')
  if (apiKey == '') {
    res.json(500).json({
      error: "API Key was not found"
    })
  } else if (apiKey === requestKey) {
    next()
  } else {
    res.status(401).json({
      error: "Not allowed"
    })
    next("Not allowed")
    return
  }
}