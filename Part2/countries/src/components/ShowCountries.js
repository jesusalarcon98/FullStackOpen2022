import React from "react";

const ShowCountries = ({ countriesShow, setCountriesShow }) => {
  return countriesShow.map((countrie, index) => {
    return (
      <div key={index}>
        {countrie.name.common}
        <button onClick={() => setCountriesShow([countrie])}>Show</button>
      </div>
    );
  });
};
export default ShowCountries;
