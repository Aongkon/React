import React, { useEffect, useState } from 'react';

const loadingMassage = <p>Data is loading </p>


const DataFetch = () => {

  const [todos, setTodos] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {

        if(!res.ok){//res jdi okk na hoy then show that error
          throw Error("fetching is not successful")
         
        }else{
          return res.json()
        }
        
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null)//jdi ekhane sob thik thake error na thake tbe setError hbe null
      })

      .catch((error) => {
        setError(error.message) //jdi kono error ase tbe seta set error er maddhome set hobe

        setIsLoading(false)//ekhane jdi error thake tbe loading er kono prosnoy nai


      })//error handling korar jonno eta use korte hoy. tachara amra cacchi error gola ekta sate a store korbo tai amader error handle er jonno useState use korte hobe
    }, 3000)
    //data aste somoy lagte pare, ar ami eccha kore ekhane time nisi 3 second
  }, []) // data golo onkbar call hoy tai useEffect er dependency hisebe blank arry[] dia dite hoy jata data ekbar call hoy


  const someData =  todos &&
    todos.map((todo) => {
      return(
        <div>
        <p key={todo.id}>{todo.title}</p>
      </div>
      )
      
    })
  

  return (
    <div>
    {error && <p>{error}</p>}
    {/* jdi error thake tbe ey sms show hobe */}

    {isLoading && loadingMassage} 
    {/* jdi isLoading true hoy tahole loadingMassage dekhabe */}


    {someData}
    </div>
  );
}

export default DataFetch;

//data jokhon pabo tokhon setake kono ekta state a rakhbo

//api call korte hole useEffect lagbe ,, useEffect  e amra anonimass function bebohar korbo

//1st a useEffect bebohar korbo tarpor "fetch" er vhitor data er url bosabo. tar por fetch "then" use kore tar vhitor data goloke response korabe . tar pro response data golo json e convert korte hobe . tar por res.json er data golo arekta ".then"  use kore setTodos er moddhe dia dite hobe 
//jokhon amra then use korbo tokhon amra anonimas function use korbo

//ex =>
//    useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       setTodos(data)
//     })
//   })


