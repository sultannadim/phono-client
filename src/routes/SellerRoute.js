import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Shared/Spinner/Loader";
import Seller from "../Shared/PrivateMessage/Seller";

const SellerRoute = ({ children }) => {
  const { user, loader, myAdmin } = useContext(AuthContext);

  let location = useLocation();

  if (loader) {
    return <Loader></Loader>;
  }
  if (myAdmin?.role === "Seller" && user) {
    return children;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Seller></Seller>;
};

export default SellerRoute;
