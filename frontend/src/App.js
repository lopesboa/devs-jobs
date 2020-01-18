import React from 'react'
import './App.css'

import Jobs from './components/jobs/'
import GlobalStyle from './styles/global'

function App () {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Jobs />

      </div>
    </>
  )
}

export default App
