import React from 'react'

import { Header } from './style'

export default function header () {
  return (
    <Header className='container header'>
      <h1 className='fontzero'>Lorem ipsum dolor sit.</h1>
      <article>
        <div className='header__logo-box'>
          <img className='header__logo' src='_blank' alt='' />
        </div>

        <div className='header__content'>
          <h2 className='heading-primary'>Lorem, ipsum dolor.</h2>
          <p className='tagline'>Lorem ipsum dolor sit amet.</p>
          <a className='btn btn--white btn--animated' href='http://' title='Saiba Mais' rel='Saiba Mais'>Saiba Mais</a>
        </div>
      </article>
    </Header>
  )
}
