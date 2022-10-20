const InputFilter = ({ handleSearchChange, personsFilter }) => {
  return (
    <form>
      filter shown with:
      <input value={personsFilter} onChange={handleSearchChange} />
    </form>
  );
};

export default InputFilter;
