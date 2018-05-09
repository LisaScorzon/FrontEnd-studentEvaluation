import React, { PureComponent} from 'react'
import {addStudent} from '../actions/students'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'




class StudentForm extends PureComponent {
  state={}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addStudent(this.state)
  }

  handleChange = (e) => {
    const {name, value} = e.target
   
    
    this.setState({
        batch:1,
      [name]: value
    })
  }
  
  render() {
      console.log(this.state)
    
      return(
      <form onSubmit={this.handleSubmit}>
      <TextField
            id='student' name='fullName'
            label='add name here' value={this.state.fullName || ''}
            onChange={this.handleChange}
        />
        
        <TextField
            id='photo' name='photo'
            label='add photo here' value={this.state.photo || ''}
            onChange={this.handleChange}
        />

    

       <Button
            type='submit' color="secondary"
            variant="raised" className="add_student"
        >
            Add Student
        </Button>
      </form>
    )
  }

}

const mapStateToProps = function (state) {
	return {
        students: state.students,
        batch: state.batch
	}
}

export default connect(mapStateToProps,
     {addStudent}
)(StudentForm)
