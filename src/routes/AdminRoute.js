import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Shared/Spinner/Loader";

const AdminRoute = ({ children }) => {
  const { loader, myAdmin } = useContext(AuthContext);

  let location = useLocation();

  if (loader) {
    return <Loader></Loader>;
  }
  if (myAdmin?.role === "Admin") {
    return children;
  }

  return <Navigate to="/dashboard" state={{ from: location }} replace />;
};

export default AdminRoute;
