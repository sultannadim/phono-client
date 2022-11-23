import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
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
            <Nav className="ms-auto my-nav pt-lg-0 pt-3">
              <Link className=" fw-bold ms-3 text-decoration-none mb-lg-0 mb-3">
                Blogs
              </Link>
              <Link className=" fw-bold ms-3 text-decoration-none mb-lg-0 mb-3">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
