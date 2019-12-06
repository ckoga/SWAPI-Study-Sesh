import React, {Component} from 'react';
import './App.scss';
import '../../_variables.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import DisplayContainer from '../DisplayContainer/DisplayContainer';
import Header from '../Header/Header';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      characters: [],
      error: false,
      currentPage: 'landing',
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
    // fetch will go here I think and assign the actual array to this.state.movies

    // fetch('https://swapi.co/api/films/')
    //   .then(response => response.json())
    //   .then(data => this.setState({ movies: data.results }))
    //   .catch(err => console.log(err))
  }

  fetchChar = (episode) => {
    let selectedMov = this.state.movies.find(movie => movie.episode_id === episode)

    let promises = selectedMov.characters.map(character => {
      return fetch(character)
        .then(response => response.json())
        .then(charData => {
          fetch(charData.homeworld)
            .then(response => response.json())
            .then(homeworldData => {
              // let movChar = {
              //   name: charData.name,
              //   homeworld: homeworldData,
              //   hwPop: homeworld.population,
              //   species: speciesData,
              //   films: []
              // }
              console.log('HW: ', homeworldData)
            })
          fetch(charData.species)
            .then(response => response.json())
            .then(speciesData => {
              // movChar = {
              //   name: charData.name,
              //   homeworld: homeworldData,
              //   hwPop: homeworld.population,
              //   species: speciesData,
              //   films: []
              // }
              // return movChar;
              console.log('species: ', speciesData)
            })
          charData.films.map(film => {
            return fetch(film)
              .then(response => response.json())
              .then(filmData => {
              //   movChar.films.push(filmData)
                console.log('film: ', filmData)
              })
          })
          })
    })
    Promise.all(promises)
      // .then(bios => bios.map(bio => {
      //   let movChar = {
      //     name: charData.name,
      //     homeworld: homeworldData,
      //     hwPop: homeworld.population,
      //     species: speciesData,
      //     films: []
      //   }
      //   return movChar
      // }))
      // .then(bios => this.setState({ characters: bios }))
    console.log(this.state.characters)
  }
  // changePage = () => {
  //   setState of currentPage
  //   BELOW we would have to render conditionally
  // }

  render() {
    return (
      <div className="app">
        <Header
          name={this.state.user.name}
          quote={this.state.user.quote}
          rank={this.state.user.rank}
          currentPage={this.state.currentPage}
        />
        <Route exact path='/' render={ () =>
          <WelcomeForm
            updateUser={this.updateUser}
          />
        } />
        <Route path='/movies' render={ () =>
          <DisplayContainer
            data={this.state.movies}
            fetchChar={this.fetchChar}
            isMovies={true}
          />
        } />
        <Route path='/movies/:movie_id' render={ ({ match }) =>
          <DisplayContainer
            data={this.state.characters}
          />
        } />
      </div>
    );
  }
}

export default App;
