import React, { useEffect, useState } from "react";
import sunnyWindyIcon from "../../assets/icons/sunny-windy.svg";
import weatherData from "../../assets/data/weatherData.json";

import { fetchWeatherData } from "../../services/weatherService";

const CurrentWeather = () => {

  return (
    <div className=" bg-[var(--light-blue)]  rounded-3xl">
      <ul className="flex p-[15px] justify-between rounded-tl-3xl rounded-tr-3xl bg-[var(--medium-blue)] text-base font-semibold text-active-card">
        <li>{weatherData.forecast.activeDay.day}</li>
        <li>{weatherData.forecast.activeDay.time}</li>
      </ul>
      <div className="p-[15px] rounded-bl-3xl rounded-br-3xl">
        <ul className="flex justify-between items-center pb-[15px]">
          <li className="font-semibold text-4xl">16°</li>
          <li>
            <img src={sunnyWindyIcon} alt="sunnyWindy" />
          </li>
        </ul>
        <div className="flex justify-between items-center text-[12px] ">
          <ul>
            <li className="leading-[151%]">
              Real Feel{" "}
              <span className="font-bold">
                {weatherData.forecast.activeDay.details.realFeel}°
              </span>
            </li>
            <li className="leading-[151%]">
              Wind{" "}
              <span className="font-bold">
                {weatherData.forecast.activeDay.details.windSpeed}
              </span>
            </li>
            <li className="leading-[151%]">
              Pressure{" "}
              <span className="font-bold">
                {weatherData.forecast.activeDay.details.pressure}
              </span>
            </li>
            <li className="leading-[151%]">
              Humidity{" "}
              <span className="font-bold">
                {weatherData.forecast.activeDay.details.humidity}
              </span>
            </li>
          </ul>

          <ul>
            <li className="leading-[151%]">
              Sunrise{" "}
              <span className="font-bold">
                {weatherData.forecast.activeDay.details.sunrise}
              </span>
            </li>
            <li className="leading-[151%]">
              Sunset{" "}
              <span className="font-bold">
                {weatherData.forecast.activeDay.details.sunset}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
