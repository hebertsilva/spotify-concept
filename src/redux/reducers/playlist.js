import { merge } from 'ramda'

import { createReducer } from '../utils/reducer'
import { handleActions } from '../utils/actions'

import { SET_PLAYLIST } from '../utils/constants'

const initialState = {
  all: [],
  isLoading: false
}

const actions = [SET_PLAYLIST]

const handler = (state, action) => merge(state, action.payload)
const handlers = handleActions(actions, handler)

export default createReducer(initialState, handlers)
