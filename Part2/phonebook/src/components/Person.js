import React from "react";

const Person = ({ key, person }) => {
  return <li key={key}>{person.name}</li>;
};
export default Person;
