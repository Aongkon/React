import { click } from '@testing-library/user-event/dist/click'
import React, { Component } from 'react'

class State extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         count : 0 ,
         name : ""
      }
    }

    handleIncrement = () => {
        // console.log("clicked")
        this.setState({
            count : this.state.count + 1
        })
    }
    
   handleDecrement = ()  => {
    this.setState({
      count : this.state.count - 1
    })
   }

   nameHandler = () =>{
    // console.log("clicked")
    this.setState({
      myName : this.state.name + "Aongkon"
    })
   }

   anotherNameHandler = () =>{
    this.setState({
      myName : this.state.name + "Kongkon"
    })
   }

   mahmudNameHandler = () =>{
    this.setState({
       myName : this.state.name + "Mahmud"
    })
   }
    
    // state jokhon bebohar korbo tokhon constructor=>(rconst) likhte hobe tar modde "this.state" nite hobe and tar vhitor jotogolo variable proyojon totogolo variable nia kaj kora jabe. tar por buttoner function toyri korte hobe

  render() {
    const {myName} = this.state
    return (
      <div>
      <h3>Clint Name: {myName}</h3>
       <h1>Count : {this.state.count}</h1>

       <div style={{ display:"flex"  }}>
       <button className="plus_button" onClick={this.handleIncrement} disabled = {this.state.count===10 ? true:false}> + </button> 
       <button className="plus_button" onClick={this.handleDecrement} disabled={this.state.count===0 ? true:false}> - </button>

       <button className="plus_button" onClick={this.nameHandler} disabled={this.state.num==="Aongkon" ? true:false}>Aongkon</button>
       <button className="plus_button" onClick={this.anotherNameHandler} disabled={this.state.num==="Kongkon" ? true:false }>Kongkon</button>
       <button className="plus_button" onClick={this.mahmudNameHandler} disabled={this.state.num==="Mahmud" ? true:false }>Mahmud</button>
       </div>
      </div>
    )
  }
}

export default State;