import { Navigate, useRoutes } from "react-router-dom";
import Home from "./home/Home.jsx";
import Products from "./products/Products.jsx";
import Administration from "./administration/Administration.jsx";

export default function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/administration",
      element: <Administration />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
  ]);

  return element;
}
