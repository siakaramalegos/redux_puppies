export const CREATE_PUPPY = 'CREATE_PUPPY'
export const ADOPT_PUPPY = 'ADOPT_PUPPY'
export const UPDATE_FILTER = 'UPDATE_FILTER'

export function createPuppy(data) {
  return { type: CREATE_PUPPY, data }
}

export function adoptPuppy(id) {
  return { type: ADOPT_PUPPY, data: id }
}

export function updateFilter(filter) {
  return { type: UPDATE_FILTER, data: filter }
}
