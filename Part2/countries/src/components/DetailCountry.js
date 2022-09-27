import React from "react";

const DetailCountry = ({ countriesShow }) => {
  return (
    <div>
      <h1>{countriesShow.name.common}</h1>
      <div>
        <p>
          Capital: {countriesShow.capital} <br></br>
          Population: {countriesShow.population}
        </p>
      </div>
      <h3>Languages</h3>
      <div>
        {Object.keys(countriesShow.languages).map((key) => {
          return (
            <ul key={key}>
              <li> {countriesShow.languages[key]}</li>
            </ul>
          );
        })}
      </div>
      <div>
        <img alt="" src={countriesShow.flags.png}></img>;
      </div>
    </div>
  );
};
export default DetailCountry;
