import React from 'react';
import {shallow} from 'enzyme';
import WelcomeForm from './WelcomeForm';

describe('WelcomeForm', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<WelcomeForm
      updateUser={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is invoked', () => {

  });

  it('should update state when handleRankSelection is invoked', () => {
    // with event param
  });

  it('should update state when handleClick is invoked with inputs completed',
    () => {
    // this has an if/else conditional so probably will need to test both
  });

  it('should update state when handleClick is invoke with empty input(s)',
    () => {

  });

  it('should invoke handleChange when changes occur', () => {

  });

  it('should invoke handleRankSelection when selection changes', () => {

  });

  it('should invoke handleClick when button is clicked', () => {

  });

  it('should invoke updateUser with user object when handleClick is invoked',
    () => {

  });


});
