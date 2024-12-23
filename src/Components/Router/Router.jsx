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
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import SingleServiceDetails from "../Pages/SingleServiceDetails";
import ServiceBooked from "../Pages/ServiceBooked";
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
                element:<ManageServices></ManageServices>,
                loader:()=>fetch("http://localhost:5000/allServices")
            },{
                path:"/bookedServices",
                element:<BookedServices></BookedServices>
            },
            {
                path:"/serviceToDo",
                element:<ServiceToDo></ServiceToDo>
            },
            {
                path:"/register",
                element:<Registration></Registration>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/singleServiceDetails/:id",
                element:<SingleServiceDetails></SingleServiceDetails>,
                loader:({params}) => fetch(`http://localhost:5000/singleService/${params.id}`)
            },
            {
                path:"/bookedService/:id",
                element:<ServiceBooked></ServiceBooked>,
                loader:({params}) => fetch(`http://localhost:5000/singleService/${params.id}`)
            }
        ]
       
    },
    {
        path:'*',
        element:<h1>ERROR!</h1>
    }



])
export default router;