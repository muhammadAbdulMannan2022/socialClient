import { createBrowserRouter } from "react-router-dom";
import VerifyAuth from "../Auth/VerifyAuth";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <VerifyAuth>
        <HomeLayout />
      </VerifyAuth>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
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
