import React, { Component } from 'react';
import Map from './components/Map'
import QuakeWeek from './models/QuakeWeek'
import QuakeMonth from './models/QuakeMonth'

import QuakeList from './components/QuakeList'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  constructor(){
    super()

    this.state = {
      quakeWeek : [],
      quakeMonth: []
    }
  }

  componentDidMount(){
    QuakeWeek.all().then(res =>

       this.setState ({
          quakeWeek : res.data.features

        })
      )

      QuakeMonth.all().then(res =>

       this.setState ({
          quakeMonth : res.data.features

        })
      )
  }

  render() {
    return (
      <div className="container">

  
        <div className="mapContainer">
            <Map quakesData={this.state.quakeWeek}/>
        </div>
   


      <div className="row">
      <div className="col-md-6 qCont">
        <div className="quakeContainer">
        
          <h2>Earthquakes(Past Week): </h2>
          <QuakeList quakeData={this.state.quakeWeek}/>
        </div>
      </div>

      <div className="col-md-6 qCont">
         <div className="quakeContainer">
          <h2>Earthquakes(Past Month): </h2>
          <QuakeList quakeData={this.state.quakeMonth}/>
        </div>
        
        </div>
   </div>

 </div>
    );
  }
}

export default App;
