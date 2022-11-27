import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {
        toast.error("You Are Loged Out");
        localStorage.removeItem("phono-token");
      })
      .catch(() => {});
  };
  return (
    <header className="header py-2">
      <Navbar expand="lg">
        <Container>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Navbar.Toggle
            className="shadow-none"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center my-nav pt-lg-0 pt-3">
              <Link
                to="/blog"
                className=" fw-bold ms-3 text-decoration-none mb-lg-0 mb-3"
              >
                Blogs
              </Link>

              {user?.uid ? (
                <>
                  <Link
                    to="/dashboard"
                    className=" fw-bold ms-3 text-decoration-none mb-lg-0 mb-3"
                  >
                    Dashboard
                  </Link>
                  <Link
                    onClick={handelLogOut}
                    className=" fw-bold ms-3 text-decoration-none mb-lg-0 mb-3"
                  >
                    Log out
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className=" fw-bold ms-3 text-decoration-none mb-lg-0 mb-3"
                >
                  Log in
                </Link>
              )}
              {user?.photoURL && (
                <Link
                  to="/dashboard"
                  className=" fw-bold ms-3 text-decoration-none mb-lg-0 mb-3"
                >
                  <img
                    src={user?.photoURL}
                    className="profile-img"
                    alt="Profile"
                  />
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
