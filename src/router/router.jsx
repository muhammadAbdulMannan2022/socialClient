import { createBrowserRouter } from "react-router-dom";
import VerifyAuth from "../Auth/VerifyAuth";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
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
]);

export default router;
