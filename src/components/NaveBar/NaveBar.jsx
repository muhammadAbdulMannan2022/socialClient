import { useContext } from "react";
import {
  FaCalendarPlus,
  FaFacebookMessenger,
  FaHome,
  FaPlayCircle,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

export default function NaveBar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="z-10 bg-black text-white w-full md:w-[10%] lg:w-[25%] md:h-screen sticky bottom-0 md:sticky md:top-0 md:left-0 border-t border-gray-500 md:border-t-0 md:border-r md:bg-slate-950">
      <ul className="list-none flex w-full items-center justify-evenly py-4 md:flex-col md:items-center md:px-2 md:h-full md:justify-between lg:items-start">
        {/* Logo */}
        <Link
          to="/"
          className="cursor-pointer max-w-[30px] md:max-w-[35px] hidden md:block lg:flex lg:gap-4 lg:items-center text-[#35B5FD] logoFont font-bold"
          title="Instashohor"
        >
          <img
            src="https://i.ibb.co.com/h7pN5fb/logo-removebg-preview.png"
            alt="instaShohor"
          />
          <p className="hidden lg:block text-2xl">Instashohor</p>
        </Link>

        {/* Nav Items */}
        <Link
          to="/"
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Home"
        >
          <FaHome className="text-[24px] md:text-[30px]" />
          <p className="hidden lg:block lg:font-bold text-xl">Home</p>
        </Link>

        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Search"
        >
          <FaMagnifyingGlass className="text-[24px] md:text-[30px]" />
          <p className="hidden lg:block lg:font-bold text-xl">Search</p>
        </li>

        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Explore"
        >
          <FaPlayCircle className="text-[24px] md:text-[30px]" />
          <p className="hidden lg:block lg:font-bold text-xl">Watch</p>
        </li>

        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Create"
        >
          <FaCalendarPlus className="text-[24px] md:text-[30px]" />
          <p className="hidden lg:block lg:font-bold text-xl">Create</p>
        </li>

        <li
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:hover:bg-gray-900 lg:w-full lg:p-2 lg:rounded-sm"
          title="Massage"
        >
          <FaFacebookMessenger className="text-[24px] md:text-[30px]" />
          <p className="hidden lg:block lg:font-bold text-xl">Massage</p>
        </li>

        {/* Profile Link */}
        <Link
          to="/profile"
          className="cursor-pointer hover:text-pink-600 lg:flex lg:items-start lg:gap-4 lg:w-full lg:p-2 lg:rounded-sm lg:border-t"
          title="Profile"
        >
          <div className="max-w-[24px] md:max-w-[30px]">
            <img
              className="w-full"
              src={
                user?.photoURL
                  ? `${user?.photoURL}`
                  : "https://randomimg.almahmud.top/uploads/1725694636808-698707919-65.png"
              }
              alt="avatar"
            />
          </div>
          <p className="hidden lg:block lg:font-bold text-xl">Profile</p>
        </Link>
      </ul>
    </div>
  );
}
