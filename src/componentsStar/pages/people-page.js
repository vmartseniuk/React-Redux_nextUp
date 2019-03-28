import React, { Component } from 'react'
import Row from '../row'

import {
    PersonList,
    PersonDetails,
  } from '../sw-componens/index'

export class PeoplePage extends Component {

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
        left={<PersonList onItemSelected={this.onItemSelected}/>}
        right={<PersonDetails itemId ={selectedItem}/>}/>
    )
  }
}

export default PeoplePage
