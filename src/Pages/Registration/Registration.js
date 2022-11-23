import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <section className="py-5 my-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="reg-box">
              <Form className="p-5 shadow-lg rounded-3">
                <h3 className="text-center mb-4">Registration</h3>
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
                  Registration
                </Button>

                <p className="text-center mb-0">
                  Already have an account? please{" "}
                  <Link to="/registration" className="text-decoration-none">
                    Login
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

export default Registration;
