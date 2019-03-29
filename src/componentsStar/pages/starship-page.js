import React from 'react'

import {withRouter} from 'react-router-dom'

import {
    StarshipList
  } from '../sw-componens/index'

const StarshipPage= ({history}) =>  {

    // state ={
    //     selectedItem :false
    // }

    // onItemSelected = (selectedItem) => {
    //     this.setState({selectedItem})
    // }

  
    // const {selectedItem} = this.state

    return (
        <StarshipList 
            onItemSelected={(id) => {
                history.push(id)
            }}/>
        // <Row 
        // left={<StarshipList onItemSelected={this.onItemSelected}/>}
        // right={<StarshipDetails itemId ={selectedItem}/>}/>
    )
    }


export default withRouter(StarshipPage)
