import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

export default class HooksUseState extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleIncrement= () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div style={{ marginLeft: "200px", marginTop: "100px"}}>
      <h2>Count : {count}</h2>
        <Button style={{ marginTop: "100px" }} variant="primary" onClick={this.handleIncrement}>Increment</Button>
      </div>
    )
  }
}
