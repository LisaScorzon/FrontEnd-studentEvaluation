import {GET_BATCHES, ADD_BATCH, GET_BATCH} from '../actions/batches'

export default function (state = [], {type, payload}) {
	switch (type) {
    
    
      
      case GET_BATCH:
      console.log('getbatch1')
			return payload

    
   
      default:
        return state
    }


    
}