import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">
        <span className="text-danger">{user?.displayName}</span> All Products
      </h1>
    </div>
  );
};

export default MyProducts;
