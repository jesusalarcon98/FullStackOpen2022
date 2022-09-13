import React from "react";

const Person = ({ key, person }) => {
  return (
    <div>
      <div key={key}>
        {person.name} {person.number}
      </div>
    </div>
  );
};
export default Person;
