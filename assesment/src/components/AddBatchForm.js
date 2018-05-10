import React, { PureComponent} from 'react'
import TextField from 'material-ui/TextField'
import {addBatch} from '../actions/batches'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';


class BatchForm extends PureComponent {
    state={}
  
    handleSubmit = (e) => {
      e.preventDefault()
      this.props.addBatch(this.state)
  
    }
  
    handleChange = (e) => {
      const {name, value} = e.target
      
      
      this.setState({
        [name]: value
      })
    }
  
    render() {

        
      return(
        <form onSubmit={this.handleSubmit}>
        <TextField
            id='batch' name='batchNumber'
            label='Batch Number' value={this.state.batchNumber || ''}
            onChange={this.handleChange}
        />
        <TextField
          id='startDate' name='start_date'
          label='Start Date' value={this.state.start_date || ''}
          onChange={this.handleChange}
          />
        <TextField
            id='endDate' name='end_date'
            label='End Date' value={this.state.end_date || ''}
            onChange={this.handleChange}
        />
        <Button
            type='submit' color="secondary"
            variant="raised" className="add_batch"
        >
            Add batch
        </Button>
    </form>
)
}
}

  
  
const mapStateToProps = function (state) {
	return {
        batches: state.batches
	}
}

export default connect(mapStateToProps,
     {addBatch}
)(BatchForm)