import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="py-5 my-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-11">
            <div className="login-box">
              <Form className="p-sm-5 p-4 py-5   shadow-lg rounded-3">
                <h3 className="text-center mb-4">Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  className="bg-dark border-dark w-100 py-2 mb-3"
                  type="submit"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  className="bg-dark border-dark w-100 py-2 mb-3"
                >
                  <FaGoogle className="me-2"></FaGoogle>
                  Google Login
                </Button>
                <p className="text-center mb-0">
                  Don't have an account? please{" "}
                  <Link to="/registration" className="text-decoration-none">
                    Registration
                  </Link>{" "}
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
