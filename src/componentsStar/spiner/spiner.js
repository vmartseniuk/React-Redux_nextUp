import React, { Component } from 'react'
import './spiner.css'
export class Spiner extends Component {
  render() {
    return (
        <div className="lds-css ng-scope">
            <div style={{width:'100%',height:'100%'}} className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    )
  }
}

export default Spiner
