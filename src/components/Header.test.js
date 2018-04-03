import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Testing Header Component', () => {
  const mockLoadDatafunc = jest.fn();
  const HeaderTest = shallow(<Header loadData={mockLoadDatafunc} />);
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Load Block button click fires a function', () => {
    HeaderTest.find(".button").simulate("click");
    expect(mockLoadDatafunc).toBeCalled();
  })
})