import React, { useContext, useState } from "react";
import verified from "../../images/verified.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../context/AuthProvider";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";

const CategoryCard = ({ category }) => {
  const { user } = useContext(AuthContext);

  // modal
  const [show, setShow] = useState(false);
  const [report, setReport] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (category) => setShow(true);

  const handelBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = category?.photoURL;
    const productName = category?.productName;
    const productId = category?._id;
    const name = user?.displayName;
    const email = user?.email;
    const price = category?.resellPrice;
    const phone = category?.phone;
    const location = category?.location;
    const sellerEmail = category?.sellerEmail;
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
    fetch("http://localhost:5000/orders", {
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

  const handelReport = (id) => {
    const reportStatus = "Reported";
    const reportedProductId = id;
    const report = { reportStatus, reportedProductId };
    fetch("http://localhost:5000/reports", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your report submited to admin");
          setReport(true);
        }
      });
  };

  return (
    <>
      {category?.status === "Unsold" && (
        <div className="col-lg-6" key={category?._id}>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{category?.productName}</Modal.Title>
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
                    defaultValue={category?.resellPrice}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    defaultValue={category?.phone}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    defaultValue={category?.location}
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
            <Card.Img variant="top" src={category?.photoURL} />
            <Card.Body>
              <Card.Title>{category?.productName}</Card.Title>
              <p className="mb-2">
                <b>Category : {category?.category}</b>
              </p>
              <p className="mb-2">
                <b>Seller : {category?.sellerName}</b>
                {category?.sellerStatus === "Verified" && (
                  <img className="verified ms-2" src={verified} alt="profile" />
                )}
              </p>
              <p className="mb-2">Location : {category?.location}</p>
              <p className="mb-2">
                <span>Orginal Price : BDT-{category?.orginalPrice}</span>
                <span className="ms-3">
                  Resell Price : BDT-{category?.resellPrice}
                </span>
              </p>
              <p className="mb-2">Purchase Year : {category?.yearPurchase}</p>
              <p className="mb-4">Post Date : {category?.date}</p>

              <div className="d-flex justify-content-between">
                {user?.displayName === category?.sellerName ? (
                  <p>
                    <b>This is Your Product</b>
                  </p>
                ) : (
                  <Button
                    onClick={() => handleShow(category)}
                    variant="primary"
                    className="bg-dark border-dark"
                  >
                    Book Now
                  </Button>
                )}
                {user?.displayName === category?.sellerName ? (
                  ""
                ) : (
                  <Button
                    onClick={() => handelReport(category?._id)}
                    variant="primary"
                    className="btn-sm py-0"
                    disabled={category?.reportStatus || report}
                  >
                    {category?.reportStatus || report
                      ? "Reported"
                      : "Report Product"}
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
