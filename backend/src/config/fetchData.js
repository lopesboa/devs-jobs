// import api from './api'
const api = require('./api')

class FetchData {
  constructor () {
    this.allJobs = []
    this.resultCount = 1
    this.onPage = 0

    this.getData()
  }

  async getData () {
    try {
      while (this.resultCount > 0) {
        const response = await api.get(`?page=${this.onPage}`)
        const jobsResults = response.data

        this.allJobs.push(...jobsResults)
        this.resultCount = jobsResults.length
        // console.log(`Got, ${this.resultCount}, jobs`)

        this.onPage++
      }
      // console.log(`Got, ${this.allJobs.length}, jobs total`)
    } catch (error) {
      console.log(`error, data not fetched ${error}`)
    }
  }
}

module.exports = new FetchData()
