import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let updateUserMock;
  let wrapper;

  beforeEach(() => {
    updateUserMock = jest.fn();
    wrapper = shallow(<Header
        name='Chase'
        quote='Obscure StarWars Quote'
        rank='Ranking: Novice'
        updateUser={updateUserMock}
      />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with empty strings passed in', () => {
    wrapper = shallow(<Header
      name=''
      quote=''
      rank=''
      updateUser={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateUser prop with noUser arg signout button is clicked',
    () => {
      const noUserMock = {name: '', quote: '', rank: ''};

      wrapper.find('button').simulate('click');
      expect(updateUserMock).toHaveBeenCalledWith(noUserMock);
  });

});
