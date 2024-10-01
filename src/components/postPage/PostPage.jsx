import { FaCamera, FaPlus, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEarthAsia } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";

const imgbbApiKey = import.meta.env.VITE_IMGBB_API; // Replace with your actual ImgBB API key

const PostPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [caption, setCaption] = useState("");
  const { user, urlOfBackend } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const uploadImageToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.success) {
        return data.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handlePost = async () => {
    if (!imageFile && !caption) {
      alert("Please add a caption or upload an image.");
      return;
    }

    // Upload image to ImgBB
    const imageUrl = await uploadImageToImgBB(imageFile);
    if (!imageUrl) {
      alert("Image upload failed.");
      return;
    }

    const postData = {
      postId: Date.now().toString() + user?.uid, // Generate unique post ID
      user: {
        username: user?.displayName || "Anonymous", // Replace with actual user data
        profileImage: user?.photoURL || "https://i.ibb.co/2cjWmjG/profile.jpg",
        userId: user?.uid || "unknown",
      },
      postText: caption,
      postMedia: [
        {
          type: "image",
          url: imageUrl, // URL from ImgBB
        },
      ],
      likes: {
        count: 0,
        likedByUser: false,
      },
      comments: [],
      timestamp: new Date().toISOString(),
      shared: false,
      postOptions: {
        allowComments: true,
        allowLikes: true,
      },
    };

    // Send the post data to your backend
    try {
      const response = await fetch(`${urlOfBackend}/createpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      // console.log(response);

      if (response.ok) {
        console.log("Post successfully created");
      } else {
        console.error("Failed to create post");
      }
      console.log(postData);
      setCaption("");
      setImageFile(null);
      setImagePreview(null);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="h-full">
      {" "}
      {/* Ensure the parent takes the full height available */}
      <div className="bg-black text-white h-full p-4 flex flex-col items-center">
        {" "}
        {/* Prevent overflow */}
        <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
        {/* Post Creation Section */}
        <div className="w-full max-w-lg bg-gray-900 p-4 rounded-lg flex flex-col justify-between">
          {" "}
          {/* Use flex to prevent overflow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-bold text-lg">{user?.displayName}</h1>
              <div className="flex items-center justify-center gap-2">
                <FaEarthAsia className="text-xs text-gray-500" />
                <span className="text-xs text-gray-500">public</span>
              </div>
            </div>
          </div>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows="3"
            className="w-full p-2 rounded-md bg-transparent text-white mb-4 outline-none resize-none" // Add resize-none to prevent resizing
            placeholder="What's on your mind?"
          ></textarea>
          {/* Image Upload Section */}
          <div className="relative w-full h-64 bg-gray-950 rounded-lg flex items-center justify-center mb-4">
            {" "}
            {/* Added mb-4 to space the button */}
            {!imagePreview ? (
              <>
                {/* Hidden File Input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="imageInput"
                />
                {/* Camera Icon for Image Upload */}
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer flex items-center justify-center bg-gray-700 p-4 rounded-full"
                >
                  <FaCamera className="text-3xl text-gray-400" />
                </label>
              </>
            ) : (
              <>
                {/* Image Preview */}
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="object-cover w-full h-full rounded-lg"
                />
                {/* Cancel Button */}
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-gray-600 p-1 rounded-full"
                >
                  <FaTimes className="text-white" />
                </button>
              </>
            )}
          </div>
          <button
            onClick={handlePost}
            className="mt-5 w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-800 py-2 px-6 rounded-md text-white transition-colors duration-300"
          >
            <span className="">Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
