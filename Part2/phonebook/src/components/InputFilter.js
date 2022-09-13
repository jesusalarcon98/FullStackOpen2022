const InputFilter = ({ setPersonsFilter }) => {
  return (
    <div>
      filter shown with:{" "}
      <input
        onChange={(event) => {
          setPersonsFilter(event.target.value);
        }}
      />
    </div>
  );
};

export default InputFilter;
