import "./App.css";
import React, { Fragment } from "react";
//import ComponentFirst from "./Components/Class32/ComponentFirst";
import UseEffectEx from "./Components/HookOrUseState/UseEffect/UseEffectEx";
import DataFetch from "./Components/HookOrUseState/UseEffect/DataFetch";

// import ChildToParent from "./Components/ChildToParent/ChildToParent";
// import CallBack from "./Components/ChildToParent/CallBack";
// import AnotherForm from "./Components/Form/AnotherForm";
// import NewForm from "./Components/Form/NewForm";
// import State from "./Components/StateOrsetStateForRCC/State";
// import HooksUseState from "./Components/HookOrUseState/HooksUseState";
// import HooksUseStateForRAFCE from "./Components/HookOrUseState/HooksUseStateForRAFCE";
// import StopPropagation from "./Components/HookOrUseState/StopPropagation";

// import EventBinding from "./Components/Event_Binding/EventBinding";
// import EventHandler from "./Components/Event_Handler_Class/eventHandler";
// import List from "./Components/UniqueList/List";
// import List2nd from "./Components/List2nd";
// import Bootstrap from "./Components/Bootstrap/Bootstrap";
// import Card from "./Components/Card";
// import Data from "./data.json"
// let text = "Dummy text for just practice"

//  import IndexPage from "../src/Components/ConditionalRendering/Index_Page"


// const text = "Here we are just trying to build our self";

function App() {

  // let items = [];

  // for(let x=0; x<Data.length; x++){  //for loop use kore
  //   items.push( <Card title={Data[x].title} desc={Data[x].desc}/>)
  // }

    //const items = Data.map((item) => <Card title ={item.title} desc={item.desc} />)
//maping korar somoy protibar ekta ekta kore data item er modde jabe ; protita item er modde amra jani  2 ta jinis thakbe "title" r "desc"

  // console.log(Data[2].desc)


  // const data= "I am from parent data"
  // const handleChildData = (storData) =>{
  //   console.log("App: " + storData)
  // }

  // const calBackDataFunction = (data) =>{
  //    console.log(data)
  // }

  return (
    <Fragment>
    {/* <h1 className="textH1">{text}</h1> */}
    {/* <div className="parentCard">


       {items}

       {Data.map((item, index) => <Card key={index} title={item.title} desc={item.desc}/>)}


       index number ta proyojonio karon index number golo uniq key er kaj kore jar jonno error ashe na; alada alada datar jonno uniq key proyojonio tai
    
      <Card
       title="hello everyone"
       desc="i am trying to some"/>
      <Card
        title={Data[1].title}
        desc={Data[1].desc}
      />
      <Card
        title="nice"
        desc="its like new think for me"
      />
       <Card
        title={Data[3].title}
        desc={Data[3].desc}
      />

    </div> */}
      
      {/* <List/> */}
      {/* <List2nd/>
      <Bootstrap/> */}
      {/* <EventHandler/> */}
      {/* <IndexPage/> */}
      {/* <EventBinding/> */}
      {/* <State/> */}
      {/* <HooksUseState/>
      <HooksUseStateForRAFCE/>
      <StopPropagation/> */}
      {/* <AnotherForm/> */}
      {/* <NewForm/> */}
      {/* <ChildToParent data={data} forDataChild={handleChildData}/>
      <CallBack title={text} jusCallBack={calBackDataFunction}/> */}

      {/* <ComponentFirst/> */}
      <UseEffectEx/>
      <DataFetch/>
    </Fragment>
  );
}

export default App;
