const express = require('express')

class App {
  constructor () {
    this.express = express()

    process.env.TZ = 'America/Sao_Paulo'

    this.routes()
  }

  routes () {
  }
}

module.exports = new App().express
