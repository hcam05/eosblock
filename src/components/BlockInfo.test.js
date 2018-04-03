import React from 'react';
import ReactDOM from 'react-dom';
import BlockInfo from './BlockInfo';

const mockState = null;

it('BlockInfo component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlockInfo data={mockState} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

