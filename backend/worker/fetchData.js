// import api from './api'
const api = require('./api')

class FetchData {
  constructor () {
    this.resultCount = 1
    this.onPage = 1
    this.allJobs = []
    this.data()
  }

  async data () {
    try {
      while (this.resultCount > 0) {
        const response = await api.get(`?page=${this.onPage}`)
        const jobsResults = response.data
        this.allJobs.push(...jobsResults)
        this.resultCount = jobsResults.length
        this.onPage++
      }
    } catch (error) {
      console.log(`error, data not fetched ${error}`)
    }
  }
}

module.exports = new FetchData()
