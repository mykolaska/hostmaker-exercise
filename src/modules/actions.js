import types from './types'

const getOwnersRequestAction = () => ({
  type: types.GET_OWNERS_REQUESTED,
})

const getOwnersSuccessAction = (data) => ({
  type: types.GET_OWNERS_SUCCESS,
  payload: data,
})

const getOwnersErrorAction = (error) =>({
  type: types.GET_OWNERS_ERROR,
  payload: error.message,
})

export default {
  getOwnersRequestAction,
  getOwnersSuccessAction,
  getOwnersErrorAction,
}
