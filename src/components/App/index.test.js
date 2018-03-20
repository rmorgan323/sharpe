import React from 'react';
import App from './index';
import { shallow } from 'enzyme';

describe('App tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />, {disableLifecycleMethods: true});
  });

  it('renders without crashing', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(renderedApp.state('cryptoData')).toEqual([]);
  });
});