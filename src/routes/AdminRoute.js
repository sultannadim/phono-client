import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Shared/Spinner/Loader";
import Admin from "../Shared/PrivateMessage/Admin";

const AdminRoute = ({ children }) => {
  const { user, loader, myAdmin } = useContext(AuthContext);

  let location = useLocation();

  if (loader) {
    return <Loader></Loader>;
  }
  if (myAdmin?.role === "Admin") {
    return children;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Admin></Admin>;
};

export default AdminRoute;
