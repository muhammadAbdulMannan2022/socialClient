import { FaPlus, FaUserEdit } from "react-icons/fa";
import ProfilePost from "./ProfilePost";
import { useState } from "react";

export default function Profile({ email }) {
  const [posts, setPosts] = useState([
    {
      postId: "12345",
      url: "#",
      postMedia: [
        {
          type: "image",
          url: "https://i.ibb.co/2cjWmjG/postimage.jpg",
        },
      ],
    },
    {
      postId: "12346",
      url: "#",
      postMedia: [
        {
          type: "video",
          url: "https://www.example.com/samplevideo.mp4",
        },
      ],
    },
    {
      postId: "12347",
      url: "#",
      postMedia: [
        {
          type: "image",
          url: "https://i.ibb.co.com/DpyzX2D/Capture.png",
        },
      ],
    },
    {
      postId: "12348",
      url: "#",
      postMedia: [
        {
          type: "image",
          url: "https://i.ibb.co.com/LpzZPxb/img3.jpg",
        },
      ],
    },
    {
      postId: "12349",
      url: "#",
      postMedia: [
        {
          type: "video",
          url: "https://www.example.com/samplevideo2.mp4",
        },
      ],
    },
    {
      postId: "12350",
      url: "#",
      postMedia: [
        {
          type: "image",
          url: "https://i.ibb.co.com/JkLq4Zr/review2.jpg",
        },
      ],
    },
    {
      postId: "12351",
      url: "#",
      postMedia: [
        {
          type: "video",
          url: "https://www.example.com/samplevideo3.mp4",
        },
      ],
    },

    {
      postId: "12345",
      url: "#",
      postMedia: [
        {
          type: "image",
          url: "https://i.ibb.co/2cjWmjG/postimage.jpg",
        },
      ],
    },
    {
      postId: "12346",
      url: "#",
      postMedia: [
        {
          type: "video",
          url: "https://www.example.com/samplevideo.mp4",
        },
      ],
    },
    {
      postId: "12347",
      url: "#",
      postMedia: [
        {
          type: "image",
          url: "https://i.ibb.co.com/DpyzX2D/Capture.png",
        },
      ],
    },
    {
      postId: "12348",
      url: "#",
      postMedia: [
        {
          type: "image",
          url: "https://i.ibb.co.com/LpzZPxb/img3.jpg",
        },
      ],
    },
    {
      postId: "12349",
      url: "#",
      postMedia: [
        {
          type: "video",
          url: "https://www.example.com/samplevideo2.mp4",
        },
      ],
    },
    {
      postId: "12350",
      url: "#",
      postMedia: [
        {
          type: "image",
          url: "https://i.ibb.co.com/JkLq4Zr/review2.jpg",
        },
      ],
    },
    {
      postId: "12351",
      url: "#",
      postMedia: [
        {
          type: "video",
          url: "",
        },
      ],
    },
  ]);
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-4 border-b border-gray-700">
        <div className="max-w-[150px] max-h-[150px] rounded-full relative border-4 border-green-500">
          <div className="max-w-[140px] max-h-[140px] overflow-hidden rounded-full">
            <img src="https://i.ibb.co.com/9tVMzZd/img2.jpg" alt="" />
          </div>
          <div className="absolute top-[7%] -left-1 rounded-full flex items-center justify-center bg-gray-800 text-blue-500 border-2 border-gray-400 w-[40px] h-[40px] cursor-pointer">
            <FaPlus className="text-2xl" />
          </div>
        </div>
        <div className="text-white pt-2">
          <div className="text-center text-[20px] mb-4">
            <p>Janifar Tomas</p>
          </div>

          <div className="flex space-x-4">
            {/* Create Button */}
            <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
              <FaPlus className="text-white" />
              <p>Create</p>
            </button>

            {/* Edit Button */}
            <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
              <FaUserEdit className="text-white" />
              <p>Edit</p>
            </button>
          </div>
        </div>
      </div>
      <div className="text-white">
        <div className="flex items-center justify-between">
          <div className="border-r border-gray-600 flex-1 text-center text-xl p-2 cursor-pointer hover:bg-gray-900">
            <p>Posts</p>
          </div>
          <div className="border-gray-600 flex-1 text-center text-xl p-2 cursor-pointer hover:bg-gray-900">
            <p>Friends</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {posts.map((post) => (
            <ProfilePost key={post?.postId} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
