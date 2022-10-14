import React from "react";

const Person = ({ index, person, deletePersons }) => {
  return (
    <div key={index}>
      {person.name} {person.number}
      <button onClick={deletePersons}>Delete</button>
    </div>
  );
};
export default Person;
