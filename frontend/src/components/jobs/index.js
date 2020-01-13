import React, { Component } from 'react'

import Jobs from './jobs'

const mockJobs = [
  {
    title: 'SWE 1',
    company: 'Google'
  }
]
export default class jobs extends Component {
  render () {
    return (
      <div>
        <Jobs jobs={mockJobs} />
      </div>
    )
  }
}
