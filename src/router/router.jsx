import { createBrowserRouter, Link } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import Profile from "../components/Profile/Profile";
import OnlyUsers from "../Private/OnlyUsers";
import PostPage from "../components/postPage/PostPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <OnlyUsers>
        <HomeLayout />
      </OnlyUsers>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/create",
        element: <PostPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: (
      <div className="bg-black text-white w-full h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
          404 NOT FOUND
        </h1>
        <span>
          Go to{" "}
          <Link to="/" className="underline text-blue-500">
            home
          </Link>
        </span>
      </div>
    ),
  },
]);

export default router;
