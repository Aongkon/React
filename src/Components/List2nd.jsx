// import { Component } from "react";

//this is the class component , complex kajer jonno eyta use kora hoy. class component a props automatic ashe pore .
//jokhon ami class component e props use korbo tokhon "this.props like use korte hobe"

// class anotherList extends Component{
//     render(){
//         return(
//             <div>   
//                 {this.props.title}
//             </div>
//         )
//     }
// }

// export default anotherList






const someData = [
    {
        title : "title 1st",
        desc : "description 1st",
        listNumber : 3004,
        contact : [
            {
                phone : "097637390",
                telPhone : "00887765"
            }
        ]
    },

    {
        title : "title 2nd",
        desc : "description 2nd",
        listNumber : 6754,
        contact : [
            {
                phone : "097637390",
                telPhone : "00887765"
            }
        ]
    },

    {
        title : "title 3rd",
        desc : "description 3rd",
        listNumber : 5577,
        contact : [
            {
                phone : "097637390",
                telPhone : "00887765"
            }
        ]
    },

    {
        title : "title 4th",
        desc : "description 4th",
        listNumber : 4400,
        contact : [
            {
                phone : "9807643",
                telPhone : "678435"
            }
        ]
    }
]



const List2nd = () => {



  return (
    <div className="someStyle">
      {someData.map((data) => {
        const {title, desc, listNumber, contact} = data
        return(
            <div className="">
                <h2>{title}</h2>
                <p>{desc}</p>
                <h5>{listNumber}</h5>
                {contact.map((contacts) => {
                    return(
                        <>
                        <h2>{contacts.phone}</h2>
                        <h2>{contacts.telPhone}</h2>
                        </>
                    )
                })}
            </div>
        )
      })} 
    </div>
  );
}

export default List2nd;
