import React from 'react';
import { shallow } from 'enzyme';

import App from '../App.jsx';

let wrapped;
describe('App - ', () => {
  beforeEach(() => {
    wrapped = shallow(<App />);
  })
  it('should render the component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders with title', () => { 
    expect(wrapped.find('h1').text()).toEqual("RSS Reader");
  });
});