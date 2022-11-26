import React, { useEffect, useState } from "react";

import AdvertiseCard from "./AdvertiseCard";

const AdvertiseProduct = () => {
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
                  <AdvertiseCard product={product}></AdvertiseCard>
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
