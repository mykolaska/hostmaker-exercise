import types from './types'

/**
 * Action Handler
 */

const ACTION_HANDLERS = {
  [types.GET_OWNERS_REQUESTED]: (state) => {
    return {
      ...state,
      owners: {
        ...state.owners,
        isLoading: true,
        error: false,
      }
    }
  },
  [types.GET_OWNERS_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      owners: {
        ...state.owners,
        data: payload,
        isLoading: false,
        error: false,
      }
    }
  },
  [types.GET_OWNERS_ERROR]: (state, { payload }) => {
    return {
      ...state,
      owners: {
        ...state.owners,
        isLoading: false,
        error: true,
        errorMessage: payload,
      }
    }
  },
}

/**
 * Reducers
 */

const initialState = {
  owners: {
    data: [],
    isLoading: false,
    error: false,
    errorMessage: '',
  }
}

export default function ownersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
