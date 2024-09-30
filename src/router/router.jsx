import { createBrowserRouter } from "react-router-dom";
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
]);

export default router;
