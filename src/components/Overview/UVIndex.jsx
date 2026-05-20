import React from "react";
import UVChart from "../charts/UVChart";

const UVIndex = ({ data }) => {
  return (
    <div className=" p-[14px] rounded-2xl bg-[var(--bg-card)] text-white">
      <span className="text-xs font-medium">UV Index</span>
      <UVChart />
      <div className="text-center pb-[30px]">
        <span className="text-white font-semibold text-xl">
          {data.todayOverview.uvIndex.value}
        </span>
      </div>
    </div>
  );
};

export default UVIndex;
