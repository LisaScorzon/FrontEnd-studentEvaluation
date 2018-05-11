
import { GET_STUDENTS, GET_STUDENTSBATCH } from '../actions/students'



export default function (state = [], { type, payload }) {
    switch (type) {
        
        case GET_STUDENTS:
        console.log('batch reducer passed')
            return payload

            case GET_STUDENTSBATCH:
            console.log('batch reducer passed')
                return payload

            default: return state
    }
}
    