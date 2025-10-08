import { createBrowserRouter } from "react-router";
import PageError from "../Error/PageError";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApplications from "../Pages/AllApplications";
import InstalledApps from "../Pages/InstalledApps";
import AppDetailsPage from "../Pages/AppDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AllApplications />,
      },
      {
        path: "/installation",
        element: <InstalledApps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetailsPage />,
      },
    ],
  },
]);

export default router;
