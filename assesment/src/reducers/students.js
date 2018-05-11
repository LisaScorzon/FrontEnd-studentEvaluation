
import { GET_STUDENTS, ADD_STUDENT, GET_STUDENTSBATCH } from '../actions/students'



export default function (state = [], { type, payload }) {
    switch (type) {
        
        case GET_STUDENTS:
            return payload

            case ADD_STUDENT :
                            return [...state, payload] 

            case GET_STUDENTSBATCH:
                return payload

            default: return state
    }
}
    