import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../context/AuthProvider";

const AdvertiseProduct = () => {
  const { user } = useContext(AuthContext);
  const [adProducts, sedAddProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/advertise")
      .then((res) => res.json())
      .then((data) => sedAddProducts(data));
  }, []);

  if (adProducts?.length) {
    return (
      <section className="pt-5 my-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="mb-sm-4 mb-3">All Advertise Product</h1>
            </div>

            {adProducts.map((product) => {
              return (
                <>
                  {product?.status === "Unsold" && (
                    <div className="col-lg-6" key={product?._id}>
                      <Card className="category-card mb-sm-4 mb-3">
                        <Card.Img variant="top" src={product?.photoURL} />
                        <Card.Body>
                          <Card.Title>{product?.productName}</Card.Title>
                          <p className="mb-2">
                            <b>Category : {product?.category}</b>
                          </p>
                          <p className="mb-2">
                            <b>Seller : {product?.sellerName}</b>
                          </p>
                          <p className="mb-2">Location : {product?.location}</p>
                          <p className="mb-2">
                            <span>
                              Orginal Price : BDT-{product?.orginalPrice}
                            </span>
                            <span className="ms-3">
                              Resell Price : BDT-{product?.resellPrice}
                            </span>
                          </p>
                          <p className="mb-2">
                            Purchase Year : {product?.yearPurchase}
                          </p>
                          <p className="mb-4">Post Date : {product?.date}</p>

                          {user?.displayName === product?.sellerName ? (
                            <p>
                              <b>This is Your Product</b>
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
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default AdvertiseProduct;