import React from 'react';
import './MovieCard.scss';
import {Link} from 'react-router-dom';



const MovieCard = ({ episode, title, releaseDate, fetchChar }) => {
  return (
    <article className='movie-card'>
      <h2>Episode {episode}</h2>
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <Link to={`/movies/${episode}`}>
        <button
          className='characters-btn'
          onClick={() => fetchChar(episode)}
        >View Characters</button>
      </Link>
    </article>
  )
};

export default MovieCard;
