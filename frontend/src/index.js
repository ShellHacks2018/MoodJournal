import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Store/reducer';

// Generate the central store for the entire app
// Passing in the reducer function that will handle dispatched actions
// and mutate state accordingly
const store = createStore(reducer);

// Wrap the <App /> in <Provider /> so <App /> and all it's sub compoents
// can share the same state created above
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
