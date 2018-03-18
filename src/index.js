import { createStore } from 'redux';
import combinedReducers from './reducers';
import { createPuppy, adoptPuppy, updateFilter } from './actions';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create the store with the combined reducer
const store = createStore(combinedReducers)

// Log the initial state - notice the different shape
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

store.dispatch(updateFilter('SHOW_AVAILABLE'))

// Check that the state updated
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
