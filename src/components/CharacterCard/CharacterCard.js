import React from 'react';
import './CharacterCard.scss';

const CharacterCard = () => {
  return (
    <div className='character-card'>
      <h2>Name</h2>
      <ul>
        <li>homeworld</li>
        <li>population</li>
        <li>species</li>
        <li>films</li>
      </ul>
      <button>favorite</button>
    </div>
  )
}

export default CharacterCard;