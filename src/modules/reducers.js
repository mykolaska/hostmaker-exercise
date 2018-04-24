/**
 * Action Handler
 */

const ACTION_HANDLERS = {
}

/**
 * Reducers
 */

const initialState = {
}

export default function ownersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
