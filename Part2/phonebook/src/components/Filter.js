import Person from "./Person";

const Filter = ({ personasFiltradas, setPersonasFiltradas }) => {
  console.log(personasFiltradas);
  return personasFiltradas.map((persons, index) => {
    return (
      <div key={index}>
        {persons.name} {persons.number}
        <button onClick={() => setPersonasFiltradas([persons])}>Show</button>
      </div>
    );
  });
};

export default Filter;
