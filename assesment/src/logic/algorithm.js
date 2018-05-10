
 
//insert logic percentages of randomness below
//this part of the algorithm works woohooo!!!
export const number = Math.floor(Math.random() * 100) 

export const colorArray = (number) => {
  if(number <= 53) return ['RED']
  if(number > 53 && number <= 81) return ['YELLOW']
  if(number > 81) return ['GREEN']

  console.log (colorArray(number));
}
 //////////
 
export const data = [{name: 'donald', color : 'red'},{name: 'wally', color : 'green'},{name: 'micky', color : 'yellow'},
{name: 'minnie', color : 'red'}]

export const filteredStudents=(data)=> {
const total = array.length
const red = array.filter(object => object.color === 'red').length
const green = array.filter(object => object.color === 'green').length
const yellow = array.filter(object => object.color === 'yellow').length

console.log(filteredStudents(data))
}





  // export const getRandomStudent = (students) => {
  //   const number = getRandomNumber(100)
  //   const color = ColorArray(number)
  //   const filteredStudents = filterStudents(students, colorArray)
  
  //   if(!filteredStudents[0]) return getRandomStudentId(students)
  //   return filteredStudents[Math.floor(Math.random() * filteredStudents.length)].id
  // }  
  


