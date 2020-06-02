import React from 'react';
import ReactDOM from 'react-dom';
import CustomCards from './CustomCards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
