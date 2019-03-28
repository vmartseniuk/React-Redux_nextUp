import React, { Component } from 'react'
import Row from '../row'

import {
    PlanetList,
    PlanetDetails
  } from '../sw-componens/index'



  
export class PlanetPage extends Component {

    state ={
        selectedItem :false
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

  render() {
    const {selectedItem} = this.state

    return (
        <Row 
        left={<PlanetList onItemSelected={this.onItemSelected}/>}
        right={<PlanetDetails itemId ={selectedItem}/>}/>
    )
  }
}

export default PlanetPage
