
import React, { Component } from 'react'
import Quake from './Quake'



class QuakeList extends Component {

render(){
  let quakeList = this.props.quakeData.map( (quake, index) =>{

  return <Quake key={index} mag={quake.properties.mag} title={quake.properties.title} time={quake.properties.time}/>

    })

    return  (

      <div>
        <ul>
          {quakeList}
        </ul>
      </div>

    )
  }
}

export default QuakeList
