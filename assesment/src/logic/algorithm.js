
 
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
 





  // export const getRandomStudent = (students) => {
  //   const number = getRandomNumber(100)
  //   const color = ColorArray(number)
  //   const filteredStudents = filterStudents(students, colorArray)
  
  //   if(!filteredStudents[0]) return getRandomStudentId(students)
  //   return filteredStudents[Math.floor(Math.random() * filteredStudents.length)].id
  // }  
  


