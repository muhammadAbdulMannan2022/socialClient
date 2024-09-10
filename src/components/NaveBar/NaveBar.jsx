import {
  FaCalendarPlus,
  FaFacebookMessenger,
  FaHome,
  FaPlayCircle,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function NaveBar() {
  return (
    <div className="z-10 md:order-1 md:bg-slate-950 md:h-screen md:sticky md:left-0 md:top-0 md:border-r md:shadow-sm md:border-t-0 md:w-[10%] lg:w-[25%] lg:px-7 bg-black border-t border-gray-500 sticky bottom-0 text-white w-full">
      <ul className="list-none flex w-full items-center justify-evenly py-4 md:flex-col md:items-center md:px-2 md:h-full md:justify-between lg:items-start">
        <li
          className="cursor-pointer max-w-[30px] md:max-w-[35px] hidden md:block lg:flex lg:gap-4 lg:items-center text-[#35B5FD] logoFont font-bold"
          title="Instashohor"
        >
          <img
            src="https://i.ibb.co.com/h7pN5fb/logo-removebg-preview.png"
            alt="instaShohor"
          />
          <p className="hidden lg:block text-2xl">Instashohor</p>
        </li>
        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Home"
        >
          <FaHome className="text-[24px] md:text-[30px]"></FaHome>
          <p className="hidden lg:block lg:font-bold text-xl">Home</p>
        </li>
        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Search"
        >
          <FaMagnifyingGlass className="text-[24px] md:text-[30px]"></FaMagnifyingGlass>
          <p className="hidden lg:block lg:font-bold text-xl">Search</p>
        </li>
        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Explore"
        >
          <FaPlayCircle className="text-[24px] md:text-[30px]"></FaPlayCircle>
          <p className="hidden lg:block lg:font-bold text-xl">Watch</p>
        </li>
        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Create"
        >
          <FaCalendarPlus className="text-[24px] md:text-[30px]"></FaCalendarPlus>
          <p className="hidden lg:block lg:font-bold text-xl">Create</p>
        </li>
        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Massage"
        >
          <FaFacebookMessenger className="text-[24px] md:text-[30px]"></FaFacebookMessenger>
          <p className="hidden lg:block lg:font-bold text-xl">Massage</p>
        </li>
        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:w-full lg:p-2 lg:rounded-sm lg:border-t"
          title="Profile"
        >
          <div className="max-w-[24px] md:max-w-[30px]">
            <img
              className="w-full"
              src="https://randomimg.almahmud.top/uploads/1725694636808-698707919-65.png"
              alt="avatar"
            />
          </div>
          <p className="hidden lg:block lg:font-bold text-xl">Profile</p>
        </li>
      </ul>
    </div>
  );
}
