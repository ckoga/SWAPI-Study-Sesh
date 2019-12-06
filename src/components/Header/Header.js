import React from 'react'
import './Header.scss'

const Header = ({name, quote, rank, currentPage}) => {
  const buttonView = currentPage === 'landing' ? 'hide' : 'show'

  return(
    <header className='header'>
    <h1>WELCOME <span>{name}</span></h1>
    <h2>{rank}</h2>
    <p>{quote}</p>
    <button className={buttonView}>Sign Out</button>
    </header>
  )
}

export default Header;
