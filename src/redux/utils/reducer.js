import { identity, propOr, prop } from 'ramda'

/**
 * Create a new reducer
 *
 * @param {*} init - The initial state value
 * @param {*} handlers - A object with action's handlers
 *
 * @url https://medium.com/javascript-inside/the-elegance-of-react-ebc21a2dcd19
 */
const createReducer = (init, handlers) => (state = init, action) =>
  propOr(identity, prop('type', action), handlers)(state, action)

export { createReducer }
