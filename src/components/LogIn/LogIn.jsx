import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Instagram Icon */}
      <div className="max-w-[100px] pb-4">
        <img
          className="w-full"
          src="https://i.ibb.co.com/h7pN5fb/logo-removebg-preview.png"
          alt="Isntashohor"
        />
      </div>

      {/* Login Box */}
      <div className="w-full max-w-xs bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-4">Instasohor</h1>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {/* Toggle Icon */}
            <div
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            >
              {showPassword ? (
                <AiFillEyeInvisible className="text-gray-400" />
              ) : (
                <AiFillEye className="text-gray-400" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded font-semibold hover:bg-blue-600"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center my-4">
          <Link to="/forgot-password" className="text-blue-400 text-sm">
            Forgot Password?
          </Link>
        </div>
      </div>

      {/* Or Divider */}
      <div className="flex items-center justify-center my-4 w-full max-w-xs">
        <div className="flex-grow border-t border-gray-500"></div>
        <span className="px-2 text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>

      {/* Sign Up */}
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full max-w-xs text-center">
        <span className="text-sm">Don't have an account?</span>
        <Link to="/signup" className="text-blue-500 font-semibold ml-2">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
