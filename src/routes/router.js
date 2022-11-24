import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import MyOrders from "../Dashboard/Buyers/MyOrders";
import MyProducts from "../Dashboard/MyProducts/MyProducts";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "category/:id",
        element: <CategoryProduct></CategoryProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
