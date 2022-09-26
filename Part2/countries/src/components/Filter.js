import Countrie from "./Countrie";
import DetailCountry from "./DetailCountry";

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

const Filter = ({ countries, countriesFilter }) => {
  let filters = countries.filter((val) => {
    if (val.name.common.toLowerCase().includes(countriesFilter.toLowerCase())) {
      return val;
    } else {
      return false;
    }
  }).length;

  if (filters > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (filters <= 10 && filters > 1) {
    return countries
      .filter((val) => {
        if (
          val.name.common.toLowerCase().includes(countriesFilter.toLowerCase())
        ) {
          return val;
        } else return false;
      })
      .map((countrie, index) => {
        return (
          <div key={index}>
            <Countrie countrie={countrie} />
            {Form()}
          </div>
        );
      });
  } else {
    return countries
      .filter((val) => {
        if (
          val.name.common.toLowerCase().includes(countriesFilter.toLowerCase())
        ) {
          return val;
        } else return false;
      })
      .map((countrie, index) => {
        return (
          <div key={index}>
            <DetailCountry countrie={countrie} />
          </div>
        );
      });
  }
};

export default Filter;
