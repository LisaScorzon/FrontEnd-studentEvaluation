import * as request from 'superagent'


const baseUrl = 'http://localhost:4002'


export const CREATED_STUDENT = 'CREATED_STUDENT'
export const GET_STUDENT = 'GET_STUDENT'
export const REMOVED_STUDENT = 'REMOVED_STUDENT'
export const UPDATED_STUDENT = 'UPDATED_STUDENT'

export const createStudent = (student, userId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/students`)
    .send(student)
    .then(response => dispatch({
      type: CREATED_STUDENT,
      payload: response.body
    }))
}

export const getStudent = (userId) => (dispatch, getState) => {
  const state = getState()
  request
      .get(`${baseUrl}/students/${userId}`)
      .then(response => dispatch({
        type: GET_STUDENT,
        payload: response.body
      }))
      .catch(err => alert(err))
  }


export const removeStudent = (userId) => (dispatch, getState) => {
  const state = getState()
  request
    .delete(`${baseUrl}/students/${userId}`)
    .then(response => dispatch({
      type: REMOVED_STUDENT,
      payload: userId
    }))

}

export const updateStudent = (userId, updates) => (dispatch, getState) => {
  const state = getState()
  request
    .put(`${baseUrl}/students/${userId}`)
    .send(updates)
    .then(response => dispatch ({
      type: UPDATED_STUDENT,
      payload: response.body
    }))
}