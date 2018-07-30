import React from 'react';
import ReactDOM from 'react-dom';
import MauricioComponent from './MauricioComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MauricioComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
