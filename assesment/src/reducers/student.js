import { GET_STUDENT, ADD_STUDENT, UPDATE_STUDENT } from '../actions/students'




                export default function (state = {}, { type, payload }) {
                    switch (type) {
                        case GET_STUDENT:
                        console.log('reducer passed')
                            return payload

                
                        case ADD_STUDENT :
                        console.log('reducer add student passing')
                            return payload
                            
                            
                            case UPDATE_STUDENT:
                                  
                                    return payload
                                  
                
                        default:
                            return state
                    }
                }

               
                       
                    
  