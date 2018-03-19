import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create the store with the combined reducer
const store = createStore(combinedReducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
