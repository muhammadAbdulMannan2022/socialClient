import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProfilePost({ posts }) {
  return (
    <>
      {posts?.map((post) => (
        <Profile key={post?.postId} post={post} />
      ))}
    </>
  );
}

const Profile = ({ post }) => {
  return (
    <div>
      <Link to={post?.url}>
        <div className="w-[120px] h-[120px] overflow-hidden border border-gray-600 flex items-start justify-center">
          {post?.postMedia[0]?.type === "image" ? (
            <img
              className="w-[115px]"
              src={post?.postMedia[0]?.url}
              alt={post?.postId}
            />
          ) : (
            <div>
              {/* Video Element */}
              <video
                src={post?.postMedia[0]?.url}
                className="w-full h-full object-cover"
                autoPlay={false}
                muted
              ></video>

              {/* Overlay and Play Icon */}
              <div className="flex items-center justify-center">
                <div className="bg-black rounded-full p-[1px]">
                  <FaPlayCircle className="text-white text-xl" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
