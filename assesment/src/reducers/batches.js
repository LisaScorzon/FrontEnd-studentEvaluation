import {GET_BATCHES} from '../actions/batches'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_BATCHES:
			return payload

   
      default:
        return state
    }


    
}