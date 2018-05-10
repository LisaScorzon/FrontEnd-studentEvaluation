
import { GET_STUDENTS } from '../actions/students'



export default function (state = [], { type, payload }) {
    switch (type) {
        case GET_STUDENTS:
            return payload

            default: return state
    }
}
    