import React from "react";

const DailyCard = ({ data }) => {
  const formatDay = (dt) => {
    if (!dt) return "";
    const date = new Date(1000 * dt);
    return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  };

  const iconCode = data?.weather?.[0].icon;
  const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : ""

  return (
    <div className="text-white col-span-2 text-center bg-[var(--bg-card)] rounded-3xl flex-shrink-0 min-w-[100px]">
      <div className="border-b border-[var(--dark-gray)] p-[13px]">
        <span className="text-base font-medium text-active-card">
          {formatDay(data?.dt)}
        </span>
      </div>
      <div className="flex justify-center py-[30px]">
        <img className="w-[50px] h-[50px]" src={iconUrl} alt='weather icon' />
      </div>
      <div className="text-[32px] font-medium pb-[18px]">
        <span>{Math.round(data.main.temp)}°</span>
      </div>
    </div>
  );
}

export default DailyCard;
