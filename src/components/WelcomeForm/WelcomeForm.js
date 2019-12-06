import React, {Component} from 'react';
import './WelcomeForm.scss';
import Header from '../Header/Header';

class WelcomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quote: '"Luke. I am your father."',
      rank: 'Padawan',
      error: false,
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleRankSelection = (event) => {
    this.setState({ rank: event.target.value })
  }

  handleClick = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.quote) {
      this.setState({error: false});
      const user = {
        name: this.state.name,
        quote: this.state.quote,
        rank: 'Ranking: '+ this.state.rank,
      }
      this.props.updateUser(user);
    } else {
      this.setState({ error: true})
    }
  }

  render() {
    return(
      <form className='form'>
        <label>Your Name</label>
        <input type='text' name='name' value={this.state.name}
          onChange={(event) => this.handleChange(event)}/>
        <label>Your Favorite SW Quote</label>
        <input type='text' name='quote' value={this.state.quote}
          onChange={(event) => this.handleChange(event)}/>
        <label>Your SW Knowledge</label>
        <label className='radios' htmlFor='rank1'>
          <input type='radio' name='rank' value='Padawan'id='rank1'
            checked={this.state.rank === 'Padawan'}
            onChange={this.handleRankSelection}
          />Padawan
        </label>
        <label className='radios' htmlFor='rank2'>
          <input type='radio' name='rank' value='Jedi Knight'id='rank2'
            checked={this.state.rank === 'Jedi Knight'}
            onChange={this.handleRankSelection}
          />Jedi Knight
        </label>
        <label className='radios' htmlFor='rank3'>
          <input type='radio' name='rank' value='Jedi Master'id='rank3'
            checked={this.state.rank === 'Jedi Master'}
            onChange={this.handleRankSelection}
          />Jedi Master
        </label>
        <p className='error' hidden={!this.state.error}>
          Error - Please provide name, quote and ranking to proceed.</p>
        <button onClick={(event) => this.handleClick(event)}>ENTER</button>
      </form>
    )
  }
}

export default WelcomeForm;
