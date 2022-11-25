import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [roleUser, setRoleUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/roleuser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRoleUser(data);
      });
  }, [user?.email]);
  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">
        <span className="text-danger">{user?.displayName}</span> profile
      </h1>
      <div className="profile-box">
        <div className="d-sm-flex align-items-center text-sm-start ">
          <div className="text-center">
            <img
              src={user?.photoURL}
              className="img-fluid mb-sm-0 mb-3"
              alt="profile"
            />
          </div>

          <div className="ms-sm-4 ms-2 profile-details">
            <h4 className="text-capitalize mb-2">Name : {user?.displayName}</h4>
            <h5 className=" mb-2">Email : {user?.email}</h5>
            <h5 className="m-0">
              Role : {roleUser?.role ? roleUser?.role : "User"}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
