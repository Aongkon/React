import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {

    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        //call with first render and dependence on count 
        console.log("useEffect")
    },[count])

  return (
    <div>
     {console.log("rendering")}
       <h2>Count: {count}</h2>
       <button onClick={() => {setCount(count => count+1)}} disabled={count === 10 ? true : false}>+</button>
<br></br>
       <button onClick={() => {setIsLoading(!isLoading)}}>isLoading</button>
    </div>
  );
}

export default UseEffectEx;
//count => count + 1 mane count er ager man er sathe  + 1