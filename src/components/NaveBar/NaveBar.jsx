import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { HiHome, HiMenu, HiOutlineX, HiPlay, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfoIsOpen, setUserInfoIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setUserInfoIsOpen(false);
    }
  }, [isOpen]);

  return (
    <nav className="flex md:py-0 items-center justify-between bg-gray-800 text-white py-2 px-6 md:px-10">
      <div className="flex items-center w-24 overflow-hidden justify-center">
        <img
          src="https://i.ibb.co/sbfnCxb/logo-removebg-preview.png"
          alt="Logo"
          className="w-12 my-2"
          title="Instashohor"
        />
      </div>
      {/* links */}
      <div
        className={`flex md:flex-row md:block flex-col absolute md:relative top-0 right-0 w-full md:w-auto h-screen md:h-auto bg-slate-900 md:bg-inherit backdrop-blur-md bg-opacity-50 p-10 md:p-0 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="bg-gray-600 z-50 md:hidden hover:bg-gray-700 cursor-pointer w-12 h-12 rounded-full flex items-center justify-center"
        >
          <HiOutlineX className="w-10 h-10" />
        </div>
        <ul className="flex flex-col md:flex-row mt-10 md:mt-0 gap-4 transition-colors">
          <li
            className="hover:bg-slate-700 rounded-lg transition-colors p-5 md:px-5 md:py-2  cursor-pointer text-center font-bold"
            title="Home"
          >
            <Link className={`${isOpen ? "flex items-center gap-5" : ""}`}>
              <HiHome className="text-xl md:text-2xl hover:text-[#37B6FF]" />{" "}
              {isOpen ? <h2>Home</h2> : <></>}
            </Link>
          </li>
          <li
            className="hover:bg-slate-700 rounded-lg transition-colors p-5 md:px-5 md:py-2  cursor-pointer text-center font-bold"
            title="Watch"
          >
            <Link className={`${isOpen ? "flex items-center gap-5" : ""}`}>
              <HiPlay className="text-xl md:text-2xl hover:text-[#37B6FF]" />{" "}
              {isOpen ? <h2>Watch</h2> : <></>}
            </Link>
          </li>
          <li
            className="hover:bg-slate-700 rounded-lg transition-colors p-5 md:px-5 md:py-2  cursor-pointer text-center font-bold"
            title="Notifications"
          >
            <Link className={`${isOpen ? "flex items-center gap-5" : ""}`}>
              <FaBell className="text-xl md:text-2xl hover:text-[#37B6FF]" />{" "}
              {isOpen ? <h2>Notifications</h2> : <></>}
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <div className={`${isOpen || "relative"}`}>
          <div
            onClick={() => setUserInfoIsOpen(!userInfoIsOpen)}
            className={`border rounded-full cursor-pointer overflow-hidden`}
          >
            {/* <img src="" alt="" className="h-10 w-10" /> */}
            <HiUser className="h-10 w-10 -z-10" />
          </div>
          {/* userInfoIsOpen */}
          <div
            className={`absolute bg-slate-500 right-0 mt-4 p-4 rounded ${
              userInfoIsOpen || "hidden"
            }`}
          >
            <ul>
              <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2  cursor-pointer text-center font-bold">
                <Link>Home</Link>
              </li>
              <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2  cursor-pointer text-center font-bold">
                <Link>About</Link>
              </li>
              <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2  cursor-pointer text-center font-bold">
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white focus:outline-none"
          >
            <HiMenu className="w-10 h-10" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navebar;
