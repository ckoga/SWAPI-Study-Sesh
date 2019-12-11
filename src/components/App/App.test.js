import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

import { getFilms } from '../../apiCalls';
jest.mock('../../apiCalls.js');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    getFilms.mockImplementation(() => {
      return Promise.resolve([{
      "title": "The Empire Strikes Back",
      "episode_id": 5,
      "opening_crawl": "Impressive opening starwars crawl",
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1980-05-17",
      "characters": ["https://swapi.co/api/people/1/"],
      "planets": ["https://swapi.co/api/planets/4/"],
      "starships": ["https://swapi.co/api/starships/15/"],
      "vehicles": ["https://swapi.co/api/vehicles/8/"],
      "species": ["https://swapi.co/api/species/6/"],
      "created": "2014-12-12T11:26:24.656000Z",
      "edited": "2017-04-19T10:57:29.544256Z",
      "url": "https://swapi.co/api/films/2/"
      }])
    })
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call getFilms after component is mounted', () => {
    expect(getFilms).toHaveBeenCalled();
  })

  it('should update state when updateUser is invoked', () => {
    const mockUser = {
      name: 'Robbie',
      quote: '"Luke. I am your father."',
      rank: 'Ranking: Padawan', };
    const expected = {
      name: 'Robbie',
      quote: '"Luke. I am your father."',
      rank: 'Ranking: Padawan', };
    wrapper.instance().updateUser(mockUser);

    expect(wrapper.state('user')).toEqual(expected);
  })

  it('should update state when setScrollAndLoading is invoked', () => {
    const mockMovie = {
    "title": "The Empire Strikes Back",
    "episode_id": 5,
    "opening_crawl": "Impressive opening starwars crawl",
    "director": "Irvin Kershner",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1980-05-17",
    "characters": ["https://swapi.co/api/people/1/"],
    "planets": ["https://swapi.co/api/planets/4/"],
    "starships": ["https://swapi.co/api/starships/15/"],
    "vehicles": ["https://swapi.co/api/vehicles/8/"],
    "species": ["https://swapi.co/api/species/6/"],
    "created": "2014-12-12T11:26:24.656000Z",
    "edited": "2017-04-19T10:57:29.544256Z",
    "url": "https://swapi.co/api/films/2/"
    };
    const expected = "Impressive opening starwars crawl";

    wrapper.instance().setScrollAndLoading(mockMovie);

    expect(wrapper.state('scroll')).toEqual(expected);
  })

})
