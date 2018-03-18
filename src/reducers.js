import * as PuppyActions from './actions'

function puppies(state = [], action) {
  switch (action.type) {
    case PuppyActions.CREATE_PUPPY:
      return [
        ...state,
        action.data,
      ]
    default:
      return state
  }
}

export default puppies
