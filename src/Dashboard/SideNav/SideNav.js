import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-hot-toast";

const SideNav = () => {
  const { user, logOut } = useContext(AuthContext);

  const [roleUser, setRoleUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/roleuser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRoleUser(data);
      });
  }, [user?.email]);
  const handelLogOut = () => {
    logOut()
      .then(() => {
        toast.error("You Are Loged Out");
      })
      .catch(() => {});
  };
  return (
    <div className="side-nav-box  sticky-md-top  ">
      <div className="user-sm-box  text-center py-md-5 py-4 px-3 d-flex flex-column">
        <img
          src={user?.photoURL}
          className="img-fluid d-block mx-auto mb-3"
          alt="profile"
        />
        <h4 className="text-uppercase">{user?.displayName}</h4>
        <span className="w-50 divider d-block m-auto my-3 "></span>
        <div className="db">
          <Link
            to="/dashboard"
            className=" fw-bold d-block text-decoration-none mb-2"
          >
            My Profile
          </Link>
          {(roleUser?.role === "User" || user?.emailVerified === true) && (
            <Link
              to="/dashboard/myorders"
              className=" fw-bold d-block text-decoration-none mb-2"
            >
              My orders
            </Link>
          )}

          {roleUser?.role === "Seller" && (
            <>
              <Link
                to="/dashboard/addproduct"
                className=" fw-bold d-block text-decoration-none mb-2"
              >
                Add A product
              </Link>
              <Link
                to="/dashboard/myproducts"
                className=" fw-bold d-block text-decoration-none mb-2"
              >
                My Products
              </Link>
            </>
          )}

          {roleUser?.role === "Admin" && (
            <>
              <Link
                to="/dashboard/allsellers"
                className=" fw-bold d-block text-decoration-none mb-2"
              >
                All Sellers
              </Link>
              <Link
                to="/dashboard/allbuyers"
                className=" fw-bold d-block text-decoration-none mb-2"
              >
                All Buyers
              </Link>
              <Link className=" fw-bold d-block text-decoration-none mb-2">
                Reported Items
              </Link>
            </>
          )}
        </div>
        <div className="bottom-box mt-auto">
          <Link to="/" className="m-auto d-block w-75 text-decoration-none">
            <Button
              variant="primary"
              className="bg-dark border-dark w-100 mt-md-0 mt-5  py-2 mb-2"
            >
              Back To Home
            </Button>
          </Link>
          <Link to="/" className="m-auto d-block w-75 text-decoration-none">
            <Button
              onClick={handelLogOut}
              variant="primary"
              className="bg-dark border-dark d-block w-100  py-2"
            >
              Log out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
