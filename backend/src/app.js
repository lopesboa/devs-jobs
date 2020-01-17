const express = require('express')

const routes = require('./routes')

class App {
  constructor () {
    this.express = express()

    process.env.TZ = 'America/Sao_Paulo'

    this.routes()
  }

  routes () {
    this.express.use(routes)
  }
}

module.exports = new App().express
