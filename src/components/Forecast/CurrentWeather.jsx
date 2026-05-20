import React, { useEffect, useState } from "react";
import sunnyWindyIcon from "../../assets/icons/sunny-windy.svg";
import weatherData from "../../assets/data/weatherData.json";

import { fetchWeatherData } from "../../services/weatherService";

const CurrentWeather = ({ data }) => {
  const getDayName = (timestamp, locale = "en-US") => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    <div className=" bg-[var(--light-blue)]  rounded-3xl">
      <ul className="flex p-[15px] justify-between rounded-tl-3xl rounded-tr-3xl bg-[var(--medium-blue)] text-base font-semibold text-active-card">
        <li>{getDayName(data?.dt)}</li>
        <li>{formatDate(data?.dt)}</li>
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
                {data.main.feels_like}°
              </span>
            </li>
            <li className="leading-[151%]">
              Wind{" "}
              <span className="font-bold">
                {data.wind.speed} km/h
              </span>
            </li>
            <li className="leading-[151%]">
              Pressure{" "}
              <span className="font-bold">
                {data.main.pressure} MB
              </span>
            </li>
            <li className="leading-[151%]">
              Humidity{" "}
              <span className="font-bold">
                {data.main.humidity} %
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
