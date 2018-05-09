import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBatch } from '../actions/batches'
import { createStudent, removeStudent } from '../actions/students'

import Student from './Student'
import StudentForm from './StudentForm'


class StudentList extends PureComponent {

    state = {
      edit: false
    }
  
    static propTypes = {
      batch: PropTypes.shape({
        id: PropTypes.number.isrequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        students: PropTypes.array.isRequired
      }).isRequired
    }

    toggleEdit = () => {
        this.setState({
          edit: !this.state.edit
        })
      }
    
      componentWillMount(props) {
        this.props.getBatch(this.props.match.params.id)
      }
    
      createStudent = (student, batchId) => {
        this.props.createStudent(student, this.props.match.params.id)
    
      }
    
      removeStudent = (studentId) => {
        this.props.removeStudent(studentId)
      }
    


    render() {

        const { batch } = this.props
        console.log(this.props.batch)
        if(!batch) return null
    
    return(
         <div>
             
            <div>
    
            <h1 className="batch-title">Batch #{batch.batchId}</h1>
    
            <button onClick={this.toggleEdit} className="new-student-btn">Add a student</button>
            </div>

                <div className="student-list">
             {
                batch.students.map((student, index) => (
                <div className="student">

                 <Student

                    key={index} batch={this.props.batch}
                    fullName={student.fullName} 
                    photo={
                    student.photo.indexOf("jpg") >= 0 || student.photo.indexOf("png") >= 0 }
                />

                    <div className="links">
                     <Link to={ `/students/${student.id}` } className="view-link">View</Link>
                     <button onClick={ () => this.removeStudent(student.id) } className="remove-link">
                    Remove
                     </button>
                    </div>


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
    batches: state.batches
        }
}

export default connect(mapStateToProps, { getBatch, createStudent, removeStudent })(StudentList)

