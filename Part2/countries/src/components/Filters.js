import React from "react";
import DetailCountry from "./DetailCountry";
import ShowCountries from "./ShowCountries";

const Filters = ({ countriesShow, setCountriesShow }) => {
  if (countriesShow.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (countriesShow.length <= 10 && countriesShow.length > 1) {
    return (
      <div>
        <ShowCountries
          countriesShow={countriesShow}
          setCountriesShow={setCountriesShow}
        />
      </div>
    );
  } else if (countriesShow.length === 1) {
    return <DetailCountry countriesShow={countriesShow[0]} />;
  }
};

export default Filters;
