import React from 'react'
import './Header.scss'

const Header = ({name, quote, rank}) => {
  return(
    <header className='Header'>
    <h1>WELCOME <span>{name.toUpperCase()}</span></h1>
    <h2>Ranking: {rank}</h2>
    <p>{quote}</p>
    <button>Sign Out</button>
    </header>
  )
}

export default Header;
