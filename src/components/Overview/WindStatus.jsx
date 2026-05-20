import React from 'react'
import WindChart from '../charts/WindChart';

const WindStatus = ({data}) => {
  return (
    <div className=" p-[14px] rounded-2xl bg-[var(--bg-card)] text-white">
      <span className="text-xs font-medium"> Wind Status</span>
      <WindChart/>
      <ul className='flex justify-between py-4'>
        <li>
          <span className="text-base font-semibold text-white">
            {data.todayOverview.windStatus.value}
          </span>
        </li>
        <li className='text-right'>
          <span className="text-white">
            {data.todayOverview.windStatus.time}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default WindStatus
