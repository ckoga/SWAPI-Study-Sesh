import React, {Component} from 'react';
import './App.scss';
import '../../_variables.scss';
import WelcomeForm from '../WelcomeForm/WelcomeForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    // fetch will go here I think and assign the actual array to this.state.movies
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            WELCOME
          </h1>
        </header>
        <WelcomeForm />
      </div>
    );
  }
}

export default App;
