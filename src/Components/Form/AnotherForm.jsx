// import React, { useState } from 'react';

// const AnotherForm = () => {
 

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  

//     const nameChangeHandler = (e) =>{
//         setName(e.target.value)
//     };
//     const emailChangeHandler = (e) => {
//         setEmail(e.target.value)
//     }
//     const passwordChangeHandler = (e) => {
//         setPassword(e.target.value)
//     }

//     const formSubmitHandler = (e) =>{
//         console.log("changed");
//         let userInfo = {
//             name,
//             email,
//             password
//         }
//         console.log(userInfo)
//         e.preventDefault()
//     }


//   return (
//     <div id="main_div">
//       <form action="" id="form_id" onSubmit={formSubmitHandler}>
//         <h1>Registration Form</h1>
//         <div>
//             <lebel htmlFor="name">Name: </lebel>
//             <input type="text" name='name' value={name}  onChange={nameChangeHandler} required></input>
//         </div>

//         <div>
//             <lebel htmlFor="email">Email: </lebel>
//             <input type="email" name='email' value={email} onChange={emailChangeHandler} required></input>
//         </div>

//         <div>
//             <lebel htmlFor="password">Password: </lebel>
//             <input type="password" name="password" value={password} onChange={passwordChangeHandler}  required></input>
//         </div>

//         <button type="submit">Registration</button>
//       </form>
//     </div>
//   );
// }

// export default AnotherForm;
import React, { useState } from 'react';

const AnotherForm = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

   const nameChangeHandler = (d) => {
         setName(d.target.value)
    }

    const emailChangeHandler = (d) => {
        setEmail(d.target.value)
    }

    const passwordChangeHandler = (d) =>{
        setPassword(d.target.value)
    }

    const submitHandler = (d) => {
        console.log("Submit Done");
        let userInfo = {
            name,
            email,
            password
        }
        console.log(userInfo);
        d.preventDefault()
    }


  return (
    <div id="main_div">
      <form action="" id="form_id" onSubmit={submitHandler}>
         <div>
            <lebel htmlFor="name">Name: </lebel>
            <input type="text" name="name" value={name} onChange={nameChangeHandler}></input>
         </div>

         <div>
            <lebel htmlFor="email">Email: </lebel>
            <input type="email" name="email" value={email} onChange={emailChangeHandler}></input>
         </div>

         <div>
            <lebel htmlFor="password">Password: </lebel>
            <input type="password" name="password" value={password} onChange={passwordChangeHandler}></input>
         </div>

         <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AnotherForm;
