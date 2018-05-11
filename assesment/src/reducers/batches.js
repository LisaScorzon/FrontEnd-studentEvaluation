import {GET_BATCHES, ADD_BATCH, GET_BATCH} from '../actions/batches'

export default function (state = [], {type, payload}) {
	switch (type) {
    
    case GET_BATCHES:
      return payload
      
      case GET_BATCH:
      console.log('getbatch1')
			return payload

      case ADD_BATCH:
			return [...state, payload]
   
      default:
        return state
    }


    
}