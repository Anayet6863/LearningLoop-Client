import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import AddServices from "../Pages/AddServices";
import ManageServices from "../Pages/ManageServices";
import BookedServices from "../Pages/BookedServices";
import ServiceToDo from "../Pages/ServiceToDo";
const router =  createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:"/services",
                element:<Services></Services>
            },
            {
                path:'/addServices',
                element:<AddServices></AddServices>
            },
            {
                path:"/manageServices",
                element:<ManageServices></ManageServices>
            },{
                path:"/bookedServices",
                element:<BookedServices></BookedServices>
            },
            {
                path:"/serviceToDo",
                element:<ServiceToDo></ServiceToDo>
            }
        ]
       
    },
    {
        path:'*',
        element:<h1>ERROR!</h1>
    }



])
export default router;