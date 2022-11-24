import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddProduct = () => {
  const handelAddProduct = (event) => {
    event.reventDefault();
    const form = event.target;
  };

  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">Add Your Product</h1>
      <div className="row  justify-content-center">
        <div className="col-lg-8 ">
          <div className="reg-box">
            <Form
              onSubmit={handelAddProduct}
              className="p-sm-5 p-4 py-5   shadow-lg rounded-3"
            >
              <h3 className="text-center mb-4">Add Product</h3>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Product Nmae</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Orginal Price</Form.Label>
                <Form.Control
                  type="text"
                  name="orginalPrice"
                  placeholder="Orginal Price"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resell Price</Form.Label>
                <Form.Control
                  type="text"
                  name="resellPrice"
                  placeholder="Resell Price"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Location"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Year Of Purchase</Form.Label>
                <Form.Control
                  type="text"
                  name="yearUse"
                  placeholder="Year Of Use"
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
                <Form.Label>Product Condition</Form.Label>
                <Form.Select
                  name="condation"
                  required
                  aria-label="Default select example"
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Product Category</Form.Label>
                <Form.Select
                  name="category"
                  required
                  aria-label="Default select example"
                >
                  <option value="Samsung">Samsung</option>
                  <option value="Oppo">Oppo</option>
                  <option value="Fair">Fair</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Add description</Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  name="details"
                  placeholder="Add description"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Button
                variant="primary"
                className="bg-dark border-dark w-100 py-2 mb-3"
                type="submit"
              >
                Add Product
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
