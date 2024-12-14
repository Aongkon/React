import React, { useState } from 'react'

const UserDataComponent = (props) => {

    const [user, setUser] = useState("");

    const todoChangeHandler = (e) =>{
        setUser(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        props.onTodoChange(user)
    }


  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="todo">New Todo: </label>
            <input type="text" id="todo" name="todo" value={user} onChange={todoChangeHandler}/>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default UserDataComponent
