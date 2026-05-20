import React from "react";
import VisibilityImg from "../../assets/icons/visibility.svg"
import EyeIcon from "../../assets/icons/eye-icon.svg"

const Visibility = ({data}) => {
  return (
    <div className=" p-[14px] my-[20px] rounded-2xl bg-[var(--bg-card)] text-white">
      <span className="text-xs font-medium">Visibility</span>
      <div className="flex justify-center my-[45px]">
        <img src={VisibilityImg} alt="" />
      </div>
      <div className="grid grid-cols-12 items-center mt-[25px]">
        <div className="col-span-6">
          <span className="text-xl font-semibold">
            {data.todayOverview.visibility.value}
          </span>
        </div>
        <div className="col-span-6">
          <ul className="flex gap-[10px] items-center">
            <li>
              <img src={EyeIcon} alt="" />
            </li>
            <li>
              <span className="text-xs text-[var(--light-gray)]">
                {data.todayOverview.visibility.description}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
