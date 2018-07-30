import React from 'react';
import ReactDOM from 'react-dom';
import AmyComponent from './AmyComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AmyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
