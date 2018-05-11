import { GET_STUDENT,  UPDATE_STUDENT, REMOVED_STUDENT } from '../actions/students'




                export default function (state = {}, { type, payload }) {
                    switch (type) {
                        case GET_STUDENT:
                        console.log('reducer passed')
                            return payload

                

                            
                            case REMOVED_STUDENT:
                               
                             console.log('reducer remove student')
                                return state.filter(student => student.id !== payload.id)
                            
                            
                            case UPDATE_STUDENT:
                                  
                                    return payload
                                  
                
                        default:
                            return state
                    }
                }

               
                       
                    
  