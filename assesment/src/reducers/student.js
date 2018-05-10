import { GET_STUDENTS } from '../actions/students'



// export default function (state = null, action) {
//   switch(action.type) {
//     case GET_STUDENT:
//       return action.payload

      export default function (state = [], {type, payload}) {
        switch (type) {
            case GET_STUDENTS:
                return payload
    
       
          default:
            return state
        }
    
    
        
    }

//     case UPDATED_STUDENT:
//       if(action.payload.id === state.id) {
//         return {...state, ...action.payload }
//       }
//       else return state
//     default:
//       return state
//   }
// }