import React from "react";
import Countrie from "./Countrie";

const ShowCountries = ({ countries, countriesFilter }) => {
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
        </div>
      );
    });
};
export default ShowCountries;
