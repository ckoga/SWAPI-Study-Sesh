import React, {Component} from 'react';
import './App.scss';
import '../../_variables.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import DisplayContainer from '../DisplayContainer/DisplayContainer';
import Header from '../Header/Header';
import {Route} from 'react-router-dom';
import { getFilms } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      characters: [],
      scroll: '',
      error: false,
      user: {
        name: '',
        quote: '',
        rank: '',
      }
    }
  }

  updateUser = (user) => {
    this.setState({ user })
  }

  componentDidMount() {
    getFilms()
      .then(data => this.setState({ movies: data.results }))
      .catch(err => console.log(err))
  }

  setScroll = (movie) => {
    this.setState({ scroll: movie.opening_crawl })
  }


  fetchHandler = (episode) => {
    const selectedMov = this.state.movies.find(movie => movie.episode_id === episode)
    const tenCharacters = selectedMov.characters.slice(0, 10);

    this.setScroll(selectedMov);

    const fetchCharData = () => {
      const fetchedCharacters = tenCharacters.map(character => {
        return fetch(character)
          .then(response => response.json())
          .then(charData => getNestedData(charData))
      });
      Promise.all(fetchedCharacters)
        .then(data => this.setState({ characters: data }))
    }

    const getNestedData = (charData) => {
      const homeWorld = fetchHomeWorld(charData)
      const species = fetchSpecies(charData)
      const films = fetchFilms(charData)
      return Promise.all([homeWorld, species, ...films])
        .then(data => {
          return createCharacterObj(data, charData.name)})
    }

    const createCharacterObj = (resolvedData, name) => {
      return {
        name: name,
        homeworld: resolvedData[0].name,
        population: resolvedData[0].population,
        species: resolvedData[1].name,
        films: resolvedData.slice(2).map(film => film.title),
      }
    }

    const fetchHomeWorld = (charData) => {
      return fetch(charData.homeworld)
        .then(response => response.json())
    }

    const fetchSpecies = (charData) => {
      return fetch(charData.species)
        .then(response => response.json())
    }

    const fetchFilms = (charData) => {
      const filmPromises = charData.films.map(film => {
        return fetch(film)
          .then(response => response.json())
      });
      return filmPromises;
    }

    fetchCharData();
  }

  render() {
    return (
      <div className="app">
        <Header
          name={this.state.user.name}
          quote={this.state.user.quote}
          rank={this.state.user.rank}
          updateUser={this.updateUser}
        />
        <Route exact path='/' render={ () =>
          <WelcomeForm
            updateUser={this.updateUser}
          />
        } />
        <Route exact path='/movies' render={ () => {
          return (<DisplayContainer
            data={this.state.movies}
            fetchHandler={this.fetchHandler}
            isMovies={true}
          />)}
        } />
        <Route path='/movies/:movie_id' render={ ({ match }) => {
          return(<DisplayContainer
            scroll={this.state.scroll}
            data={this.state.characters}
            />)}
        } />
      </div>
    );
  }
}

export default App;
