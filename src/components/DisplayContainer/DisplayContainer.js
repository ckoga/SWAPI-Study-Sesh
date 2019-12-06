import React from 'react';
import './DisplayContainer.scss'
import MovieCard from '../MovieCard/MovieCard';


const DisplayContainer = ( {data, fetchChar} ) => {
  const movieCards = data.map(item => {
    return <MovieCard
      key={data.episode_id}
      episode={data.episode_id}
      title={data.title}
      releaseDate={data.release_date}
      fetchChar={fetchChar}
      />
  })

  return (
    <main className='display-container' key=''>
      {movieCards}
    </main>
  )
}

export default DisplayContainer;
