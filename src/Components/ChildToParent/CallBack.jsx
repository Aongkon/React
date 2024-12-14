import React from 'react';

const CallBack = (props) => {


    props.jusCallBack({title: "Here i am trying to back my data"});

  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default CallBack;

//child theke parent a data nia aste gele parent a ekti method baniye take props er maddhome niye aste hoy
