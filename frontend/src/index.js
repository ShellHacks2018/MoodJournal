import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Store/reducer';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
