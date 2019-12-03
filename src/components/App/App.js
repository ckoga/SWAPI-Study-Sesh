import React, {Component} from 'react';
import './App.scss';
import '../../_variables.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm'
import Header from '../Header/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
    }
  }

  componentDidMount() {
    // fetch will go here I think and assign the actual array to this.state.movies
  }

  updateHeader = (name, quote, rank) => {

  }

  render() {
    return (
      <div className="App">
        <Header
          name=''
          quote=''
          rank=''
        />
        <WelcomeForm />
      </div>
    );
  }
}

export default App;
