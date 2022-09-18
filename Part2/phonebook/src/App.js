import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form.js";
import InputFilter from "./components/InputFilter";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personsFilter, setPersonsFilter] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(hook, []);

  const addPersons = (e) => {
    e.preventDefault();
    if (persons.some((data) => data.name === newName)) {
      alert(` is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <h2>PhoneBook</h2>
      <InputFilter setPersonsFilter={setPersonsFilter} />

      <Form
        name={newName}
        numbers={newNumber}
        number={handleNumberChange}
        person={handlePersonChange}
        addPersons={addPersons}
      />
      <h2>Numbers</h2>
      <ul>
        <Filter persons={persons} personsFilter={personsFilter} />
      </ul>
    </div>
  );
}

export default App;
