import React from "react";
import {
  FaCalendarPlus,
  FaFacebookMessenger,
  FaHome,
  FaPlayCircle,
  FaWpexplorer,
} from "react-icons/fa";

export default function NaveBar() {
  return (
    <div className="z-10 bg-black border-t border-gray-500 sticky bottom-0 text-white w-full">
      <ul className="list-none flex w-full items-center justify-evenly py-4">
        <li className="cursor-pointer hover:text-pink-600">
          <FaHome className="text-[24px]"></FaHome>
        </li>
        <li className="cursor-pointer hover:text-pink-600">
          <FaWpexplorer className="text-[24px]"></FaWpexplorer>
        </li>
        <li className="cursor-pointer hover:text-pink-600">
          <FaPlayCircle className="text-[24px]"></FaPlayCircle>
        </li>
        <li className="cursor-pointer hover:text-pink-600">
          <FaCalendarPlus className="text-[24px]"></FaCalendarPlus>
        </li>
        <li className="cursor-pointer hover:text-pink-600">
          <FaFacebookMessenger className="text-[24px]"></FaFacebookMessenger>
        </li>
        <li>
          <div className="max-w-[24px]">
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
