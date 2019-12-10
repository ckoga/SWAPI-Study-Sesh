import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when updateUser is invoked', () => {
    const mockUser = {
      name: 'Robbie',
      quote: '"Luke. I am your father."',
      rank: 'Ranking: Padawan', };
    const expected = {
      name: 'Robbie',
      quote: '"Luke. I am your father."',
      rank: 'Ranking: Padawan', };
    wrapper.instance().updateUser(mockUser);

    expect(wrapper.state('user')).toEqual(expected);
  })

})
