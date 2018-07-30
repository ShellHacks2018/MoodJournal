import React from 'react';
import ReactDOM from 'react-dom';
import CrisComponent from './CrisComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CrisComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
