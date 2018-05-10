import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBatch } from '../actions/batches'
import { createStudent, removeStudent, getStudents } from '../actions/students'

import Student from './Student'
import StudentForm from './StudentForm'


class StudentList extends PureComponent {


    toggleEdit = () => {
        this.setState({
          edit: !this.state.edit
        })
      }
    
      componentWillMount() {
        this.props.getStudents(this.props.match.params.BatchId)
        this.props.getBatch(this.props.match.params.id)
      }
    
      createStudent = (student, batchNumber) => {
        this.props.createStudent(student, this.props.match.params.id)
    
      }
    
      removeStudent = (userId) => {
        this.props.removeStudent(userId)
      }
    


    render() {

        const  {students, batch}  = this.props

        console.log(students)
        //if(!batch) return null
    
    return(
       <div>
          
            
    
            <h2 className="batch-title">Batch no. {students.batchNumber} </h2>
    
            <div className="flex-container">
         
                
                {
                students
                .map((student,index) => (
                
                <div className="student" key={index}>
                  <Link to={ `/students/${student.userId}` } className="student-link">
                  <div className="student-header">
                  <h3>Student Name: {student.full_name}</h3>
                    </div>
                    
                    <div
					 className="photo" key={index}>
					<img src = {student.photo} />
				</div>
                 
                 </Link>
                    </div>
                    ))
                }
                </div>
                <StudentForm />
                
                <button onClick={ () => this.removeStudent(students.userid) } className="remove-link">
                Remove
                 </button>    
           

           </div>
          
       
        )
        
         
    }

}
    

    const mapStateToProps = (state, props) => {
    return {
    batch: state.batch,
    students: state.students
        }
}

export default connect(mapStateToProps, { getStudents, getBatch, createStudent, removeStudent })(StudentList)

