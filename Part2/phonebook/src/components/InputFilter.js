const InputFilter = ({
  setPersonasFiltradas,
  persons,
  personsFilter,
}) => {
  const InputFilter = (event) => {
    setPersonasFiltradas(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      filter shown with:{" "}
      <input value={personsFilter} onChange={InputFilter} />
    </div>
  );
};

export default InputFilter;
