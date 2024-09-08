import React, { useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

export default function PeopleList() {
  const [users, setUsers] = useState([
    {
      profile: "https://i.ibb.co/2cjWmjG/img1.jpg",
      _id: "1",
      name: "John Doe",
    },
    {
      profile: "https://i.ibb.co/LpzZPxb/img3.jpg",
      _id: "2",
      name: "Jane Smith",
    },
    {
      profile: "https://i.ibb.co/9tVMzZd/img2.jpg",
      _id: "3",
      name: "Michael Johnson",
    },
    {
      profile: "https://i.ibb.co/2cjWmjG/img1.jpg",
      _id: "4",
      name: "Emily Davis",
    },
    {
      profile: "https://i.ibb.co/LpzZPxb/img3.jpg",
      _id: "5",
      name: "Chris Brown",
    },
    {
      profile: "https://i.ibb.co/9tVMzZd/img2.jpg",
      _id: "6",
      name: "Sophia Wilson",
    },
    {
      profile: "https://i.ibb.co/2cjWmjG/img1.jpg",
      _id: "7",
      name: "David Lee",
    },
    {
      profile: "https://i.ibb.co/LpzZPxb/img3.jpg",
      _id: "8",
      name: "Olivia Garcia",
    },
    {
      profile: "https://i.ibb.co/9tVMzZd/img2.jpg",
      _id: "9",
      name: "Liam Martinez",
    },
  ]);

  return (
    <div className="w-[100vw] relative">
      <ul className="flex gap-2 px-2 py-1 overflow-x-scroll w-[100vw]">
        {users.map((user, index) => (
          <div
            key={index}
            className="max-w-[70px] cursor-pointer"
            title={user?.name}
          >
            <li className="min-w-[70px] h-[70px] border-4 border-pink-500 rounded-full overflow-hidden">
              <img
                className="min-w-[70px] object-cover"
                src={user.profile}
                alt={`User ${index}`}
              />
            </li>
            <p className="text-xs text-center">{user?.name}</p>
          </div>
        ))}
      </ul>
      <div className="absolute right-0 top-0 h-full bg-gradient-to-r from-transparent to-black flex items-center justify-center w-20 cursor-pointer">
        <FaChevronRight className="text-2xl" />
      </div>
    </div>
  );
}
