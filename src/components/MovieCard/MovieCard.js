import React from 'react';
import './MovieCard.scss';



const MovieCard = ({ episode, title, releaseDate, fetchChar }) => {
  return (
  <article className='movie-card'>
    <h2>Episode {episode}</h2>
    <h3>{title}</h3>
    <p>{releaseDate}</p>
    <button 
      className='characters-btn' 
      onClick={() => fetchChar(episode)}
    >View Characters</button>
  </article>
  )
};

export default MovieCard;