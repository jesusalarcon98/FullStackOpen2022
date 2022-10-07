import axios from "axios";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form.js";
import InputFilter from "./components/InputFilter";
import Person from "./components/Person";
import PersonService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personsFilter, setPersonsFilter] = useState("");

  const hook = () => {
    PersonService.getAll().then((getPersons) => {
      setPersons(getPersons);
    });
  };
  useEffect(hook, []);

  const deletePerson = (e) => {
    e.preventDefault();
    PersonService.DeletePerson(persons.id).then((deletePersons) => {
      console.log("persons", persons.id);
      setPersons(deletePersons);
    });
    console.log("hola mundo");
  };

  const addPersons = (e) => {
    e.preventDefault();
    if (persons.some((data) => data.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      PersonService.AddPerson(personObject).then((addPersons) => {
        setPersons(persons.concat(addPersons));
        setNewName("");
        setNewNumber("");
      });
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
        <Filter
          persons={persons}
          personsFilter={personsFilter}
          deletePerson={deletePerson}
        />
      </ul>
    </div>
  );
}

export default App;
