import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class Student extends PureComponent {

  render() {
    return(
      <div>
        <img src={this.props.photo} alt="Profile"/>

        <h3>{this.props.firstName} {this.props.lastName}</h3>
        <p>Student ID: {this.props.userId}</p>
        <p>Evaluations: {this.props.currentColor}</p>
        <p>Date: {this.props.date}</p>
        <div className={this.props.status}></div>
      </div>
    )
  }
}

export default Student