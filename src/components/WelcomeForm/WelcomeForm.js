import React, {Component} from 'react';
import './WelcomeForm.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

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

  handleClick = () => {
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
          onChange={(event) => this.handleChange(event)} id='nameInput'/>
        <label>Your Favorite SW Quote</label>
        <input type='text' name='quote' value={this.state.quote}
          onChange={(event) => this.handleChange(event)}/>
        <label>Your SW Knowledge</label>
        <label className='radios' htmlFor='rank1'>
          <input type='radio' name='rank' value='Padawan'id='rank1'
            checked={this.state.rank === 'Padawan'}
            onChange={event => this.handleRankSelection(event)}
          />Padawan
        </label>
        <label className='radios' htmlFor='rank2'>
          <input type='radio' name='rank' value='Jedi Knight'id='rank2'
            checked={this.state.rank === 'Jedi Knight'}
            onChange={event => this.handleRankSelection(event)}
          />Jedi Knight
        </label>
        <label className='radios' htmlFor='rank3'>
          <input type='radio' name='rank' value='Jedi Master'id='rank3'
            checked={this.state.rank === 'Jedi Master'}
            onChange={event => this.handleRankSelection(event)}
          />Jedi Master
        </label>
        <p className='error' hidden={!this.state.error}>
          Error - Please provide name, quote and ranking to proceed.</p>
        {this.state.name && this.state.quote &&
          <Link id='link' to='/movies'>
            <button onClick={() => this.handleClick()}>ENTER</button>
          </Link>
        }
      </form>
    )
  }
}

export default WelcomeForm;

WelcomeForm.propTypes = {
  updateUser: PropTypes.func
}
