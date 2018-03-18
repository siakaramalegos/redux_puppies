export const CREATE_PUPPY = 'CREATE_PUPPY'
export const ADOPT_PUPPY = 'ADOPT_PUPPY'

export function createPuppy(data) {
  return { type: CREATE_PUPPY, data }
}

export function adoptPuppy(id) {
  return { type: ADOPT_PUPPY, data: id }
}
