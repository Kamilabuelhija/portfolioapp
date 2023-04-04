import React from 'react'
import "./header.css"
import CTA from './CTA'
import me111 from '../../assets/me111.jfif'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Kamil Abu</h1>
      <h5 className='text-light'>Software Engineer and a Full Stack Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        { <img src={me111} alt="me11" /> }
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header
