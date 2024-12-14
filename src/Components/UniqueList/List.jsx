// import React from 'react';
// import { v4 as uuidv4 } from 'uuid';


// const todos = [
//   {
//     id : uuidv4(),
//     title : "todo 1st",
//     desc : "todo description 1st"
//   },
//   {
//     id : uuidv4(),
//     title : "todo 2nd",
//     desc : "todo description 2nd"
//   },
//   {
//     id : uuidv4(),
//     title : "todo 3rd",
//     desc : "todo description 3rd"
//   },
// ]

// const useres = [
//   {
//     userName : "Jannat Mahmud Aongkon",
//     age : 20,
//     phone : [
//       {
//         forHome:"01837632",
//         forOffice : [
//           {
//             pion: "01673583937",
//             Boss : "957643937"
//           }
//         ]
//       }
//     ]
//   },

//   {
//     userName : "Sabrina Afroj Konkong",
//     age : 25,
//     phone : [
//       {
//         forHome:"085973643",
//         forOffice : [
//           {
//             pion : "08363693",
//             Boss : "04876568"
//           }
//         ]
//       }
//     ]
//   }
// ]

// const List = () => {

//   return (
//     <div>
//        {todos.map((todo) => {

//         const {id, title, desc} = todo 
//         return (
//           <div key={id}>
//              <h2>{title}</h2>
//              <h5>{desc}</h5>
//           </div>
//         )
//        })}


//        {useres.map((user, index) => {
//         {/* const {userName, age, phone} = user */}
//         return(
//           <div key={index}>
//             <h1>Name:{user.userName}</h1>
//             <h2>Age:{user.age}</h2>
//           {user.phone.map((newUser, index) => {
//             return(
//               <div key={index}>
//                 <h4>Home:{newUser.forHome}</h4>

//                 {newUser.forOffice.map((newValue, index) => {
//                   const {pion, Boss} = newValue;
//                   return(
//                     <div key={index}>
//                       <h2>Pion:{pion}</h2>
//                       <h2>Boss:{Boss}</h2>
//                     </div>
//                   )
//                 })}
//               </div>
//             )
//           })}
//           </div>
//         )
//        })}
//     </div>
//   );
// };

// export default List
