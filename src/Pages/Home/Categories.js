import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <section className="pt-5 pb-lg-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mb-sm-4 mb-3">All Categories For Resell</h1>
          </div>
          {categories?.map((category) => (
            <div className="col-lg-4 col-md-6" key={category?._id}>
              <Card className="mb-lg-0 mb-sm-4 mb-3">
                <Card.Img
                  className="cat-img"
                  variant="top"
                  src={category?.img}
                />
                <Card.Body>
                  <Card.Title>{category?.categoryName}</Card.Title>
                  <Card.Text>{category?.title}</Card.Text>
                  <Link to={`/category/${category?.categoryId}`}>
                    <Button variant="primary" className="bg-dark border-dark">
                      View All
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
