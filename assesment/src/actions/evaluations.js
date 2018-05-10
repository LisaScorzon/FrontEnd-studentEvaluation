import * as request from 'superagent'

export const ADD_EVALUATION = 'ADD_EVALUATION'
export const SHOW_EVALUATIONS = 'SHOW_EVALUATIONS'
export const UPDATE_EVALUATION = 'UPDATE_EVALUATION'

const baseUrl = 'http://localhost:4002'

export const getEvaluations = (studentNumber) => (dispatch, getState) => {
 
  request
    .get(`${baseUrl}/colors/${studentNumber}/color`)
   
    .then(result => {
      console.log(result.body.color);
      dispatch({
        type: SHOW_EVALUATIONS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createEvaluation = () => (dispatch, getState) => {
  request
    .post(`${baseUrl}/colors`)
    .send({})
    .then(response => {
      dispatch({
        type: ADD_EVALUATION,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const updateEvaluation = (studentNumber, color) => (dispatch, getState) => {
  request
    .patch(`${baseUrl}/colors/${studentNumber}`)
    .send({color})
    .then(result => {
      dispatch({
        type: UPDATE_EVALUATION
      })
    })
    .catch(err => console.error(err))
}
