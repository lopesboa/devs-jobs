// import axios from 'axios'
const axios = require('axios')

const api = axios.create({
  baseURL: 'https://jobs.github.com/positions.json'
})

module.exports = api
