import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex bg-black absolute top-0 w-full border-b border-gray-400 text-white items-center gap-2 py-2 px-2 justify-between">
      <div className="max-w-[40px]">
        <img
          className="w-full"
          src="https://i.ibb.co.com/6n6ShBz/logo-removebg-preview.png"
          alt="i"
        />
      </div>
      <div className="w-full mx-auto">
        <div className="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-gray-900 overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm bg-gray-900 text-gray-300 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>
      <div>
        <FaRegHeart className="text-[24px] hover:text-pink-600 cursor-pointer" />
      </div>
    </div>
  );
}
