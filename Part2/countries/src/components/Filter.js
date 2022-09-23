import Countrie from "./Countrie";

const Filter = ({ countries, countriesFilter }) => {
  if (countriesFilter === "") {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (countriesFilter !== "") {
    return countries
      .filter((val) => {
        console.log(
          val.name.common.toLowerCase().includes(countriesFilter.toLowerCase())
            .length
        );
        if (
          val.name.common.toLowerCase().includes(countriesFilter.toLowerCase())
        ) {
          return val;
        }
      })
      .map((countrie, index) => {
        return <Countrie index={index} countrie={countrie} />;
      });
  }
};

export default Filter;
