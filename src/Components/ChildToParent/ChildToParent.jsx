import React from 'react';

const ChildToParent = (props) => {

    const dataChild = "I am from child component";
    props.forDataChild(dataChild);

  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
}

export default ChildToParent;
