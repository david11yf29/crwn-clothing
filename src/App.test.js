import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory, findByTestAttr } from '../test/testUtils';
import App from './App';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  // console.log(wrapper.debug());
  return wrapper;
};

setup();

// state
//     user: userReducer,
//     cart: cartReducer,
//     directory: directoryReducer,
//     shop: shopReducer

test('rendder without error', () => {
  const currentUser = null;
  const wrapper = setup({ currentUser: currentUser });
  const homepage = findByTestAttr(wrapper, 'homepage');
  // console.log(homepage.debug());
  expect(homepage.length).toBe(1)
});

describe('redux properties', () => {
  test('has access to `user` state', () => {
    const currentUser = null;
    const wrapper = setup({ currentUser: currentUser });
    const currentUserProp = wrapper.instance().props.currentUser;
    expect(currentUserProp).toEqual(currentUser);
  });
  test('`setCurrentUser` action creator is a function on the props', () => {
    const wrapper = setup();
    const setCurrentUserProp = wrapper.instance().props.setCurrentUser;
    expect(setCurrentUserProp).toBeInstanceOf(Function);
  });
});