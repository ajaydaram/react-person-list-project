import React from 'react';
import './App.css';


const App = () => (<PersonList />)     //component which is an App to render the person list




const PersonList = () => {          //actual personal list
  const people = [
    {
      img:22,
      name:"Mark",
      job:"developer"
    },
    {
      img:33,
      name:"Peter",
      job:"Actor"
    },
    {
      img:52,
      name:"John",
      job:"Painter"
    }
  ];
  return (
  <section>
    <Person person={people[0]}/>
    <Person person={people[1]}>Lorem Ipsum dolor sit amet.Suspendisse faucibus augue sapien tincidunt eros lobortis non. Phasellus porta pulvinar mauris id maximus.</Person>
    <Person person={people[2]}/>
  </section>
  )
}

const Person = (props) => {   
  const{img,name,job} = props.person;
  const {children} = props;           
  const url =
    `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

    return(
      <div className="person">
        <img src={url}alt="" />
        <div>
    <h4>{name}</h4>
          <h4>{job}</h4>
          {children}
          </div>
        </div>
    )

}

export default App;

