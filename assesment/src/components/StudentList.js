import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';

import { getBatch } from '../actions/batches'
import { addStudent, removedStudent, getStudents, getStudent } from '../actions/students'

import Student from './Student'
import StudentForm from './StudentForm'
import PercentageBar from './percentageBar'


class StudentList extends PureComponent {


    toggleEdit = () => {
        this.setState({
          edit: !this.state.edit
        })
      }
    
      componentWillMount() {
        this.props.getStudents(this.props.match.params.studentNumber)
        this.props.getBatch(this.props.match.params.BatchId)
        
      }
    
      removedStudent = (studentNumber) => {
        this.props.removedStudent(studentNumber)
      }


    render() {

        const  {students, batch, batches, student }  = this.props

        console.log(batch)
        if(!batch) return null
    
    return(
       <div>
          
            
    
            
    
            <div className="flex-container">
            <PercentageBar />
            <StudentForm onSubmit={this.props.createdStudent} batch={batch}/>
                
                {
                students
                .map((student,index) => (
                
                <div className="student" key={index}>
                  <Link to={ `/students/${student.studentNumber}` } className="student-link">
                  <div className="student-header">
                  <h3>Student Name: {student.fullName}</h3>
                  <h5 > Batch Number. {student.batchNumber} </h5>
                  <h6>Last evaluation:{student.currentColor}</h6> 
                  <h6> Evaluation date:{student.date}</h6>
                  

                    </div>
                   
                    <div
					 className="photo" key={index}>
					<img src = {student.photo} width='250' length='250'/>
                    <hr/>
				</div>
                 
                 </Link>
                 
                     <Button type='submit' color="secondary" variant="raised" className="removed_student" onClick={() => this.removedStudent(student.studentNumber)}>Remove Student</Button>
                      {/* color="secondary"
                    variant="raised" className="removed_student" */}
                   <hr/>
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

