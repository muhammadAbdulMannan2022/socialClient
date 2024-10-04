import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";

export default function Post({
  post: { _id, user, postText, postMedia, likes, comments, timestamp },
  currentUser,
}) {
  const { urlOfBackend } = useContext(AuthContext);
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
  }, [likes, currentUser]);
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
    postId: PropTypes.string.isRequired, // Unique identifier for the post
    user: PropTypes.shape({
      username: PropTypes.string.isRequired, // Username is required
      profileImage: PropTypes.string.isRequired, // Profile image URL is required
      userId: PropTypes.string.isRequired, // User ID is required
    }).isRequired,
    postText: PropTypes.string.isRequired, // Caption or text is required
    postMedia: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["image", "video"]).isRequired, // Media type must be image or video
        url: PropTypes.string.isRequired, // URL to the media (image or video)
      })
    ).isRequired,
    likes: PropTypes.shape({
      likesCount: PropTypes.number.isRequired, // Number of likes
      likedByUser: PropTypes.array.isRequired, // Whether the current user liked the post
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.string.isRequired, // ID of the user who commented
        username: PropTypes.string.isRequired, // Username of the user who commented
        commentText: PropTypes.string.isRequired, // Comment text
        timestamp: PropTypes.string.isRequired, // Timestamp of the comment
      })
    ).isRequired,
    timestamp: PropTypes.string.isRequired, // Post timestamp is required
  }).isRequired,
};
