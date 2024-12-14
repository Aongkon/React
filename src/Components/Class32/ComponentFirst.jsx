import React, { useState } from 'react'
import Component2nd from './Component2nd'
import UserDataComponent from './UserDataComponent'


const todoData = ["todo1", "todo2", "todo3", "todo4"]

const ComponentFirst = () => {

    const [todo, setTodo] = useState(todoData);

    const handleTodoMethod = (justNewTodo) =>{
      setTodo([...todo, justNewTodo])
    }
    
  return (
    <div>
    <UserDataComponent onTodoChange={handleTodoMethod}/>
      <Component2nd todoData={todo}/>
    </div>
  )
}

export default ComponentFirst


//app.js --> ComponentFirst (here have some data) --> Component2nd --> Component3rd

//UserDataComponent //this is child of ComponentFirst

//