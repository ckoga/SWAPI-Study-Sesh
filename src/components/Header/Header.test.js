import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Header
        name='Chase'
        quote='Obscure StarWars Quote'
        rank='Ranking: Novice'
        updateUser={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with empty strings passed in', () => {
    const wrapper = shallow(<Header
      name=''
      quote=''
      rank=''
      updateUser={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });

});
