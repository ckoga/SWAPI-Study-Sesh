import React, {Component} from 'react';
import './WelcomeForm.scss';

class WelcomeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '"Luke. I am your father."',
      rank: '',
      // would we need a state property for each option that would be a boolean?
      error: false,
    }
  }

  render() {
    return(
      <form className='form'>
        <label>Your Name</label>
        <input type='text' name='name' value={this.state.name} />
        <label>Your Favorite SW Quote</label>
        <input type='text' name='quote' value={this.state.quote} />
        <label>Your SW Knowledge  </label>
        <label className='radios' htmlFor='rank1'><input type='radio' name='rank' value='Padawan' id='rank1'/>
        Padawan</label>
        <label className='radios' htmlFor='rank2'><input type='radio' name='rank' value='Jedi Knight' id='rank2'/>
        Jedi Knight</label>
        <label className='radios' htmlFor='rank3'><input type='radio' name='rank' value='Jedi Master' id='rank3'/>
        Jedi Master</label>
        <button>ENTER</button>
      </form>
    )
  }
}

export default WelcomeForm;
