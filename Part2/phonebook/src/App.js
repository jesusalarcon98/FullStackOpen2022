import React, { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState(""); //elmento entrada

  //console.log(array.some(data => data.lenguaje === 'javascript'));

  const addPersons = (e) => {
    e.preventDefault();
    if (persons.some((data) => data.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
    } else {
      const personObject = {
        name: newName,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit"> add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  );
};
export default App;
