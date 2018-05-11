import * as request from 'superagent'
import {logout} from './users'
import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4002'


export const ADD_STUDENT = 'ADD_STUDENT'
export const GET_STUDENT = 'GET_STUDENT'
export const REMOVED_STUDENT = 'REMOVED_STUDENT'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENTSBATCH='GET_STUDENTSBATCH'

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


export const getStudent = (studentNumber) => (dispatch) => {
 
  console.log('actionOneStudent')
    
  request
      
      .get(`${baseUrl}/students/${studentNumber}`)
      .then(result => {
        dispatch({
        type: GET_STUDENT,
            payload: result.body
        })
      })
      .catch(err => alert(err))
  }

  export const getStudentsBatch = (batchNumber) => (dispatch) => {
 
    console.log('actionByBatch')
      
    request
        
        .get(`${baseUrl}/students/${batchNumber}`)
        .then(result => {
          dispatch({
          type: GET_STUDENTSBATCH,
              payload: result.body.batchNumber
          })
        })
        .catch(err => alert(err))
    }
  
  export const getStudents = () => (dispatch, getState) => {
    const state = getState()
    console.log('all students')
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



export const removedStudent = (studentNumber) => (dispatch, getState) => {
  const state = getState()
  console.log('remove studentaction')
  request
    .delete(`${baseUrl}/students/${studentNumber}`)
    .then(response => {
      dispatch({
      type: REMOVED_STUDENT,
      payload: response.body
    })
    })
    .catch(err => console.error(err))
}

export const updateStudent = (studentNumber, updates) => (dispatch, getState) => {
  const state = getState()
  request
    .put(`${baseUrl}/students/${studentNumber}`)
    .send(updates)
    .then(response => dispatch ({
      type: UPDATE_STUDENT,
      payload: response.body
    }))
}