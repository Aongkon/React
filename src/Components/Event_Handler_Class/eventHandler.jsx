// import React, { Component } from 'react'

// export default class eventHandler extends Component {


//   constructor(props) {
//     super(props)
  
//     this.state = {
//        changeValue : ""
//     }
//   }
  
// //state nite gele constractor lagbe and state ar value change korte chyle "this.setState" use korte hobe

//   handleChange = (e) => {
    
//     this.setState ({
//       changeValue: e.target.value
//     }, ()=>{
//       console.log(this.state.changeValue)
//     })

   
//   }

//   render() {
//     return (
//       <div style={{ margin : "40px" }}>
//         <input type="text" onChange={this.handleChange}></input>
//         <p>{this.state.changeValue}</p>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class eventHandler extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       onChangeValue: ""
    }
  }
  
  handlerOnChange = (e) =>{
    this.setState({
      onChangeValue: e.target.value 
    }, () => {
      console.log(this.state.onChangeValue)
    })
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handlerOnChange}></input>
        <p>{this.state.onChangeValue}</p>
      </div>
    )
  }
}

