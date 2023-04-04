import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

    <a href='https://www.linkedin.com/in/kamil-abu-elhija-0483bb21a/' target="_blank"><BsLinkedin /></a>
    <a href='https://github.com/Kamilabuelhija' target="_blank"><FaGithub /></a>
    <a href='https://www.facebook.com/profile.php?id=100000133632459' target="_blank"><BsFacebook /></a>


      
    </div>
  )
}

export default HeaderSocials
