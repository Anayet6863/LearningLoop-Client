import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
const router =  createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:"/allService",
                element:<h1>All services.</h1>
            }
        ]
       
    },
    {
        path:'*',
        element:<h1>ERROR!</h1>
    }



])
export default router;