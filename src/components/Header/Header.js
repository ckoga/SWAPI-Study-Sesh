import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = ({name, quote, rank, updateUser}) => {
  const buttonView = name ? 'show' : 'hide';
  const noUser = {name: '', quote: '', rank: ''};

  return(
    <header className='header'>
    <h1>WELCOME <span>{name}</span></h1>
    <h2>{rank}</h2>
    <p>{quote}</p>
    <Link to='/'>
    <button onClick={() => updateUser(noUser)} className={buttonView}>Sign Out</button>
    </Link>
    </header>
  )
}

export default Header;
