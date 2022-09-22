const InputFilter = ({ setCountrieFilter }) => {
  return (
    <div>
      filter shown with:{" "}
      <input
        onChange={(event) => {
          setCountrieFilter(event.target.value);
        }}
      />
    </div>
  );
};

export default InputFilter;
