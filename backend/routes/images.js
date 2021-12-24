var express = require('express')
var router = express.Router()

// define the get images route
router.get('/', function (req, res) {
  res.json('Birds home page')
})

// define the post images route
router.post('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router