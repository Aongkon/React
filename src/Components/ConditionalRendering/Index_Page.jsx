// import LoginPage from './LoginPage'
// import HomePage from './HomePage'
// import React, { Component } from 'react'



// export default class Index_Page extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        isLoggedIn : true
//     }
//   }
  

//   // render() {

//   //   const {isLoggedIn} = this.state
//   //   // let element;
//   // //  const element = isLoggedIn? <HomePage/>:<LoginPage/>
    
//   //   return(
//   //     <div>
//   //       {/* {isLoggedIn ? <HomePage/> : <LoginPage/>}  */}
//   //       {/* ternary condition */}

//   //       {isLoggedIn && <HomePage/>}
//   //       {/* short carkit condition 1st er  ta sotto hole porertay jay noyle jabena */}
        
//   //     </div>
//   //   )
     
//   //   // if(this.state.isLoggedIn){
//   //   //   return <HomePage/>
//   //   // }

//   //   // else{
//   //   //   return <LoginPage/>
//   //   // }
//   // }

// }



// Conditional onk vhabe kora jay jemn (If else, ternary)


import React, { Component } from 'react'
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"

export default class Index_Page extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true 
    }
  }

  render() {

    // const {isLoggedIn} = this.state
    // let element = isLoggedIn ? <HomePage/>:<LoginPage/>
    // return (
    //   <div>
    //     {element}
    //   </div>
    // )
  

    // if(this.state.isLoggedIn){
    //   return <HomePage/>
    // }
    // else{
    //   return<LoginPage/>
    // }
const {isLoggedIn} = this.state
    return(
      <div>
      <p> this is {isLoggedIn && <HomePage/> && <LoginPage/>}</p>
        
      </div>
    )
  }
}
