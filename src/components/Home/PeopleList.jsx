import React, { useRef, useState, useEffect, useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";

export default function PeopleList() {
  const { urlOfBackend } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  const containerRefToScroll = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollRight = () => {
    containerRefToScroll.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    containerRefToScroll.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = containerRefToScroll.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // Check if scrolled all the way to the left
    setShowLeftButton(container.scrollLeft > 0);

    // Check if scrolled all the way to the right
    setShowRightButton(container.scrollLeft < maxScrollLeft);
  };

  useEffect(() => {
    const container = containerRefToScroll.current;
    container.addEventListener("scroll", handleScroll);
    fetch(`${urlOfBackend}/getusers`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
    console.log(users);

    // Cleanup listener on component unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full relative md:flex md:items-center md:justify-center">
      {showLeftButton && (
        <div
          onClick={scrollLeft}
          className="absolute left-0 top-0 h-full bg-gradient-to-l from-transparent to-black flex items-center justify-center w-20 cursor-pointer"
        >
          <FaChevronLeft className="text-2xl" />
        </div>
      )}

      <ul
        ref={containerRefToScroll}
        className="scrollbar-hide flex gap-2 px-2 py-1 overflow-x-scroll w-full md:w-auto"
      >
        {users.map((user, index) => (
          <div
            key={index}
            className="max-w-[70px] cursor-pointer"
            title={user?.name}
          >
            <li className="min-w-[70px] h-[70px] border-4 border-pink-500 rounded-full overflow-hidden">
              <img
                className="min-w-[70px] object-cover"
                src={user?.avatar}
                alt={`User ${index}`}
              />
            </li>
            <p className="text-xs text-center">{user?.name}</p>
          </div>
        ))}
      </ul>

      {showRightButton && (
        <div
          onClick={scrollRight}
          className="absolute right-0 top-0 h-full bg-gradient-to-r from-transparent to-black flex items-center justify-center w-20 cursor-pointer"
        >
          <FaChevronRight className="text-2xl" />
        </div>
      )}
    </div>
  );
}
