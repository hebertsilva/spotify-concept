import { merge } from 'ramda'
import { createReducer } from '../utils/reducer'
import { handleActions } from '../utils/actions'

import { STORE } from '../utils/constants'

const initialState = {
  recoverByEmail: {
    isLoading: false,
    isEmailSent: false,
    errors: undefined
  }
}

const actions = [STORE]

const handler = (state, action) => merge(state, action.payload)
const handlers = handleActions(actions, handler)

export default createReducer(initialState, handlers)
