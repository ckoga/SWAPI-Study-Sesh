import React from 'react';
import '../MovieCard/MovieCard.scss';
import './CharacterCard.scss';

const CharacterCard = ({ episode_id, name, homeworld, population, species, films }) => {
  const filmDisplay = films.join(', ')
  return (
    <div className='card character-card'>
      <h2>{name}</h2>
      <ul>
        <li>Homeworld: {homeworld}</li>
        <li>Population: {population}</li>
        <li>Species: {species}</li>
        <li>Films: {filmDisplay}</li>
      </ul>
      <button className='favorite-character-btn'>favorite</button>
    </div>
  )
}

export default CharacterCard;