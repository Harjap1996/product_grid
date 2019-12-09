import React, { Component } from 'react'
import Grid from './grid.jsx'
import data from '../data.js'

class App extends Component {
  render() {
    return (
      <div>
          <Grid data={data}/>
      </div>
    )
  }
}


export default App;
