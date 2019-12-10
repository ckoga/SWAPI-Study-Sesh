import React from 'react';
import './MovieCard.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const MovieCard = ({ episode, title, releaseDate, fetchHandler }) => {
  return (
    <article className='card'>
      <h2>Episode {episode}</h2>
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <Link to={`/movies/${episode}`}>
        <button
          className='characters-btn'
          onClick={() => fetchHandler(episode)}
        >View Characters</button>
      </Link>
    </article>
  )
};

export default MovieCard;

MovieCard.propTypes = {
  episode: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  fetchHandler: PropTypes.func
}
