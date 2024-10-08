import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const { emailPasswordSignup, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { urlOfBackend } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await emailPasswordSignup(emailOrMobile, password);
      // Wait for the profile to be updated
      await updateProfile(res?.user, {
        displayName: fullName,
        photoURL: "https://picsum.photos/200/200",
      });

      // Now you can access the updated displayName
      const updatedUser = {
        ...res.user,
        displayName: fullName, // Set displayName from state
        photoURL: res.user.photoURL || "https://picsum.photos/200/200", // This will still be null unless set during user creation
      };

      console.log("signUp", updatedUser);

      // Send user data to backend
      await fetch(`${urlOfBackend}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailOrMobile,
          name: updatedUser.displayName, // Use the updated displayName
          avatar: updatedUser.photoURL, // This will still be null unless specified
          uid: updatedUser.uid,
        }),
      });

      navigate("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("email alrady is use");
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
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

      {/* Sign Up Box */}
      <div className="w-full max-w-xs bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-4">Sign Up</h1>

        {/* Sign Up Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              required
              type="text"
              placeholder="Mobile Number or Email"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              required
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Sign Up
          </button>
        </form>

        {/* Terms and Conditions */}
        <div className="text-center my-4 text-gray-400 text-xs">
          <p>
            By signing up, you agree to our{" "}
            <span className="text-blue-400">Terms</span>,{" "}
            <span className="text-blue-400">Privacy Policy</span>, and{" "}
            <span className="text-blue-400">Cookies Policy</span>.
          </p>
        </div>
      </div>

      {/* Or Divider */}
      <div className="flex items-center justify-center my-4 w-full max-w-xs">
        <div className="flex-grow border-t border-gray-500"></div>
        <span className="px-2 text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>

      {/* Log In */}
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full max-w-xs text-center">
        <span className="text-sm">Already have an account?</span>
        <Link to="/login" className="text-blue-500 font-semibold ml-2">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
