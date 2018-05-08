import {ADD_BATCH} from '../actions/batches'




export default function (state = {}, {type, payload}) {
	switch (type) {
		case ADD_BATCH:
			return payload

		default:
      return state
	}
}