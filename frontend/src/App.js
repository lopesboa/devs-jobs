import React from 'react'
import './App.css'

import Jobs from './components/pages/jobs/'
import Home from './components/pages/home'
import GlobalStyle from './styles/global'

function App () {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Home />
        <Jobs />

      </div>
    </>
  )
}

export default App
