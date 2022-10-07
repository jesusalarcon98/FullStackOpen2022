import React from "react";

const Person = ({ index, person, deletePerson }) => {
  return (
    <div key={index}>
      {person.name} {person.number}{" "}
      <button onClick={deletePerson}>Delete</button>
    </div>
  );
};
export default Person;
