import React from 'react';
import { shallow } from 'enzyme';

import Item from '../Item.jsx';

let wrapped;
let props = {
  title: "test",
  description: "this is a test",
  link: "http://test.com",
  pubDate: "01/01/1950"
}
describe('Item - ', () => {
  beforeEach(() => {
    wrapped = shallow(<Item {...props} />);
  })
  it('should render the component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders with title', () => { 
    expect(wrapped.find('h4').text()).toEqual(props.title);
  });
  it('renders with description', () => { 
    expect(wrapped.find('p').text()).toEqual(props.description);
  });
  it('renders with link', () => { 
    expect(wrapped.find('a').text()).toEqual(props.link);
  });
  it('renders with pubDate', () => { 
    expect(wrapped.find('h6').text()).toEqual(`Published on: ${props.pubDate}`);
  });
});