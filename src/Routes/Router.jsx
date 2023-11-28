import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import CreateStore from "../pages/CreateStore/CreateStore";
import WatchDemo from "../pages/watchDemo/WatchDemo";
import Shop from "../pages/CreateStore/Shop";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
          path: '/store',
          element: <PrivateRoute><CreateStore></CreateStore></PrivateRoute>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        }
        
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);