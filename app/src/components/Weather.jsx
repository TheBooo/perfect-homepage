import React from "react";
import { MdLocationOn } from "react-icons/md";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { AiOutlineReload } from "react-icons/ai";

const Weather = ({ weatherApi }) => {
  const { weather, main, wind, name } = weatherApi;
  if (name != null) {
    return (
      <div className="weather-container">
        <div className="weather-icon-container">
          <img
            src={"http://openweathermap.org/img/wn/" + weather[0].icon + ".png"}
            alt=""
            className="weather-icon"
          />
        </div>
        <div className="weather-temp">
          {main.temp} °C{" "}
          <div className="temp-feels">Feels like: {main.feels_like} °C</div>
        </div>
        <div className="weather-additional">
          <span className="weather-additional-span">
            <WiStrongWind />
            {wind.speed} m/s
          </span>{" "}
          <span className="weather-additional-span">
            <WiHumidity />
            {main.humidity}%
          </span>
        </div>

        <div className="weather-location">
          <MdLocationOn /> {name}
        </div>
      </div>
    );
  } else {
    return (
      <div className="weather-container">
        <AiOutlineReload className="loading-icon" />
      </div>
    );
  }
};

export default Weather;
