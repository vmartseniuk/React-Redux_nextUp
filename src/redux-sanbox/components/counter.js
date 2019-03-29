import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators} from 'redux'
import * as actions from '../actions'
const Counter = ({counter, inc, dec, rnd}) => {
    return(
    <div className="jumbotron">
      <h2 >{counter}</h2>
      <button 
        onClick={dec}
        className="btn btn-primary btn-lg">DEC</button>
      <button
        onClick={inc} 
        className="btn btn-primary btn-lg">INC</button>
      <button
        onClick={rnd}
        className="btn btn-primary btn-lg">RND</button>
    </div>
    )
}

const mapStateToProps = (state) => {
  return{
    counter: state
  }
}
// syper new style
// conect can create bindActionCreators and send  dispatch
export default connect(mapStateToProps, actions)(Counter)


// const mapDispatchToProps = (dispatch) => {
//   const {inc, dec, rnd } = bindActionCreators(actions, dispatch);
// // return{
//   //   inc: () => dispatch(inc()),
//   //   dec: () => dispatch(dec()),
//   //   rnd: () => {
//   //     const randomValue = Math.floor(Math.random()*10)
//   //     dispatch(rnd(randomValue))
//   //   }
//   // }

//   return {
//     inc,
//     dec,
//     rnd: () => {
//           const randomValue = Math.floor(Math.random()*10)
//           rnd(randomValue)
//     }
//   }
// } 
// old style


// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);  
// }  //new style

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)
