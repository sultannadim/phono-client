import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import Loader from "../../Shared/Spinner/Loader";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("Log in");
  const { loginUser, googleLogin, loader, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("Log in Successfull");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  // google login
  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;

        setError("");
        toast.success("Google Login successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (loader) {
    return <Loader></Loader>;
  }
  return (
    <section className="py-5 my-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-11">
            <div className="login-box">
              <Form
                onSubmit={handelLogin}
                className="p-sm-5 p-4 py-5   shadow-lg rounded-3"
              >
                <h3 className="text-center mb-4">Log in</h3>
                {error && (
                  <Form.Text className="text-danger mb-2">{error}</Form.Text>
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
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
                  onClick={handelGoogleLogin}
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
