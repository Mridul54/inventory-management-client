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

import Shop from "../pages/CreateStore/Shop";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ViewShop from "../pages/Dashboard/ViewShop";
import ProductManagement from "../pages/Dashboard/ProductManagement";
import SalesCollection from "../pages/Dashboard/Cart/SalesCollection";
import ManageShop from "../pages/Dashboard/Cart/ManageShop";

  
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
        },
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'viewShop',
          element: <ViewShop></ViewShop>
        }, 
        {
          path: 'manageShop',
          element: <ManageShop></ManageShop>
        },
        {
          path: 'productManagement',
          element: <ProductManagement></ProductManagement>,
          loader: ()=> fetch('http://localhost:5000/products')
        },
        {
          path: 'salesCollection',
          element: <SalesCollection></SalesCollection>
        }
      ]
    }
  ]);