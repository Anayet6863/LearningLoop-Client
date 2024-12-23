import React, { useContext, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";



import { AuthContext } from "../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  
  
  const location = useLocation();
  
  console.log(location.pathname);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  } else {
    Swal.fire("Please login first.!");
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

};

export default PrivateRoute;
