import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {createEvaluation} from '../actions/evaluations'



class EvalualtionForm extends PureComponent {

    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createEvaluation(this.state)
        console.log(this.props)
    }


    handleChange = (e) => {
        const {name, value} = e.target
        
        this.setState({
            //id: this.props.initialValues.id,
            batch: this.props.student.batchNumber,
            student: this.props.student.id,
            [name] : value
        })

        // this.setState({
        //     batch:1,
        //   [name]: value
    
      };


    render() {

        return(
            <form onSubmit={this.handleSubmit}>
            
                <TextField
                    id='currentColor'
                    name='currentColor'
                    label='Add an evaluation'
                    value={this.state.currentColor ||  ''}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id='date'
                    name='date'
                    label='Enter todays date'
                    value={this.state.date ||  ''}
                    onChange={this.handleChange}
                  />
                <TextField
                    id='remarks'
                    name='remarks'
                    label='Remarks'
                    value={this.state.remarks ||  ''}
                    onChange={this.handleChange}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="addStudent"
                >
                    Add Evaluation
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        evaluations: state.evaluations,
        student: state.student
	}
}

export default connect(mapStateToProps)(EvalualtionForm)
