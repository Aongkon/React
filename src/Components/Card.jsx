

const hello = "i am aongkon";
let age = 45;
let newAge = 55;
const sum = age + newAge;
let rat = "black Sky";
// const trySome =  console.table([age, newAge, rat, din])
const date = new Date();

const newDay = date.getDay();
const newMonth = date.getMonth();
const newYear = date.getFullYear();

const currentSecond = date.getSeconds();
const currentMinutes = date.getMinutes();
const currentHours = date.getHours();

const someCss = { fontSize: "20px", color: "blue" };

// const name = ["dog", "cat", "fish"];
// name[0];
// name[1];
// name[2];
// const [dog, cat, fish] = name ; //arry k destructuring korte gele 3rd bracket use korte hoy

// const dog = name[0]  //amra chaile uporer line take e emn o likhte partam
// const cat = name[1]
// const fish = name[2]


function Card(props){


    const {title, desc} = props; // ay dhoromer object er jonno 2nd bracket use korbo distracharing 
    // console.log(props)
    return(
    
      <div className="card">
        {/* <h3>{props.title}</h3>  //you will write like that
        <p>{props.desc}</p> */}  
        <h3>{title}</h3>
        <p>{desc}</p>
        <h3 style={someCss}>{hello + " " + rat}</h3>
        <h1>{sum}</h1>
        {/* <p>{new Date().getFullYear()}</p> */}
        <p>{newDay + "/" + newMonth + "/" + newYear}</p>
        <p>{currentHours + ":" + currentMinutes + ":" + currentSecond}</p>
      </div>
     
    );
  
  };

  export default Card