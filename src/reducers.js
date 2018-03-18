
function puppies(state = [], action) {
  switch (action.type) {
    case 'CREATE_PUPPY':
      return [
        ...state,
        action.data,
      ]
    default:
      return state
  }
}

export default puppies
