import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App from './App';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />);
  return wrapper;
};

// user: userReducer,
//     cart: cartReducer,
//     directory: directoryReducer,
//     shop: shopReducer

describe('redux properties', () => {
  test('has access to `user` state', () => {
    const currentUser = null;
    const wrapper = setup({ currentUser: currentUser });
    const currentUserProp = wrapper.instance().props.currentUser;
    expect(currentUserProp).toEqual(currentUser);
  });
});