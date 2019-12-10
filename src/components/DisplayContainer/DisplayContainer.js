import React from 'react';
import './DisplayContainer.scss'
import MovieCard from '../MovieCard/MovieCard';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';

const DisplayContainer = ( {data, fetchHandler, isMovies, scroll} ) => {
  const cards = data.map(item => {
    if (isMovies) {
      return <MovieCard
              key={item.episode_id}
              episode={item.episode_id}
              title={item.title}
              releaseDate={item.release_date}
              fetchHandler={fetchHandler}
              />
    } else {
      return <CharacterCard
              key={item.name}
              name={item.name}
              homeworld={item.homeworld}
              population={item.population}
              species={item.species}
              films={item.films}
              />
    };
  });

  return (

    <main className='display-container' key=''>
      {scroll && <div className="scroll-container">
        <div className="scroll">{scroll}</div>
      </div>}
      {cards}
    </main>
  )
};

export default DisplayContainer;

DisplayContainer.propTypes = {
  data: PropTypes.array,
  fetchHandler: PropTypes.func,
  isMovies: PropTypes.bool
}