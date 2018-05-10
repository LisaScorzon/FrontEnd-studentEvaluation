import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBatch } from '../actions/batches'
import { addStudent, removedStudent, getStudents, getStudent } from '../actions/students'

import Student from './Student'
import StudentForm from './StudentForm'


class StudentList extends PureComponent {


    toggleEdit = () => {
        this.setState({
          edit: !this.state.edit
        })
      }
    
      componentWillMount() {
        this.props.getStudents(this.props.match.params.studentNumber)
        this.props.getBatch(this.props.match.params.BatchId)
        //this.props.getRandomStudent(this.props.match.params.BatchId)
        //this.props.createdStudent(this.props.match.parmas.BatchId)
      }
    
  


    render() {

        const  {students, batch, batches, student }  = this.props

        console.log(batch)
        if(!batch) return null
    
    return(
       <div>
          
            
    
            
    
            <div className="flex-container">
            <StudentForm onSubmit={this.props.createdStudent} batch={batch}/>
                
                {
                students
                .map((student,index) => (
                
                <div className="student" key={index}>
                  <Link to={ `/students/${student.batchNumber}` } className="student-link">
                  <div className="student-header">
                  <h3>Student Name: {student.fullName}</h3>
                  <h5 > Batch Number. {student.batchNumber} </h5>
                    </div>
                    
                    <div
					 className="photo" key={index}>
					<img src = {student.photo} />
                    <hr/>
				</div>
                 
                 </Link>
                    </div>
                    ))
                }
                </div>
              
                

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

export default connect(mapStateToProps, { getStudents, getBatch, addStudent, removedStudent, getStudent })(StudentList)

