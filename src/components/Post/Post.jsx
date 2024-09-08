import React from "react";
import PropTypes from "prop-types";

export default function Post({
  post: { postId, user, postText, postMedia, likes, comments, timestamp },
}) {
  return <div>{/* Post content goes here */}</div>;
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
      count: PropTypes.number.isRequired, // Number of likes
      likedByUser: PropTypes.bool.isRequired, // Whether the current user liked the post
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
