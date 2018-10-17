export const CREATE_PUPPY = 'CREATE_PUPPY'
export const ADOPT_PUPPY = 'ADOPT_PUPPY'
export const UPDATE_FILTER = 'UPDATE_FILTER'
export const REQUEST_PUPPIES = 'REQUEST_PUPPIES'
export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES'

export function createPuppy(data) {
  return { type: CREATE_PUPPY, data }
}

export function adoptPuppy(id) {
  return { type: ADOPT_PUPPY, data: id }
}

export function updateFilter(filter) {
  return { type: UPDATE_FILTER, data: filter }
}

function requestPuppies() {
  return { type: REQUEST_PUPPIES }
}

function receivePuppies(data) {
  return { type: RECEIVE_PUPPIES, data }
}

export const fetchPuppies = () => (dispatch) => {
  dispatch(requestPuppies())

  // How to access contents of a Github file https://stackoverflow.com/a/14716043/5049215
  // https://s3-us-west-2.amazonaws.com/sia-generic-bucket/puppies.json
  const puppiesUrl = 'https://s3-us-west-2.amazonaws.com/sia-generic-bucket/puppies.json'
  const headers = new Headers()
  headers.append('Accept', 'application/vnd.github.3.raw')

  fetch(puppiesUrl, { headers })
    .then(response => response.json())
    .then(json => {
      dispatch(receivePuppies(json))
    })
    .catch(err => {
      // TODO: dispatch an action to receive error which sets the error in state and sets isLoading to false
      const error = new Error(err)
      console.error(error);
      throw error
    })
}
