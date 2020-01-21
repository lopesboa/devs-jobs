import React from 'react'

import Job from './job'

export default function jobs ({ jobs }) {
  return (
    <div className='job-list'>
      <h1>Entry Level Software Jobs</h1>

      {
        jobs.map(job => <Job job={job} key={job.key} />)
      }
    </div>
  )
}
