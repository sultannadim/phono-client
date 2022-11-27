import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

import AdvertiseCard from "./AdvertiseCard";

const AdvertiseProduct = () => {
  const [adProducts, sedAddProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://phono-server-flame.vercel.app/advertise", {
      headers: {
        autorization: `Bearear ${localStorage.getItem("phono-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        sedAddProducts(data);
      });
  }, []);

  if (adProducts?.length && user) {
    return (
      <section className="pt-5 my-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="mb-sm-4 mb-3">All Advertise Product</h1>
            </div>

            {adProducts.map((product) => {
              return (
                <AdvertiseCard
                  key={product?._id}
                  product={product}
                ></AdvertiseCard>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default AdvertiseProduct;
