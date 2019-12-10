import React from 'react';
import '../MovieCard/MovieCard.scss';

const CharacterCard = ({ episode_id, name, homeworld, population, species, films }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <ul>
        <li>Homeworld: {homeworld}</li>
        <li>Population: {population}</li>
        <li>Species: {species}</li>
        <li>Films: {films}</li>
      </ul>
      <button>favorite</button>
    </div>
  )
}

export default CharacterCard;