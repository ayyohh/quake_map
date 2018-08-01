
import React, { Component } from 'react'


class Quake extends Component {


  render(){

    return (
      <li>
         {this.props.title},{this.props.mag},{this.props.time}
      </li>
    )

  }
}

export default Quake
