import React from 'react'

const DashboardHeader = () => {
  return (
    <div className="grid grid-cols-12 gap-6 bg-[var(--bg-main)] ">
      <div className="col-span-9">
        <div className="p-4  flex justify-between font-medium">
          <ul className="flex gap-2 text-white ">
            <li className="text-[var(--light-gray)]">Today</li>
            <li className="text-[var(--light-gray)]">Tomorrow</li>
            <li>Next 7 Days</li>
          </ul>
          <div className="rounded-full bg-[#1E1E1E] text-[11px] font-medium">
            <button className=" py-[10px] px-[15px] rounded-full bg-[#BBD7EC]">
              Forecast
            </button>
            <button className=" py-[10px] px-[15px] text-white">
              Air Quality
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-3 text-white font-medium text-xl p-4">
        Chance of Rain
      </div>
    </div>
  );
}

export default DashboardHeader
