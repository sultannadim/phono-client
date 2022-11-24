import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-md-4 px-sm-3 py-4">
      <h1 className="text-capitalize mb-sm-5 mb-3">
        <span className="text-danger">{user?.displayName}</span> profile
      </h1>
      <div className="profile-box">
        <div className="d-sm-flex align-items-center text-sm-start text-center">
          <img
            src={user?.photoURL}
            className="img-fluid mb-sm-0 mb-3"
            alt="profile"
          />
          <div className="ms-4">
            <h4 className="text-capitalize mb-2">Name : {user?.displayName}</h4>
            <h5 className=" mb-2">Email : {user?.email}</h5>
            <h5>Role : </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
