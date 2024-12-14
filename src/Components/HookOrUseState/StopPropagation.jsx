import Button from 'react-bootstrap/Button';
import React from 'react'

const StopPropagation = () => {

    const parentHandleHello = (event) =>{
        console.log('parent event: ', event);
    };

    const handleHello = (event) => {
        event.stopPropagation();
        console.log('child event: ', event);
    };

  return (
    <div className='parent' onClick={parentHandleHello}>
    <h1>Welcome everyone</h1>
      <Button onClick={handleHello}>hello</Button>
    </div>
  )
}

export default StopPropagation


//jokhon child handler k call kora hoy tokhon parent handlertaw call hoya jay eta hocche "event bubbling". ey event bubbling k amra "stop propagation" use korar maddome solve korte pari