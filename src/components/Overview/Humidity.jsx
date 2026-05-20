import React from "react";
import HumidityImg from "../../assets/icons/humidity.svg"
import HumidityIcon from "../../assets/icons/humidity-icon.svg"

const Humidity = ({data}) => {
  return (
    <div className=" p-[14px] my-[20px] rounded-2xl bg-[var(--bg-card)] text-white">
      <span className="text-xs font-medium">Humidity</span>
      <div className="flex justify-center my-[45px]">
        <img src={HumidityImg} alt="" />
      </div>
      <div className="flex gap-[42px] items-center mt-[25px]">
        <div>
          <span className="text-xl font-semibold">
            {data.todayOverview.humidity.value}
          </span>
        </div>
        <div>
          <ul className="flex gap-[10px] items-center">
            <li>
              <img src={HumidityIcon} alt="" />
            </li>
            <li>
              <span className="text-xs text-[var(--light-gray)]">
                {data.todayOverview.humidity.description}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
