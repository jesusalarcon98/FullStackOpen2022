import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import InputFilter from "./components/InputFilter";

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

  return (
    <div>
      <h2>Countries</h2>
      <InputFilter setCountrieFilter={setCountrieFilter} />
      <ul>
         <Filter
          countries={countries}
          countriesFilter={countriesFilter}

        />
      </ul>
    </div>
  );
}

export default App;
