import {
  FaCalendarPlus,
  FaFacebookMessenger,
  FaHome,
  FaPlayCircle,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function NaveBar() {
  return (
    <div className="z-10 md:order-1 md:bg-slate-950 md:h-screen md:sticky md:left-0 md:top-0 md:border-r md:shadow-sm md:border-t-0 md:w-[10%] lg:w-[25%] bg-black border-t border-gray-500 sticky bottom-0 text-white w-full">
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
        <li className="cursor-pointer hover:text-pink-600" title="Home">
          <FaHome className="text-[24px] md:text-[30px]"></FaHome>
        </li>
        <li className="cursor-pointer hover:text-pink-600" title="Search">
          <FaMagnifyingGlass className="text-[24px] md:text-[30px]"></FaMagnifyingGlass>
        </li>
        <li className="cursor-pointer hover:text-pink-600" title="Explore">
          <FaPlayCircle className="text-[24px] md:text-[30px]"></FaPlayCircle>
        </li>
        <li className="cursor-pointer hover:text-pink-600" title="Create">
          <FaCalendarPlus className="text-[24px] md:text-[30px]"></FaCalendarPlus>
        </li>
        <li className="cursor-pointer hover:text-pink-600" title="Massage">
          <FaFacebookMessenger className="text-[24px] md:text-[30px]"></FaFacebookMessenger>
        </li>
        <li className="hover:cursor-pointer" title="Profile">
          <div className="max-w-[24px] md:max-w-[30px]">
            <img
              className="w-full"
              src="https://randomimg.almahmud.top/uploads/1725694636808-698707919-65.png"
              alt="avatar"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
