import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../test/testUtils';
import HomePage from './homepage.component.jsx';

const defaultProps = {};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<HomePage {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const homepage = findByTestAttr(wrapper, 'homepage');
  // console.log(homepage.debug());
  expect(homepage.length).toBe(1);
});