// import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';

// const NewForm = () => {


//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const textChangeHandler = (e) =>{
//     setName(e.target.value)
//   };

//   const emailChangeHandler = (e) =>{
//     setEmail(e.target.value)
//   };

//   const passwordChangeHandler = (e) =>{
//     setPassword(e.target.value)
//   };

//   const formSubmitHandler = (e) =>{
//     console.log("form submit");
//     let userInfo = {
//       // name: name,
//       // email: email,
//       // password: password
//       name,
//       email,
//       password
//     }
//     console.log(userInfo)
//     // console.log(name, email, password);
//     e.preventDefault();
//   }


//   return (
//     <div id="main_div">
//     <h1>This is a Form</h1>
//       <form id="form_id" action="" onSubmit={formSubmitHandler}>
//       <div>
      
//           <lebel htmlFor="name">Name: </lebel>
//           <input type="text" name="name" id="name" value={name} required onChange={textChangeHandler}></input>
//       </div>
//       <div>
//           <lebel htmlFor="email">Email: </lebel>
//           <input type="email" name="email" id="email" value={email} required onChange={emailChangeHandler}></input>
//       </div>
//       <div>
//           <lebel htmlFor="password">Password: </lebel>
//           <input type="password" name="password" id="password" value={password} required onChange={passwordChangeHandler}></input>
//       </div>
//       <Button type="submit">Register</Button>
//       </form>
//     </div>
//   );
// }

// export default NewForm;

import React, { useState } from 'react'

const NewForm = () => {


  const [user, setUser] = useState({name: '', email: '', pass: ''})
  const {name, email, pass} = user;

  // const nameChangeHandler = (e) =>{
  //   setUser({name: e.target.value, email, pass})
  // };

  // const emailChangeHandler = (e) =>{
  //   setUser({name, email: e.target.value, pass})
  // };

  // const passwordChangeHandler = (e) =>{
  //   setUser({name, email, pass: e.target.value})
  // };

  const newChangeHandler = (e) =>{
    // const filedName = e.target.name ;
    setUser({...user, [e.target.name]:e.target.value})

    // if (filedName === "name"){
    //   setUser({name: e.target.value, email, pass})
    // }
    // if (filedName === "email"){
    //   setUser({name, email: e.target.value, pass})
    // }
    // if (filedName === "pass"){
    //   setUser({name, email, pass: e.target.value})
    // }
      
  }

const formSubmitHandler = (e) =>{
  console.log("submitted");
  console.log(user);
  e.preventDefault();
};

  return (
    <div>
      <form action="" onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={newChangeHandler}></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={newChangeHandler}></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="pass" value={pass} onChange={newChangeHandler}></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewForm;
