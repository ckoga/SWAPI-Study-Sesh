import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from '../CharacterCard/CharacterCard';
import MovieCard from '../MovieCard/MovieCard';

describe('CharacterCard', () => {
  let characters;
  beforeEach(() => {
    characters = [
      {
        episode_id: 10000000000,
        name: 'Heather',
        homeworld: 'Earth',
        species: 'Human',
        films: ['The Best Movie']
      }
    ]
  })

  it('should match the snapshot with all the data being passed in correctly', () => {
    const wrapper = shallow(<CharacterCard 
      key={characters[0].name}
      name={characters[0].name}
      homeworld={characters[0].homeworld}
      species={characters[0].species}
      films={characters[0].films}    
    />)

    expect(wrapper).toMatchSnapshot()
  })
})