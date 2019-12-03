import React from 'react'


const Header = ({name, quote, rank}) => {
  return(
    <header className='Header'>
    <h1>WELCOME <span>{name.toUppercase()}</span></h1>
    <h2>Ranking: {rank}</h2>
    <p>{quote}</p>
    </header>
  )
}

export default Header;
