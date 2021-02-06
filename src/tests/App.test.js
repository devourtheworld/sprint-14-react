"use strict"

import App from './../App';
import TestRenderer from 'react-test-renderer';
import dataService from './../App';
import state from './../App';


describe('Rendering test', () => {
  it('renders correctly', () => {
    const wrapper = TestRenderer.create(<App/>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

test('test', () => {
  state = {};
  expect(state).toBe(`https://api.github.com/users/zbys1av`);
});
