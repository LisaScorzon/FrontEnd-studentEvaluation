import * as request from 'superagent'
import {logout} from './users'
import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4002'


export const ADD_STUDENT = 'ADD_STUDENT'
export const GET_STUDENT = 'GET_STUDENT'
export const REMOVED_STUDENT = 'REMOVED_STUDENT'
export const UPDATED_STUDENT = 'UPDATED_STUDENT'
export const GET_STUDENTS = 'GET_STUDENTS'

export const addStudent = (student) => (dispatch) => {
  
  console.log('action')
  request
  
    .post(`${baseUrl}/students`)
    .send(student)
    .then(result => {
        dispatch({
            type: ADD_STUDENT,
            payload: result.body
        })
    })
    .catch(err => console.error(err))
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
  
  export const getStudents = () => (dispatch, getState) => {
    const state = getState()
    request
	.get(`${baseUrl}/students`)
	.then(result => {
		dispatch({
			type: GET_STUDENTS,
			payload: result.body.students
		})
    })
	.catch(err => console.error(err))
}



export const removedStudent = (userId) => (dispatch, getState) => {
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