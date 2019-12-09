import React from 'react';
import './DisplayContainer.scss'
import MovieCard from '../MovieCard/MovieCard';
import CharacterCard from '../CharacterCard/CharacterCard';


const DisplayContainer = ( {data, fetchChar, isMovies} ) => {
  // console.log('isMovies: ', isMovies)
  const cards = data.map(item => {
    // console.log('inside .map', 'made it')
    if (isMovies) {
      // console.log('isMovies is true so IF block')
      return <MovieCard
              key={item.episode_id}
              episode={item.episode_id}
              title={item.title}
              releaseDate={item.release_date}
              fetchChar={fetchChar}
              />
    } else {
      // console.log('isMovies is false so ELSE block')
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
