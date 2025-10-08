import { createBrowserRouter } from "react-router";
import PageError from "../Error/PageError";
import MainLayout from "../Layouts/MainLayout";
import Hero from "../HeroSection/Hero";
import Home from "../Pages/Home";
import AllApplications from "../Pages/AllApplications";
import InstalledApps from "../Pages/InstalledApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/apps",
        element: <AllApplications/>,
      },
      {
        path: "/installation",
        element: <InstalledApps/>,
      },
    ],
  },
]);

export default router;
