import React from "react";
import DetailCountry from "./DetailCountry";
import ShowCountries from "./ShowCountries";

const Filters = ({ countries, countriesFilter, filters }) => {
  if (filters > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (filters <= 10 && filters > 1) {
    return (
      <div>
        <ShowCountries
          countries={countries}
          countriesFilter={countriesFilter}
        />
      </div>
    );
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

export default Filters;
