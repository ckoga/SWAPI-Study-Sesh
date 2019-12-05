import React, {Component} from 'react';
import './App.scss';
import '../../_variables.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import DisplayContainer from '../DisplayContainer/DisplayContainer';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
      currentPage: 'landing',
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
  }

  // changePage = () => {
  //   setState of currentPage
  //   BELOW we would have to render conditionally
  // }

  render() {
    return (
      <div className="app">
        <Header
          name={this.state.name}
          quote={this.state.quote}
          rank={this.state.rank}
          currentPage={this.state.currentPage}
        />
        <DisplayContainer
          movies={this.state.movies}
        />
        <WelcomeForm />
      </div>
    );
  }
}

export default App;
