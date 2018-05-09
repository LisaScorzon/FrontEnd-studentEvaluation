import { GET_STUDENT, UPDATED_STUDENT } from '../actions/students'



export default function (state = null, action) {
  switch(action.type) {
    case GET_STUDENT:
      return action.payload
    case UPDATED_STUDENT:
      if(action.payload.id === state.id) {
        return {...state, ...action.payload }
      }
      else return state
    default:
      return state
  }
}