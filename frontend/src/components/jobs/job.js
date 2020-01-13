import React from 'react'

// import { Container } from './styles';

export default function job ({ job }) {
  return (
    <div className="{'job'}">
      {job.title}
      {job.company}
    </div>
  )
}
