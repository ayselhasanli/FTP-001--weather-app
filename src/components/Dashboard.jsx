import React from "react";
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

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="grid grid-cols-12 p-4 bg-[var(--bg-main)] gap-4">
        <div className="col-span-3">
          <CurrentWeather />
        </div>
        <div className="col-span-6">
          <div className="grid grid-cols-12 gap-4">
            {weatherData.forecast.nextDays.map((data) => {
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
              <WindStatus data={weatherData} />
              <Humidity data={weatherData}/>
            </div>
            <div className="col-span-4">
              <UVIndex data={weatherData} />
              <Visibility data={weatherData}/>
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
