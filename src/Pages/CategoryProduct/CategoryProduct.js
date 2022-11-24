import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../context/AuthProvider";

const CategoryProduct = () => {
  const categories = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <section className="py-5 my-sm-5">
      <div className="container">
        <div className="col-lg-12">
          <h1 className="mb-sm-4 mb-3">Second-hand products for resell</h1>
        </div>
        <div className="row">
          {categories.map((category) => {
            return (
              <>
                <div className="col-lg-6" key={category?._id}>
                  <Card className="category-card mb-sm-4 mb-3">
                    <Card.Img variant="top" src={category?.photoURL} />
                    <Card.Body>
                      <Card.Title>{category?.productName}</Card.Title>
                      <p className="mb-2">
                        <b>Category : {category?.category}</b>
                      </p>
                      <p className="mb-2">
                        <b>Seller : {category?.sellerName}</b>
                      </p>
                      <p className="mb-2">Location : {category?.location}</p>
                      <p className="mb-2">
                        <span>
                          Orginal Price : BDT-{category?.orginalPrice}
                        </span>
                        <span className="ms-3">
                          Resell Price : BDT-{category?.resellPrice}
                        </span>
                      </p>
                      <p className="mb-2">
                        Purchase Year : {category?.yearPurchase}
                      </p>
                      <p className="mb-4">Post Date : {category?.date}</p>

                      {user?.displayName === category?.sellerName ? (
                        <p>
                          <b>This is Your Post</b>
                        </p>
                      ) : (
                        <Button
                          variant="primary"
                          className="bg-dark border-dark"
                        >
                          Book Now
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryProduct;
