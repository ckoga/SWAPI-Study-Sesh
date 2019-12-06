import React from 'react';
import './DisplayContainer.scss'
import MovieCard from '../MovieCard/MovieCard';
import CharacterCard from '../CharacterCard/CharacterCard';


const DisplayContainer = ( {data, fetchChar, isMovies} ) => {
  const cards = data.map(item => {
    if (isMovies) {
      return <MovieCard
              key={data.episode_id}
              episode={data.episode_id}
              title={data.title}
              releaseDate={data.release_date}
              fetchChar={fetchChar}
              />
    } else {
      return <CharacterCard
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
