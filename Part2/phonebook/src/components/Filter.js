import React from "react";
import Person from "./Person";
const Filter = ({ persons, personsFilter, deletedPerson }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toUpperCase().includes(personsFilter.toUpperCase())
        )
        .map((person) => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            deletePerson={deletedPerson(person.name, person.id)}
          />
        ))}
    </div>
  );
};

export default Filter;
