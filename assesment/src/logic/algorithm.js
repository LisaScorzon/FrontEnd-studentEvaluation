
import {getBatches, getBatch} from '../actions/batches'


export const number = Math.floor(Math.random() * 100) 

export const colors = (number) => {
  if(number <= 53) return ['RED']
  if(number > 53 && number <= 81) return ['YELLOW']
  if(number > 81) return ['GREEN']

  console.log (colors(number));
}
 
 
//  const redStudents = batches.students.filter(student => student.currentColor === 'red').length;
//  const yellowStudents = batches.students.filter(student => student.currentColor === 'yellow').length;
//  const greenStudents = batches.students.filter(student => student.currentColor === 'green').length;


 const RandomStudent = (currentColor) => {
  return currentColor[Math.floor(Math.random() * currentColor.length)].studentNumber
}


