 
// import React, {PureComponent} from 'react';
// import {connect} from 'react-redux'
// import {getStudent} from '../actions/batches'
// import {Link} from 'react-router-dom'
// import EvaluationForm from './EvaluationForm'
// import Button from 'material-ui/Button';
// import TextField from 'material-ui/TextField'



// class EvaluationPage extends PureComponent {

 

//     componentWillMount() {
//         this.props.getStudent(this.props.match.params.studentNumber)
//         this.props.getColor(this.props.match.params.studentNumber)
//     }

    

//     render() {
//          const {student, batch, colors} = this.props
//          console.log(student)
      
         
         
        
          
//         return (
//             <div>
            
//             <h1>{student.name}</h1>
//             {
//                 !this.state.edit &&
//                 <Button onClick={this.toggleEdit}>Edit</Button>
//             }

//             {
//                 this.state.edit &&
//                 <EvaluationForm initialValues={student} onSubmit={this.updateStudent} batch={batch}/>
//             }

//             <EvaluationForm />

//             { colors.map(color =>
//                 <div className= "evaluationsContainer">
//                 <h2>{color.date} : {color.color}</h2>
//                 </div>
//             )}
//        </div>
//     )

// }
// }


// const mapStateToProps = (state) => ({
//       batches: state.batches,
//       //currentUser: state.currentUser,
      
//     })

// export default connect(mapStateToProps, {
//     getBatches, addBatch})
//     (OverviewPage)
