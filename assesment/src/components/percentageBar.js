import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './percentageBar.css'

class PercentageBar extends PureComponent {

render () {

    return(
        <div id="myProgress">
        <div id="myBar">30%
          <div id='mySecBar'>18%
            <div id='myThirdBar'>8%
            </div>
          </div>
        </div>
    </div>
    )
}
}

const mapStateToProps = function (state) {
	return {
        students: state.students,
	}
}

export default connect(mapStateToProps) (PercentageBar);