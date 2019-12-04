import React from 'react';
import './DisplayContainer.scss'
import MovieCard from '../MovieCard/MovieCard';


const DisplayContainer = ( {movies} ) => {
  const movieCards = movies.map(movie => {
    return <MovieCard
      key={movie.episode_id}
      episode={movie.episode_id}
      title={movie.title}
      releaseDate={movie.release_date}
      />
  })
  
  return (
    <main className='display-container' key=''>
      {movieCards}
    </main>
  )
}

export default DisplayContainer;