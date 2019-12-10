import React from 'react';
import './DisplayContainer.scss'
import MovieCard from '../MovieCard/MovieCard';
import CharacterCard from '../CharacterCard/CharacterCard';


const DisplayContainer = ( {data, fetchHandler, isMovies} ) => {
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
    }
  })

  return (
    <main className='display-container' key=''>
      {cards}
    </main>
  )
}

export default DisplayContainer;
