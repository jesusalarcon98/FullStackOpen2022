import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherInfo = ({ city }) => {
  const [weather, setWeather] = useState("");

  const key = process.env.REACT_APP_API_KEY;
  const queryApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  const hook = () => {
    axios.get(queryApi).then((response) => {
      setWeather(response.data);
    });
  };
  useEffect(hook, [queryApi]);
  if (weather !== "") {
    return (
      <div>
        <h3>Weather in {city}</h3>
        <p>Temperature: {weather.main.temp}°C </p>
        <img
          alt="weather icon"
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        ></img>
        <p>Wind: {weather.wind.speed}m/s </p>
      </div>
    );
  }
};
export default WeatherInfo;
