import React from 'react'
import './Header.scss'

const Header = ({name, quote, rank}) => {
  return(
    <header className='Header'>
    <h1>WELCOME <span>{name.toUpperCase()}</span></h1>
    <h2>{rank}</h2>
    <p>{quote}</p>
    </header>
  )
}

export default Header;
