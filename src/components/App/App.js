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
      error: '',
      isLoading: true,
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
      .then(data => this.setState({ movies: data.results, isLoading: false }))
      .catch(err => {
        console.log(err);
        this.setState({ error: err.message})
      })
  }

  setScrollAndLoading = (movie) => {
    this.setState({ scroll: movie.opening_crawl, isLoading: true, characters: [] })
  }

  fetchHandler = (episode) => {
    const selectedMov = this.state.movies.find(movie => movie.episode_id === episode)
    const tenCharacters = selectedMov.characters.slice(0, 10);

    this.setScrollAndLoading(selectedMov);

    const fetchCharData = () => {
      const fetchedCharacters = tenCharacters.map(character => {
        return fetch(character)
        .then(response => {
          if (!response.ok) {
            throw Error('Error fetching films');
          }
          return response.json()
        })
          .then(charData => getNestedData(charData))
      });
      Promise.all(fetchedCharacters)
        .then(data => this.setState({ characters: data, isLoading: false }))
        .catch(err => {
          console.log(err);
          this.setState({ error: err.message})
        })
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
      .then(response => {
        if (!response.ok) {
          throw Error('Error fetching films');
        }
        return response.json()
      })
    }

    const fetchSpecies = (charData) => {
      return fetch(charData.species)
      .then(response => {
        if (!response.ok) {
          throw Error('Error fetching films');
        }
        return response.json()
      })
    }

    const fetchFilms = (charData) => {
      const filmPromises = charData.films.map(film => {
        return fetch(film)
        .then(response => {
          if (!response.ok) {
            throw Error('Error fetching films');
          }
          return response.json()
        })
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
        {this.state.error && <h2 className='fetch-error'>{this.state.error}</h2>}
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
            isLoading={this.state.isLoading}
          />)}
        } />
        <Route path='/movies/:movie_id' render={ ({ match }) => {
          return(<DisplayContainer
            scroll={this.state.scroll}
            data={this.state.characters}
            isLoading={this.state.isLoading}
            />)}
        } />
      </div>
    );
  }
}

export default App;
