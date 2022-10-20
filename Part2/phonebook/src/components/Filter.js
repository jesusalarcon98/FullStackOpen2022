const Filter = ({ person, deletedPerson }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={deletedPerson}>Delete</button>
    </div>
  );
};

export default Filter;
