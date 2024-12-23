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
import ServiceUpdate from "../Pages/ServiceUpdate";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageServices",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allServices"),
      },
      {
        path: "/bookedServices",
        element: (
          <PrivateRoute>
            <BookedServices></BookedServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceToDo",
        element: (
          <PrivateRoute>
            <ServiceToDo></ServiceToDo>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singleServiceDetails/:id",
        element: (
          <PrivateRoute>
            <SingleServiceDetails></SingleServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleService/${params.id}`),
      },
      {
        path: "/bookedService/:id",
        element: (
          <PrivateRoute>
            <ServiceBooked></ServiceBooked>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleService/${params.id}`),
      },
      {
        path: "/serviceUpdate/:id",
        element: (
          <PrivateRoute>
            <ServiceUpdate></ServiceUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updatedService/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <h1>ERROR!</h1>,
  },
]);
export default router;
