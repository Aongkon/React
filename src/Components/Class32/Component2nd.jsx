import React from 'react'
import Component3rd from './Component3rd'

const Component2nd = (props) => {
    // console.log(props.todoData)
    // const {todoData} = props
    // const item = [];
   

  return (
    <div>
       {props.todoData.map((todo,index) => <Component3rd key={index} value={todo}/>)}
    </div>
  )
}

export default Component2nd
