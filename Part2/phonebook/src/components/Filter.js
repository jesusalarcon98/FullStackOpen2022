const Filter = ({ personasFiltradas, setPersonasFiltradas }) => {
  return personasFiltradas.map((persons, index) => {
    return (
      <div key={index}>
        {persons.name} {persons.number}
        <button onClick={() => setPersonasFiltradas([persons.id])}>
          Delete
        </button>
      </div>
    );
  });
};

export default Filter;
