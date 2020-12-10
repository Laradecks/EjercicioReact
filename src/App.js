import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"; 

function App() {
  const [term, setTerm] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/ajd01/demo/memebers")
    .then((response) => {
        return response.json();
    })
    .then((newPeople) => {
      console.log(newPeople);
      setPeople(newPeople);
    })
    .catch(() => {});
  }, [])

  const handleChange = (evt) => {
    setTerm(evt.target.value.toLowerCase());
  }

  return (
    <div className="list">
      <h1>Members filter</h1>
      <input className="input" value={term} onChange={handleChange} />
      {people.filter(person => {
        return person.name.toLowerCase().indexOf(term) > -1;
      }).map(person => {
        return <Person key={person.id} name={person.name} />
      })}
    </div>
  );
}

function Person({name}){
  return <div className="person">
    {name}
  </div>;
}

export default App;
