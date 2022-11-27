import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

import CategoryCard from "./CategoryCard";

const CategoryProduct = () => {
  useTitle("Category Products");
  const categories = useLoaderData();

  return (
    <section className="py-5 my-sm-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mb-sm-4 mb-3">Second-hand products for resell</h1>
          </div>

          {categories.map((category) => {
            return (
              <CategoryCard
                key={category?._id}
                category={category}
              ></CategoryCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryProduct;
