import React from 'react';
import './App.css';


const App = () => (<PersonList />)     //component which is an App to render the person list




const PersonList = () => {          //actual personal list
  return (
    <Person></Person>
  )

}

const Person = () => {               //person
  const url =
    "https://randomuser.me/api/portraits/thumb/men/22.jpg";

    return(
      <div className="person">
        <img src={url}alt="" />
        <div>
          <h4>name</h4>
          <h4>Job</h4>
          </div>
        </div>
    )

}

export default App;

