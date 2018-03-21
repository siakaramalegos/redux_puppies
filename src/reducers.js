import * as PuppyActions from './actions'
import { combineReducers } from 'redux';

function puppies(state = [], action) {
  console.log(action);

  switch (action.type) {
    case PuppyActions.CREATE_PUPPY:
      return [
        ...state,
        action.data,
      ]
    case PuppyActions.ADOPT_PUPPY:
      return state.map(puppy => {
        if (puppy.id === action.data) {
          return { ...puppy, available: false }
        }
        return puppy
      })
    case PuppyActions.RECEIVE_PUPPIES:
      return action.data
    default:
      return state
  }
}

function availabilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case PuppyActions.UPDATE_FILTER:
      return action.data
    default:
      return state
  }
}

function loading(state = { loading: false }, action) {
  switch (action.type) {
    case PuppyActions.REQUEST_PUPPIES:
      return { ...state, loading: true }
    case PuppyActions.RECEIVE_PUPPIES:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default combineReducers({ puppies, availabilityFilter, loading })
