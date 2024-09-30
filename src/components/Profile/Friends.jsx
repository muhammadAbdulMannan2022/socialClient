import React from "react";
import { Link } from "react-router-dom";

export default function Friends({ friends }) {
  return (
    <>
      {friends?.map((friend) => (
        <FriendCard key={friend?._id} friend={friend} />
      ))}
    </>
  );
}

const FriendCard = ({ friend }) => {
  return (
    <div className="flex items-center space-x-4 p-2 hover:bg-gray-800 rounded-md transition-colors duration-300 w-full">
      {/* Friend Avatar */}
      <Link to={`/user/${friend?._id}`} className="flex items-center space-x-4">
        <div className="w-[60px] h-[60px] overflow-hidden rounded-full border border-gray-600">
          <img
            className="w-full h-full object-cover"
            src={friend?.profile}
            alt={friend?.name}
          />
        </div>

        {/* Friend Name */}
        <div className="text-white text-lg font-semibold">{friend?.name}</div>
      </Link>
    </div>
  );
};
