import React, { useState } from "react";
import PeopleList from "./PeopleList";
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      postId: "12345", // Unique identifier for the post
      user: {
        username: "john_doe", // Username of the person who made the post
        profileImage: "https://i.ibb.co/2cjWmjG/profile.jpg", // User's profile image
        userId: "u56789", // User ID
      },
      postText: "Had an amazing time hiking today! #adventure #nature", // Caption or text associated with the post
      postMedia: [
        {
          type: "image", // Can be 'image' or 'video'
          url: "https://i.ibb.co/2cjWmjG/postimage.jpg", // URL to the media (image/video)
        },
      ],
      likes: {
        count: 1200, // Number of likes on the post
        likedByUser: true, // Whether the current user has liked the post
      },
      comments: [
        {
          userId: "u23456",
          username: "jane_smith",
          commentText: "Looks beautiful! 😍",
          timestamp: "2024-09-07T14:23:00Z",
        },
        {
          userId: "u78901",
          username: "mike_adventure",
          commentText: "Where is this place?",
          timestamp: "2024-09-07T15:10:00Z",
        },
      ],
      timestamp: "2024-09-07T12:45:00Z", // Date and time when the post was created
      location: "Rocky Mountains", // Optional location tag
      saved: false, // Whether the post is saved by the user
      shared: false, // Whether the post has been shared
      postOptions: {
        allowComments: true, // Whether commenting is allowed on the post
        allowLikes: true, // Whether likes are enabled on the post
      },
    },
    {
      postId: "123456", // Unique identifier for the post
      user: {
        username: "john_doe", // Username of the person who made the post
        profileImage: "https://i.ibb.co/2cjWmjG/profile.jpg", // User's profile image
        userId: "u56789", // User ID
      },
      postText: "Do What is wanted by you.", // Caption or text associated with the post
      postMedia: [
        {
          type: "image", // Can be 'image' or 'video'
          url: "https://i.ibb.co.com/JkLq4Zr/review2.jpg", // URL to the media (image/video)
        },
      ],
      likes: {
        count: 1200, // Number of likes on the post
        likedByUser: true, // Whether the current user has liked the post
      },
      comments: [
        {
          userId: "u23456",
          username: "jane_smith",
          commentText: "Looks beautiful! 😍",
          timestamp: "2024-09-07T14:23:00Z",
        },
        {
          userId: "u78901",
          username: "mike_adventure",
          commentText: "Where is this place?",
          timestamp: "2024-09-07T15:10:00Z",
        },
      ],
      timestamp: "2024-09-07T12:45:00Z", // Date and time when the post was created
      location: "Rocky Mountains", // Optional location tag
      saved: false, // Whether the post is saved by the user
      shared: false, // Whether the post has been shared
      postOptions: {
        allowComments: true, // Whether commenting is allowed on the post
        allowLikes: true, // Whether likes are enabled on the post
      },
    },
  ]);
  return (
    <div className="bg-black text-white pt-2 ">
      <div className="">
        <PeopleList />
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post?.postId} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
