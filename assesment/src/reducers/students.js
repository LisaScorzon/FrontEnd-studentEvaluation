
import { GET_STUDENTS, ADD_STUDENT, GET_STUDENTSBATCH, REMOVED_STUDENT } from '../actions/students'



export default function (state = [], { type, payload }) {
    switch (type) {
        
        case GET_STUDENTS:
            return payload

            
            case REMOVED_STUDENT:
                               
            console.log('reducer remove student')
               return state.filter(student => student.id !== payload.id)
               

           
               case ADD_STUDENT :
                            return [...state, payload] 

            case GET_STUDENTSBATCH:
                return payload

            default: return state
    }
}
    