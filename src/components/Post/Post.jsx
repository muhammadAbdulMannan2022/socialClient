import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Post({
  post: initialPost, // Receive the initial post data as a prop
  currentUser,
}) {
  const { urlOfBackend } = useContext(AuthContext);

  // Manage the post state and use initialPost as default value
  const [post, setPost] = useState(initialPost);

  const { _id, user, postText, postMedia, likes, comments, timestamp } = post;

  const [postLikedbyCurrentUser, setPostLikedbyCurrentUser] = useState(false);
  const [likedByUsers, setLikedByUsers] = useState([]);

  const handleLike = () => {
    const userId = currentUser?.uid;

    // Toggle the like status and update likedByUsers array
    let updatedLikedUsers;
    if (likes?.likedByUser.includes(userId)) {
      // Remove the user from likedByUsers if already liked
      updatedLikedUsers = likedByUsers.filter((id) => id !== userId);
    } else {
      // Add the user to likedByUsers if not already liked
      updatedLikedUsers = [...likedByUsers, userId];
    }

    // Update the state
    setPostLikedbyCurrentUser(!postLikedbyCurrentUser);
    setLikedByUsers(updatedLikedUsers);

    // Update the backend
    updatePostData(_id, updatedLikedUsers);
  };

  const updatePostData = (pId, likedByUsers) => {
    fetch(`${urlOfBackend}/updatepostdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: pId,
        updates: {
          likes: {
            likedByUser: likedByUsers,
            likesCount: likedByUsers.length, // Update the like count based on the number of liked users
          },
        },
      }),
    })
      .then((data) => console.log("Post updated successfully:", data))
      .catch((err) => console.log("Error updating post:", err));
  };

  useEffect(() => {
    if (likes?.likedByUser && currentUser?.uid) {
      setPostLikedbyCurrentUser(likes?.likedByUser.includes(currentUser.uid));
      setLikedByUsers([...likes.likedByUser]);
    }

    // Listen for socket updates
    socket.on("postupdate", (updatedPost) => {
      if (updatedPost._id === _id) {
        setPost(updatedPost); // Update the post state with new data
        setLikedByUsers(!likedByUsers);
      }
    });

    // Cleanup the socket listener on component unmount
    return () => {
      socket.off("postupdate");
    };
  }, [likes, currentUser, _id]);

  return (
    <div>
      <div className="bg-slate-950 shadow-md rounded-lg p-4 max-w-lg mx-auto my-4">
        {/* User Info */}
        <div className="flex items-center mb-3">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={user.profileImage}
            alt={user.username}
          />
          <div>
            <p className="font-semibold">{user.username}</p>
            <p className="text-sm text-gray-500">
              {new Date(timestamp).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Post Text */}
        {postText && (
          <div className="mb-3">
            <p className="text-sm">{postText}</p>
          </div>
        )}

        {/* Post Media */}
        {postMedia.length > 0 && (
          <div className="mb-3">
            {postMedia.map((media, index) => (
              <div key={index} className="mb-2">
                {media.type === "image" ? (
                  <img
                    className="w-full rounded-lg"
                    src={media.url}
                    alt={`Post media ${index}`}
                  />
                ) : (
                  <video className="w-full rounded-lg" controls>
                    <source src={media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Interaction Buttons */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center text-gray-500 hover:text-red-500"
            >
              <FaHeart
                className={`mr-1 ${postLikedbyCurrentUser && "text-red-600"}`}
              />
              <span>{likes?.likesCount}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <FaComment className="mr-1" />
              <span>{comments.length}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-green-500">
              <FaShare className="mr-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define propTypes for the Post component
Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      profileImage: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
    }).isRequired,
    postText: PropTypes.string.isRequired,
    postMedia: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["image", "video"]).isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    likes: PropTypes.shape({
      likesCount: PropTypes.number.isRequired,
      likedByUser: PropTypes.array.isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        commentText: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
      })
    ).isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};
