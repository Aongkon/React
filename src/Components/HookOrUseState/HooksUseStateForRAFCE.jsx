import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const HooksUseStateForRAFCE = () => {

    const [count, setValue] = useState(1);
    const  evenHandler = () =>{
      // setValue (name + 1)
        setValue((prevCount) => prevCount + 1 )
        setValue((prevCount) => prevCount + 1 )
    }

    const [name , nameString] = useState("");
    const stringHandler = () =>{
        nameString("Aongkon")
    }
    const stringHandler2nd = () =>{
        nameString("Kongkon")
    }


  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Name:{name}</h1>
      <Button onClick={evenHandler} disabled = {count===20 ? true:false}>Increment</Button>
      <Button onClick={stringHandler} disabled = {name==="Aongkon" ? true:false} >Aongkon</Button>
      <Button onClick={stringHandler2nd} disabled = {name==="Kongkon" ? true:false} >Kongkon</Button>
    </div>
  );
}

export default HooksUseStateForRAFCE;


//'rcc' er maddhome "rconst" use kore eta korte gele onk time r code beshi likte hoy tai ey poddhotite function component 'rafce' er "useState" use korte hoy 


//event.stopPropagation 