import { FaPlus, FaUserEdit, FaSave, FaTimes } from "react-icons/fa";
import ProfilePost from "./ProfilePost";
import { useContext, useState, useRef } from "react";
import Friends from "./Friends";
import { AuthContext } from "../../Providers/AuthProviders";

export default function Profile() {
  const { user, updateUserProfile, urlOfBackend } = useContext(AuthContext);

  const [posts, setPosts] = useState([
    // ... Your posts array here ...
  ]);
  const [isPostActive, setIsPostActive] = useState(true);
  const [friends, setFriends] = useState([
    // ... Your friends array here ...
  ]);

  const [isUploading, setIsUploading] = useState(false); // Track upload state
  const [previewImage, setPreviewImage] = useState(""); // Store preview image URL
  const [uploadedImage, setUploadedImage] = useState(""); // Store uploaded image URL
  const [showUploadButtons, setShowUploadButtons] = useState(false); // Toggle save/cancel buttons
  const inputRef = useRef(null); // File input reference

  const imgbbApiKey = import.meta.env.VITE_IMGBB_API; // Replace with your imgbb API key

  // Handle file input change for preview
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file); // Generate preview URL
      setPreviewImage(previewURL);
      setShowUploadButtons(true);
    }
  };

  // Upload the image when the user clicks Save
  const handleSave = async () => {
    if (!previewImage) return;

    setIsUploading(true);
    const file = inputRef.current.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        { method: "POST", body: formData }
      );

      const result = await response.json();
      if (result.success) {
        const imageUrl = result.data.display_url;
        setUploadedImage(imageUrl); // Store the uploaded image URL
        console.log(imageUrl);

        await updateUserProfile({ photoURL: imageUrl });
        await fetch(`${urlOfBackend}/updateprofile`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user?.uid,
            profileData: { avatar: imageUrl },
          }),
        });

        console.log("Profile updated with new avatar:", imageUrl);
        setPreviewImage("");
        setShowUploadButtons(false);
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  // Cancel the upload and reset the preview
  const handleCancel = () => {
    setPreviewImage(""); // Remove preview image
    inputRef.current.value = ""; // Reset file input
    setShowUploadButtons(false); // Hide buttons
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-4 border-b border-gray-700">
        <div className="max-w-[150px] max-h-[150px] rounded-full relative border-4 border-green-500">
          <div className="w-[140px] h-[140px] overflow-hidden rounded-full">
            <img
              src={
                previewImage ||
                uploadedImage ||
                user?.photoURL ||
                "../assets/avatar-loading.svg"
              }
              alt="Profile"
              className="object-cover w-full"
            />
          </div>

          {/* Plus Icon to Trigger File Input */}
          <div
            className="absolute top-[7%] -left-1 rounded-full flex items-center justify-center bg-gray-800 text-blue-500 border-2 border-gray-400 w-[40px] h-[40px] cursor-pointer"
            onClick={() => inputRef.current.click()}
          >
            <FaPlus className="text-2xl" />
          </div>

          <input
            type="file"
            ref={inputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Save and Cancel Buttons */}
        {showUploadButtons && (
          <div className="flex space-x-2 mt-2">
            <button
              className="flex items-center space-x-2 bg-green-600 text-white py-1 px-3 rounded-md hover:bg-green-700 transition-colors duration-300"
              disabled={isUploading}
              onClick={handleSave}
            >
              <FaSave />
              <span>{isUploading ? "Saving..." : "Save"}</span>
            </button>
            <button
              className="flex items-center space-x-2 bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-colors duration-300"
              onClick={handleCancel}
            >
              <FaTimes />
              <span>Cancel</span>
            </button>
          </div>
        )}

        <div className="text-white pt-2 flex flex-col items-center justify-center">
          <div className="text-center text-[20px] mb-4">
            <p className="font-bold text-[30px]">{user?.displayName}</p>
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
              <FaPlus className="text-white" />
              <p>Create</p>
            </button>

            <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
              <FaUserEdit className="text-white" />
              <p>Edit</p>
            </button>
          </div>
        </div>
      </div>

      {/* Toggle between Posts and Friends */}
      <div className="text-white">
        <div className="flex items-center justify-between lg:mx-[15%]">
          <div
            className={`border-gray-600 flex-1 text-center text-xl p-2 cursor-pointer hover:bg-gray-900 ${
              isPostActive ? "bg-gray-800" : ""
            }`}
            onClick={() => setIsPostActive(true)}
          >
            <p>Posts</p>
          </div>
          <div
            className={`border-gray-600 flex-1 text-center text-xl p-2 cursor-pointer hover:bg-gray-900 ${
              !isPostActive ? "bg-gray-800" : ""
            }`}
            onClick={() => setIsPostActive(false)}
          >
            <p>Friends</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:px-[15%]">
          {isPostActive ? (
            <ProfilePost posts={posts} />
          ) : (
            <Friends friends={friends} />
          )}
        </div>
      </div>
    </div>
  );
}
