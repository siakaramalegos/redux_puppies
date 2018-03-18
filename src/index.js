import { createStore } from 'redux';
import puppies from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create the store with the puppies reducer
const store = createStore(puppies)

// Log the initial state
console.log(store.getState());

// Dispatch an action to create a puppy
store.dispatch({
  type: 'CREATE_PUPPY',
  data: {
    name: 'Priscilla Queen',
    breed: 'Australian Shepherd',
  }
})

// Check that the state updated
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
