import React from 'react';
import {shallow} from 'enzyme';
import WelcomeForm from './WelcomeForm';

describe('WelcomeForm', () => {
  let mockUpdateUser;
  let wrapper;

   beforeEach(() => {
     mockUpdateUser = jest.fn();
     wrapper = shallow(<WelcomeForm
       updateUser={mockUpdateUser}
     />);
   })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is invoked', () => {
    const mockEvent = { target: {name: 'Robbie' , value: 'pants'}}
    const expected = 'pants';
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('Robbie')).toEqual(expected);
  });

  it('should update state when handleRankSelection is invoked', () => {
    const mockEvent = {target: {value: 'pants'}};
    const expected = 'pants';
    wrapper.instance().handleRankSelection(mockEvent);
    expect(wrapper.state('rank')).toEqual(expected);
  });

  // it('should update state when handleClick is invoked with inputs completed',
  //   () => {
  //   this has an if/else conditional so probably will need to test both
  // });
  //
  // it('should update state when handleClick is invoke with empty input(s)',
  //   () => {
  //
  // });

  it('should invoke handleChange when changes occur', () => {
    const mockEvent = { target: {name: 'Robbie' , value: 'pants'}}
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('#nameInput').simulate('change', mockEvent)
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)
  });

  it('should invoke handleRankSelection when selection changes', () => {
    const mockEvent = {target: {value: 'pants'}};
    wrapper.instance().handleRankSelection = jest.fn();
    wrapper.find('#rank3').simulate('change', mockEvent)
    expect(wrapper.instance().handleRankSelection).toHaveBeenCalledWith(mockEvent)
  });

  it('should invoke handleClick when button is clicked', () => {
    const mockState = {name: 'Robbie', quote: '"Luke. I am your father."',
      rank: 'Padawan', error: false,};
    wrapper.setState(mockState);
    expect(wrapper.state()).toEqual(mockState);

    wrapper.instance().handleClick = jest.fn();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
  });

  // it('should invoke updateUser with user object when handleClick is invoked',
  //   () => {
  //
  // });


});
