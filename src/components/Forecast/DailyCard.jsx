import React from 'react'

const DailyCard = ({data}) => {
  return (
    <div className="text-white col-span-2 text-center bg-[var(--bg-card)] rounded-3xl">
      <div className="border-b border-[var(--dark-gray)] p-[13px]">
        <span className="text-base font-medium text-active-card">{data.day}</span>
      </div>
      <div className="flex justify-center py-[30px]">
        <img src={data.icon} alt={data.icon} />
      </div>
      <div className="text-[32px] font-medium pb-[18px]">
        <span>{data.temperature}°</span>
      </div>
    </div>
  );
}

export default DailyCard
