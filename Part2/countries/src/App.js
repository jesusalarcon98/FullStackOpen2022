import React, { useState, useEffect } from "react";
import axios from "axios";

import Filters from "./components/Filters";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesFilter, setCountrieFilter] = useState("");
  const [countriesShow, setCountriesShow] = useState([]);

  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);

  const InputFilter = (event) => {
    setCountrieFilter(event.target.value);
    setCountriesShow(
      countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h2>Countries</h2>
      <div>
        Find countries <input value={countriesFilter} onChange={InputFilter} />
      </div>

      <ul>
        <Filters
          countriesShow={countriesShow}
          setCountriesShow={setCountriesShow}
        />
      </ul>
    </div>
  );
}

export default App;
