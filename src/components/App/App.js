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
  }

  render() {
    return (
      <div className="app">
        <Header
          name={this.state.user.name}
          quote={this.state.user.quote}
          rank={this.state.user.rank}
          currentPage={this.state.currentPage}
        />
        <DisplayContainer
          movies={this.state.movies}
        />
        <WelcomeForm
          updateUser={this.updateUser}
        />
      </div>
    );
  }
}

export default App;
