import gridIcon from "../assets/icons/grid.svg";
import bellIcon from "../assets/icons/bell.svg";
import locationIcon from "../assets/icons/location.svg";
import searchIcon from "../assets/icons/search.svg";
import moonIcon from "../assets/icons/moon.svg";
import userPic from "../assets/icons/profile.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full bg-[var(--bg-main)] text-white p-4">
      <div className="flex items-center gap-4">
        <div className="bg-[var(--bg-card)] flex items-center justify-center p-3 rounded-full cursor-pointer hover:bg-gray-800 w-[50px ]h-[50px]">
          <img src={gridIcon} alt="menu" />
        </div>

        <div className="bg-[var(--bg-card)] flex items-center justify-center p-3 rounded-full cursor-pointer hover:bg-gray-800 w-[50px] h-[50px]">
          <img src={bellIcon} alt="notification" />
        </div>

        <div className="flex items-center gap-2 text-gray-300 text-sm">
          <img src={locationIcon} alt="location" />
          <span className="font-medium">Dhaka, Bangladesh</span>
        </div>
      </div>

      <div className="w-[492px] h-[46px] relative">
        <img
          className="absolute left-4 top-1/2 -translate-y-1/2"
          src={searchIcon}
          alt="search"
        />
        <input
          type="text"
          placeholder="Search City"
          className="w-full h-full bg-[var(--bg-card)] text-sm text-gray-200 pl-11 pr-4 rounded-xl focus:outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-[var(--bg-card)] w-[115px] h-[46px] rounded-full p-1 flex items-center justify-end cursor-pointer border border-gray-700">
          <div className="bg-[var(--text-gray-light)] w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <img src={moonIcon} alt="moon" />
          </div>
        </div>

        <div className="w-[9] h-[9] rounded-full bg-blue-400 overflow-hidden border border-gray-600">
          <img
            src={userPic}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
