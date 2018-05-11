import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getBatches, addBatch} from '../actions/batches'
import {Link} from 'react-router-dom'
// import Button from 'material-ui/Button'
import BatchForm from './AddBatchForm'
import  {getStudentsBatch} from '../actions/students'



class OverviewPage extends PureComponent {

 

    componentWillMount() {
        this.props.getBatches(this.props.match.params.batchNumber)
       // this.props.getStudentsBatch(this.props.match.params.batchNumber)
    }

    

    render() {
         const {batches, batch } = this.props
         //console.log(batches.startDate)
      
         
         
        
         
        return (
            <div>

       
            <BatchForm  />
            
      
              <h1 className="batch-title">All Batches</h1>
      
              <div className="flex-container">

              
                {
                  batches
                    .map((batch, index) => (
      
                      <div className="batch" key={index}>
                      <Link to={ `/batches/${batch.batchNumber}` } className="batch-link">
                        <div className="batch-header">
                          <h3>Batch Number. {batch.batchNumber}</h3>
                          <h5>Start Date. {batch.startDate}</h5>
                          {console.log(batch.startDate, batch.endDate)}
                          <h5>End Date. {batch.endDate}</h5>

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
      

const mapStateToProps = (state) => ({
      batches: state.batches,
      //currentUser: state.currentUser,
      
    })

export default connect(mapStateToProps, {
    getBatches, addBatch, getStudentsBatch})
    (OverviewPage)
