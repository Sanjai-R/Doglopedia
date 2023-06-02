import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/home",
    element: <div>Dashboard</div>,
  },
]);
