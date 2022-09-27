import Filters from "./Filters";

const Filter = ({ countries, countriesFilter }) => {
  let filters = countries.filter((val) => {
    if (val.name.common.toLowerCase().includes(countriesFilter.toLowerCase())) {
      return val;
    } else {
      return false;
    }
  }).length;
  return (
    <div>
      <Filters
        filters={filters}
        countries={countries}
        countriesFilter={countriesFilter}
      />
    </div>
  );
};

export default Filter;
