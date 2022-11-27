import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import verified from "../../images/verified.png";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import Modal from "react-bootstrap/Modal";

const AdvertiseCard = ({ product }) => {
  const { user } = useContext(AuthContext);

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (category) => setShow(true);

  const handelBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = product?.photoURL;
    const productName = product?.productName;
    const productId = product?._id;
    const name = user?.displayName;
    const email = user?.email;
    const price = product?.resellPrice;
    const phone = product?.phone;
    const location = product?.location;
    const sellerEmail = product?.sellerEmail;
    const paymentStatus = "Pay";

    const orders = {
      productName,
      photoURL,
      productId,
      name,
      email,
      price,
      phone,
      location,
      sellerEmail,
      paymentStatus,
    };
    fetch("https://phono-server-flame.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          setShow(false);
          toast.success("Booking Complete");
        }
      });
  };
  return (
    <>
      {product?.status === "Unsold" && (
        <div className="col-lg-6">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{product?.productName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handelBooking}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    name="name"
                    defaultValue={user?.displayName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    disabled
                    defaultValue={user?.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    name="price"
                    defaultValue={product?.resellPrice}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    defaultValue={product?.phone}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    defaultValue={product?.location}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="bg-dark border-dark w-100"
                >
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Card className="category-card mb-sm-4 mb-3">
            <Card.Img variant="top" src={product?.photoURL} />
            <Card.Body>
              <Card.Title>{product?.productName}</Card.Title>
              <p className="mb-2">
                <b>Category : {product?.category}</b>
              </p>
              <p className="mb-2">
                <b>Seller : {product?.sellerName}</b>
                {product?.sellerStatus === "Verified" && (
                  <img className="verified ms-2" src={verified} alt="profile" />
                )}
              </p>
              <p className="mb-2">Location : {product?.location}</p>
              <p className="mb-2">
                <span>Orginal Price : BDT-{product?.orginalPrice}</span>
                <span className="ms-3">
                  Resell Price : BDT-{product?.resellPrice}
                </span>
              </p>
              <p className="mb-2">Purchase Year : {product?.yearPurchase}</p>
              <p className="mb-4">Post Date : {product?.date}</p>

              {user ? (
                <>
                  {user?.displayName === product?.sellerName ? (
                    <p>
                      <b>This is Your Product</b>
                    </p>
                  ) : (
                    <Button
                      onClick={() => handleShow(product)}
                      variant="primary"
                      className="bg-dark border-dark"
                    >
                      Book Now
                    </Button>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <button className="btn btn-dark border-dark">
                    Please Login To Buy
                  </button>
                </Link>
              )}
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default AdvertiseCard;
