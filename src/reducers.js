import * as PuppyActions from './actions'

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
    default:
      return state
  }
}

export default puppies
