import * as request from 'superagent'
import {logout} from './users'
import {isExpired} from '../jwt'


const baseUrl = 'http://localhost:4002'


export const ADD_BATCH = 'ADD_BATCH'
export const GET_BATCHES = 'GET_BATCHES'
export const GET_BATCH = 'GET_BATCH'






export const addBatch = (batch) => (dispatch) => {
    request

    .post(`${baseUrl}/batches`)
    .send(batch)
    .then(result => {
        dispatch({
            type: ADD_BATCH,
            payload: result.body
        })
    })
    .catch(err => console.error(err))
}


  export const getBatch = (batchId) => (dispatch) => {
  request
  
	.get(`${baseUrl}/batches/${batchId}`)
    .then(result => {
      dispatch({
        type: GET_BATCH,
		payload: result.body
      })
    })
    .catch(err => console.error(err))
}
  
  export const getBatches = () => (dispatch, getState) => {
const state = getState()
    request
      .get(`${baseUrl}/batches`)
      .then(result => {
        dispatch({
          type: GET_BATCHES,
          payload: result.body
        })
      })
      .catch(err => console.error(err))
  }