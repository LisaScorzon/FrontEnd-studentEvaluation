
import {getBatches, getBatch} from '../actions/batches'

//this part of the algorithm works woohooo!!!
export const number = Math.floor(Math.random() * 100) 

export const colors = (number) => {
  if(number <= 53) return ['RED']
  if(number > 53 && number <= 81) return ['YELLOW']
  if(number > 81) return ['GREEN']

  console.log (colors(number));
}
 //////////
 //const {batch, students} = this.props

//  const redStudents = batch.students.filter(student => student.currentColor === 'red').length;
//  const yellowStudents = batch.students.filter(student => student.currentColor === 'yellow').length;
//  const greenStudents = batch.students.filter(student => student.currentColor === 'green').length;


// export const getRandomStudentId = (students) => {
//   const num = getRandomNumber(100)
//   const colors = getColorArray(num)
//   const filteredStudents = filterStudents(students, colors)

//   if(!filteredStudents[0]) return getRandomStudentId(students)
//   return filteredStudents[Math.floor(Math.random() * filteredStudents.length)].id
// }

export function getRandomStudent(arrayOfObjects) {

  let randomStudent

  if (arrayOfObjects.filter(object => object.latestEvaluation !== 'grey').length === 0) {

      randomStudent = arrayOfObjects[Math.floor(Math.random()*arrayOfObjects.length)]

  } else {

      const randomNumber = Math.floor(Math.random() * 100)

      let color
      if (randomNumber <= 53) color = 'red'
      else if (randomNumber > 53 && randomNumber < 81) color = 'yellow'
      else color = 'green'

      const students = arrayOfObjects.filter(object => object.latestEvaluation === color)
      const randomStudent = students[Math.floor(Math.random()*students.length)]

      if (randomStudent !== undefined )
      return randomStudent

      else return getRandomStudent(arrayOfObjects)

  }

  return randomStudent
}