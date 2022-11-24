import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const SideNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="side-nav-box  sticky-lg-top  ">
      <div className="user-sm-box  text-center py-md-5 py-4 px-3">
        <img src={user?.photoURL} className="img-fluid mb-3" alt="profile" />
        <h4 className="text-uppercase">{user?.displayName}</h4>
        <span className="w-50 divider d-block m-auto mt-3 "></span>
      </div>
    </div>
  );
};

export default SideNav;
