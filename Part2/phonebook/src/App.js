import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form.js";
import InputFilter from "./components/InputFilter";
import PersonService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personsFilter, setPersonsFilter] = useState(""); //countriesFilter setCountriesFilter
  const [personasFiltradas, setPersonasFiltradas] = useState([]); //CountriesShow, SetCountriesShow

  const hook = () => {
    PersonService.getAll().then((getPersons) => {
      setPersons(getPersons);
      setPersonasFiltradas(getPersons);
    });
  };
  useEffect(hook, []);

  const deletePerson = (id) => {
    /* 
    const personas = Object.values(persons);
    const person = personas.find((n) => n.id === id); */
    PersonService.DeletePerson(id)
      .then((deletePersons) => {
        setPersons(deletePersons);
      })
      .catch((error) => {
        alert(`The person was already deleted from the server`);
        setPersons(personasFiltradas);
      });
  };

  const addPersons = (e) => {
    e.preventDefault();
    if (persons.some((data) => data.name === newName)) {
      const personID = persons.find((n) => n.name === newName);
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number?`
        )
      ) {
        updatePerson(personID.id, newNumber);
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      PersonService.AddPerson(personObject).then((addPersons) => {
        setPersons(persons.concat(addPersons));
        setPersonasFiltradas(persons.concat(addPersons));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const updatePerson = (id, number) => {
    console.log(id, number);
    const person = persons.find((n) => n.id === id);
    const changedPerson = { ...person, number: number };
    PersonService.UpdatePerson(id, changedPerson).then((updatedPerson) => {
      setPersons(updatedPerson);
    });
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
      <InputFilter
        setPersonasFiltradas={setPersonasFiltradas}
        persons={persons}
        personsFilter={personsFilter}
        setPersonsFilter={setPersonsFilter}
      />

      <Form
        name={newName}
        numbers={newNumber}
        number={handleNumberChange}
        person={handlePersonChange}
        addPersons={addPersons}
      />
      <h2>Numbers</h2>
      <ul>
        {personasFiltradas.map((people) => (
          <Filter
            key={people.id}
            person={people}
            deletedPerson={() => deletePerson(people.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
