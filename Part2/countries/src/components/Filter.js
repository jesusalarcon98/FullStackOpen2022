import Countrie from "./Countrie";

const Filter = ({ countries, countriesFilter }) => {
  return countries
    .filter((val) => {
      if (countriesFilter === "") {
        return val;
      } else if (
        val.name.common.toLowerCase().includes(countriesFilter.toLowerCase())
      ) {
        return val;
      }
    })
    .map((countrie, index) => {
      return <Countrie index={index} countrie={countrie} />;
    });
};

export default Filter;
