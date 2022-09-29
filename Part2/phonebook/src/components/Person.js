import React from "react";

const Person = ({ index, person }) => {
  return (
    <div key={index}>
      {person.name} {person.number}
    </div>
  );
};
export default Person;
