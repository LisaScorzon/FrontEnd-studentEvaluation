import * as request from 'superagent'

export const CREATE_EVALUATION = 'CREATE_EVALUATION'
export const GET_EVALUATIONS = 'GET_EVALUATIONS'
export const UPDATE_EVALUATION = 'UPDATE_EVALUATION'

const baseUrl = 'http://localhost:4002'

export const getEvaluations = (studentNumber) => (dispatch, getState) => {
 
  request
    .get(`${baseUrl}/colors/${studentNumber}/color`)
   
    .then(result => {
      console.log(result.body.color);
      dispatch({
        type: GET_EVALUATIONS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createEvaluation = (currentColor) => (dispatch) => {
  request
  console.log('create evaluation ACTION')
    .post(`${baseUrl}/colors`)
    .send(currentColor)
    .then(result => {
      dispatch({
        type: CREATE_EVALUATION,
        payload: result.body
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
