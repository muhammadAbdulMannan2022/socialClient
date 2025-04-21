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
    <div className="">
      <Link to={post?.url}>
        <div className="w-[120px] h-[120px] overflow-hidden border border-gray-600 flex items-start justify-center">
          {post?.postMedia?.length > 0 ? (
            post?.postMedia[0]?.type === "image" ? (
              <img
                className="w-[115px]"
                src={post?.postMedia[0]?.url}
                alt={post?.postId}
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={post?.postMedia[0]?.url}
                  className="w-full h-full object-cover"
                  controls // optional: adds play/pause/etc.
                  muted
                ></video>

                {/* Optional play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black rounded-full p-1 bg-opacity-50">
                    <FaPlayCircle className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            )
          ) : (
            <Link to={`/post/${post.postId}`}>
              <div className="p-2 text-base text-white line-clamp-2 hover:underline">
                {post?.postText}
              </div>
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};
