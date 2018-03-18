import { createStore } from 'redux';
import puppies from './reducers';
import { createPuppy, adoptPuppy } from './actions';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create the store with the puppies reducer
const store = createStore(puppies)

// Log the initial state
console.log(store.getState());

// Dispatch actions to create a puppies
store.dispatch(createPuppy({
  name: 'Priscilla Queen',
  breed: 'Australian Shepherd',
  available: true,
  id: 1
}))

store.dispatch(createPuppy({
  name: 'Sean Connery',
  breed: 'Scottish Terrier',
  available: true,
  id: 2
}))

// Check that the state updated
console.log(store.getState());

store.dispatch(adoptPuppy(2))

// Check that the state updated
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
