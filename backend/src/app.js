const express = require('express')

const routes = require('./routes')
const cronJobs = require('./config/')

class App {
  constructor () {
    this.express = express()

    process.env.TZ = 'America/Sao_Paulo'

    this.cronJobs()
    this.routes()
  }

  routes () {
    this.express.use(routes)
  }

  cronJobs () {
    this.express.use(cronJobs)
  }
}

module.exports = new App().express
