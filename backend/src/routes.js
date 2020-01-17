const express = require('express')

const routes = express.Router()

routes.get('/jobs', async (req, res) => {
  res.status(200).json({ messege: 'Hello from Github Jobs' })
})

module.exports = routes
