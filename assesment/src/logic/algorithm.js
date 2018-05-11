
import {getBatches, getBatch} from '../actions/batches'



export function getRandomStudent(arrayOfObjects,event) {
  event.preventDefault()



    const number = Math.floor(Math.random() * 100)

    let color
    if(number <= 53) color= 'RED'
    if(number > 53 && number <= 81) color= 'YELLOW'
    if(number > 81) color= 'GREEN'


    const students = arrayOfObjects.filter(object => object.currentColor === color)
    const randomStudent = students[Math.floor(Math.random()*students.length)]
    console.log('button!')
    console.log(randomStudent)
    if (randomStudent !== undefined ){
      return alert(randomStudent.fullName + ' has a ' + randomStudent.currentColor + ' evaluation!, Ask a question!!!!! :-) ')

    }else {
      return alert(' dude, no students with this evaluation exist....please click again ;-) ')

}

}
 
 


//  const RandomStudent = (currentColor) => {
//   return currentColor[Math.floor(Math.random() * currentColor.length)].studentNumber
// }


