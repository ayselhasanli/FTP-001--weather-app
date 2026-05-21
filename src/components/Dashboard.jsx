import React from "react";
import Navbar from "./Navbar.jsx"
import DashboardHeader from "./DashboardHeader";
import DailyCard from "./Forecast/DailyCard";
import RainChart from "./Sidebar/RainChart";
import weatherData from "../assets/data/weatherData.json";
import CurrentWeather from "./Forecast/CurrentWeather";
import OtherCities from "./Sidebar/OtherCities";
import WindStatus from "./Overview/WindStatus";
import UVIndex from "./Overview/UVIndex";
import Humidity from "./Overview/Humidity";
import Visibility from "./Overview/Visibility";
import { useState } from "react";
import { useEffect } from "react";
import { fetchWeatherData } from "../services/weatherService";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [day, setDay] = useState("");
  const [city, setCity] = useState("Baku")

  useEffect(() => {
    if (!city) return

    fetchWeatherData(city)
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        setError("smth wrong");
      });
  }, [city]);

  return (
    <>
      <Navbar setCity={setCity} city={city}/>
      <DashboardHeader />
      <div className="grid grid-cols-12 p-4 bg-[var(--bg-main)] gap-4">
        <div className="col-span-3">
          {weather?.list && weather.list.length > 0 && (
            <CurrentWeather data={weather.list[0]} />
          )}
        </div>
        <div className="col-span-6">
          <div className="flex flex-row overflow-x-auto gap-4 w-full whitespace-nowrap scrollbar-hide">
            <style>
              {`div::-webkit-scrollbar{
                display: none}
                `}
            </style>
            {weather?.list
              ?.filter((item) => item.dt_txt.includes("12:00:00"))
              .map((data) => {
                return (
                  <>
                    <DailyCard data={data} />
                  </>
                );
              })}
          </div>
        </div>
        <div className="col-span-3">
          <RainChart />
        </div>
      </div>
      <grid className="grid-cols-12 grid bg-[var(--bg-main)] p-4">
        <div className="col-span-9">
          <span className="text-white">Today's overview</span>
          <div className="grid grid-cols-12 gap-4 pt-4">
            <div className="col-span-4">
              {weather?.list && weather.list.length > 0 && (
                <>
                  <WindStatus data={weather.list[0]} />
                  <Humidity data={weather.list[0]} />
                </>
              )}
            </div>
            <div className="col-span-4">
              {weather?.list && weather.list.length > 0 && (
                <>
                  <UVIndex data={weather.list[0]} />
                  <Visibility data={weather.list[0]} />
                </>
              )}
            </div>
            <div className="col-span-4"></div>
          </div>
        </div>
        <div className="col-span-3">
          <OtherCities />
        </div>
      </grid>
    </>
  );
};

export default Dashboard;
