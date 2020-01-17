// import api from './api'
const api = require('./api')

class FetchData {
  constructor () {
    this.resultCount = 1
    this.allJobs = []
    this.onPage = 0

    this.getData()
  }

  async getData () {
    try {
      while (this.resultCount > 0) {
        const response = await api.get(`?page=${this.onPage}`)
        const jobsResults = response.data
        this.resultCount = jobsResults.length
        this.allJobs.push(...jobsResults)
        // console.log(this.allJobs.length)
        console.log(`Got, ${this.resultCount}, jobs`)

        this.onPage++
      }
      console.log(`Got, ${this.allJobs.length - 1}, jobs total`)
    } catch (error) {
      console.log(`error, data not fetched ${error}`)
    }
  }
}

module.exports = new FetchData()
