import React from "react";

const Weather = ({ weatherApi }) => {
  const { coord, weather, main, wind, name } = weatherApi;

  if (name != null) {
    return (
      <div>
        Weather goes here
        <div>
          coordinates: {coord.lon} {coord.lat}
        </div>
        <div>
          weather: {weather[0].main}, desc: {weather[0].description}
        </div>
        <div>
          temp: {main.temp}, feels liks: {main.feels_like}
        </div>
        <div>humidity: {main.humidity}</div>
        <div>wind: {wind.speed}</div>
        <div>location: {name}</div>
      </div>
    );
  } else {
    return <div>waiting...</div>;
  }
};

export default Weather;
