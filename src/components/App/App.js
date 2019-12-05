import React, {Component} from 'react';
import './App.scss';
import '../../_variables.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import DisplayContainer from '../DisplayContainer/DisplayContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
      // currentPage: 'Landing'
      // do we want/need the user object as part of the state of App
      // so that we can render the Header from within App instead of within
      // WelcomeForm
      user: {
        name: '',
        quote: '',
        rank: '',
      }
    }
  }

// we would need a method here that would be invoked from within WelcomeForm
// and have the state arg passed through to be set as the this.state.user in App


  componentDidMount() {
    // fetch will go here I think and assign the actual array to this.state.movies
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }))
      .catch(err => console.log(err))
  }

  fetchChar = (episode) => {
    let selectedMov = this.state.movies.find(movie => movie.episode_id === episode)
    selectedMov.characters.map(character => {
      return fetch(character)
        .then(response => response.json())
        .then(charData => {
          fetch(charData.homeworld)
            .then(response => response.json())
            .then(homeworldData => console.log('HW: ', homeworldData))
          fetch(charData.species)
            .then(response => response.json())
            .then(speciesData => console.log('species: ', speciesData))
          let charFilms = charData.films.map(film => {
            fetch(film)
              .then(response => response.json())
              .then(filmData => console.log('film: ', filmData))
          })
          })
    })
  }
  // changePage = () => {
  //   setState of currentPage
  //   BELOW we would have to render conditionally
  // }

  render() {
    return (
      <div className="app">
        <header className='app-header'>
          <h1>WELCOME</h1>
        </header>
        <DisplayContainer 
          movies={this.state.movies}
          fetchChar={this.fetchChar}
        />
        <WelcomeForm />
      </div>
    );
  }
}

export default App;
