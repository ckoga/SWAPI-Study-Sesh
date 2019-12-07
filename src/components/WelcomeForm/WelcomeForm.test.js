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
});
