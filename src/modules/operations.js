import actions from './actions'
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/'


const OWNERS_URL = API_URL + 'owners'
const getOwners = () => {
  return (dispatch) => {
    dispatch(actions.getOwnersRequestAction)

    axios(OWNERS_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        dispatch(actions.getOwnersSuccessAction(response.data))
      })
      .catch((error) => {
        dispatch(actions.getOwnersErrorAction(error))
      })
  }
}

export default {
  getOwners,
}
