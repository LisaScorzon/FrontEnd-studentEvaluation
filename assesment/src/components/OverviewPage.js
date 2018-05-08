import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getBatches, addBatch} from '../actions/batches'
import {Link} from 'react-router-dom'
// import Button from 'material-ui/Button'
import BatchForm from './AddBatchForm'



class OverviewPage extends PureComponent {

 

    componentWillMount() {
        this.props.getBatches(this.props.match.params.id)
    }

    

    render() {
         const {batches} = this.props
         console.log(batches)
      
         
         
        
         
        return (
            <div>

       
       
            
      
              <h2 className="batch-title">All Batches</h2>
      
              <div className="flex-container">

              
                {
                  batches
                    .map((batch, index) => (
      
                      <div className="batch" key={index}>
                      <Link to={ `/batches/${batch.id}` } className="batch-link">
                        <div className="batch-header">
                          <h3>Batch No. {batch.id}</h3>
                        </div>
      
                        
                      </Link>
                      </div>
                  ))
                }
              </div>
              <BatchForm  />
      
             
      
            </div>
      
          )
        }
      }
      

const mapStateToProps = (state) => ({
      batches: state.batches,
      //currentUser: state.currentUser,
      
    })

export default connect(mapStateToProps, {
    getBatches, addBatch})
    (OverviewPage)
