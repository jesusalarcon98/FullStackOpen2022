import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form.js";
import InputFilter from "./components/InputFilter";
import PersonService from "./services/persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personsFilter, setPersonsFilter] = useState("");
  const [notification, setNotification] = useState(null);

  const hook = () => {
    PersonService.getAll().then((getPersons) => {
      setPersons(getPersons);
    });
  };
  useEffect(hook, []);

  const deletePerson = (name, id) => {
    return () => {
      if (window.confirm(`Delete ${name}? `)) {
        PersonService.DeletePerson(id)
          .then(() => {
            setPersons(persons.filter((n) => n.id !== id));
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setPersons(persons.filter((n) => n.name !== name));
          });
      }
    };
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
        setNotification(
          `The person '${personObject.name}' was added correctly`
        );
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const updatePerson = (id, number) => {
    const person = persons.find((n) => n.id === id);
    const changedPerson = { ...person, number: number };
    PersonService.UpdatePerson(id, changedPerson)
      .then((updatedPerson) => {
        setNotification(
          `The person '${changedPerson.name}' has changed his number to ${changedPerson.number}`
        );
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        setPersons(
          persons.map((n) => (n.name === newName ? updatedPerson : n))
        );
      })
      .catch((error) => {
        setNotification(
          `The person '${person.name}' was already removed from server`
        );
        setPersons(persons.filter((n) => n.id !== id));
      });
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setPersonsFilter(event.target.value);
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <Notification message={notification} />
      <InputFilter
        personsFilter={personsFilter}
        handleSearchChange={handleSearchChange}
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
        <Filter
          persons={persons}
          personsFilter={personsFilter}
          deletedPerson={deletePerson}
        />
      </ul>
    </div>
  );
}

export default App;
