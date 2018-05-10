

import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent, updateStudent} from '../actions/students'
import {getEvaluations, updateEvaluation, createEvaluation} from '../actions/evaluations'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper'
import EvaluationForm from './EvaluationForm';

class EvaluationPage extends PureComponent {

    state = {
        editStudent: false,
        editEvaluation: false,
        selectedEvaluation: 0
    }

    componentWillMount(){
        this.props.getStudent(this.props.match.params.studentNumber)
        //this.props.getEvaluations(this.props.match.params.id)
    }

    toggleEditStudent = () => {
        this.setState({
            editStudent: !this.state.editStudent
        })
    }

    toggleEditEvaluation = (id) => {
        console.log(id)
        this.setState({
            editEvaluation: !this.state.editEvaluation,
            selectedEvaluation: id
        })
    }



    render(){
        const {batch,batches, student, evaluations} = this.props
        console.log(student)

        return(
            <Paper className="outer-paper">
                <h1>Student Name: {student.fullName}</h1>
                <h3>Batch Number: {student.batchNumber}</h3>
                <EvaluationForm/>
                <img src = {student.photo} />
                
                <h4>Last evaluation:{student.currentColor}</h4> <h4> Evaluation date:{student.date}</h4>
                
                {
                    !this.state.editStudent &&
                    <Button onClick={this.toggleEditStudent}>Edit</Button>
                }
                    
                {/* {
                    this.state.editStudent &&
                    <StudentForm initialValues={student} onSubmit={this.updateStudent} batch={batch}/>
                }
                {
                    !this.state.editEvaluation &&
                    <NewEvaluation onSubmit={this.props.addEvaluation}/>
                } */}

                {/* { evaluations.map(evaluation =>
                    <div className= "evaluationsContainer">
                    {
                        !this.state.editEvaluation && 
                        <div><h2>{evaluation.date} : {evaluation.evaluation}</h2>
                        <Button onClick={() => this.toggleEditEvaluation(evaluation.id)}>Edit</Button></div>
                    }

                    {/* {
                        this.state.editEvaluation && this.state.selectedEvaluation === evaluation.id &&
                        <NewEvaluation initialValues={evaluation} onSubmit={this.updateEvaluation} evaluationId={evaluation.id}/>
                    } */}
                    
                    {/* </div> */}
                
            
            
                </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    student: state.student,
    evaluations: state.evaluations,
    batch: state.batch
})

export default connect (mapStateToProps, {getStudent, getEvaluations, createEvaluation})(EvaluationPage)

