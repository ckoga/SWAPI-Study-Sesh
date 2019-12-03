import React, {Component} from 'react';
import './WelcomeForm.scss';

class WelcomeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: 'Luke. I am your father.',
      rank: '',
      error: false,
    }
  }

  render() {
    return(
      <form className='form'>
        <input type='text' name='name' value={this.state.name} />
        <input type='text' name='quote' value={this.state.quote} />
        <input type='radio' name='rank' value={this.state.rank} />
        <button>ENTER</button>
      </form>
    )
  }
}

export default WelcomeForm;
