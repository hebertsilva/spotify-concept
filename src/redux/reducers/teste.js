import { merge } from 'ramda'

import { createReducer } from '../utils/reducer'
import { handleActions } from '../utils/actions'

import { TESTE } from '../utils/constants'

const initialState = {
  teste: {}
}

const actions = [TESTE]

const handler = (state, action) => merge(state, action.payload)
const handlers = handleActions(actions, handler)

export default createReducer(initialState, handlers)
