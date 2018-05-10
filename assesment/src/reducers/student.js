import { GET_STUDENTS, GET_STUDENT, ADD_STUDENT } from '../actions/students'





    //   export default function (state = [], {type, payload}, action) {
    //     switch (type) {
    //         case GET_STUDENTS:
    //             return payload
    
       




                export default function (state = [], { type, payload }) {
                    switch (type) {
                        case GET_STUDENTS:
                            return payload
                
                        case ADD_STUDENT :
                        console.log('reducer passed')
                            return state.concat(payload)
                
                
                        default:
                            return state
                    }
                }

                // case UPDATED_STUDENT:
                //       if(action.payload.id === state.id) {
                //         return {...state, ...action.payload }
                //       }
                    
    //                   case ADD_STUDENT:
    //                   return [...state, action.payload]
                       
                    
    //                   case GET_STUDENT:
    //                         return action.payload
          
          
          
          
    //             default:
    //         return state
    //     }
    
    
        
    // }

//     case UPDATED_STUDENT:
//       if(action.payload.id === state.id) {
//         return {...state, ...action.payload }
//       }
//       else return state
//     default:
//       return state
//   }
// }