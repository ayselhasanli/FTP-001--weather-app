import React from "react";
import weatherData from "../../assets/data/weatherData.json";

const OtherCities = () => {
  return (
    <>
      <ul className="flex justify-between items-center text-white">
        <li>Other Cities</li>
        <li className="text-sm">See All</li>
      </ul>
      {weatherData.otherCities.map((city) => {
        return (
          <div className="rounded-2xl bg-[var(--bg-card)] p-[15px] mt-[25px]">
            <span className="text-[var(--gray)] text-sm">{city.country}</span>
            <ul className="flex  items-center justify-between">
              <li className="text-xl text-white">{city.name}</li>
              <li>
                <img src={city.icon} alt="" />
              </li>
            </ul>
            <span className="text-white text-sm">{city.condition}</span>
          </div>
        );
      })}
    </>
  );
};

export default OtherCities;
