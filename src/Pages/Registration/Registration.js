import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Registration = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handelRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const role = form.role.value;
    const password = form.password.value;
    const status = "Unverified";

    const users = {
      name,
      email,
      photoURL,
      role,
      status,
    };

    createUser(email, password)
      .then((result) => {
        const profiel = { displayName: name, photoURL: photoURL };
        updateUser(profiel)
          .then(() => {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(users),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));

            setError("");
            form.reset();
            toast.success("Registration Successfull");
          })
          .catch((error) => {
            console.error(error);
          });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <section className="py-5 my-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-11">
            <div className="reg-box">
              <Form
                onSubmit={handelRegistration}
                className="p-sm-5 p-4 py-5   shadow-lg rounded-3"
              >
                <h3 className="text-center mb-4">Registration</h3>

                {error && (
                  <Form.Text className="text-danger mb-2">{error}</Form.Text>
                )}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>User Nmae</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </Form.Group>

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
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>User Role</Form.Label>
                  <Form.Select
                    name="role"
                    required
                    aria-label="Default select example"
                  >
                    <option value="User">User</option>
                    <option value="Seller">Seller</option>
                  </Form.Select>
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
                  Registration
                </Button>

                <p className="text-center mb-0">
                  Already have an account? please{" "}
                  <Link to="/login" className="text-decoration-none">
                    Log in
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
