import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Shared/Spinner/Loader";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const { loader, user } = useContext(AuthContext);
  if (loader) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
