const InputFilter = ({
  setPersonasFiltradas,
  persons,
  personsFilter,
  setPersonsFilter,
}) => {
  const InputFilter = (event) => {
    setPersonsFilter(event.target.value);
    setPersonasFiltradas(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      filter shown with: <input value={personsFilter} onChange={InputFilter} />
    </div>
  );
};

export default InputFilter;
