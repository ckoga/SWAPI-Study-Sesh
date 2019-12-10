import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({name, quote, rank, updateUser}) => {
  const buttonView = name ? 'show' : 'hide';
  const noUser = {name: '', quote: '', rank: ''};

  return(
    <header className='header'>
      <div className='left-header'>
        <h1>WELCOME <span>{name}</span></h1>
        <h2>{rank}</h2>
      </div>
      <div className='right-header'>
        <Link to='/'>
          <button onClick={() => updateUser(noUser)}
            className={buttonView}>Sign Out</button>
        </Link>
        <p className='quote'>{quote}</p>
      </div>
    </header>
  )
}

export default Header;

Header.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  rank: PropTypes.string,
  updateUser: PropTypes.func,
}
