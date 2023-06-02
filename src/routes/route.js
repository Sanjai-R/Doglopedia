import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";
import HomePage from "../pages/HomePage";
import Product from "../pages/Product";
import SingleProduct from "../pages/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },

  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
]);
