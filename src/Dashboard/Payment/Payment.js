import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useTitle from "../../Hooks/useTitle";

const Payment = () => {
  useTitle("Chect Out");
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
  const { user } = useContext(AuthContext);
  const order = useLoaderData();

  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">
        <span className="text-danger">{user?.displayName}</span> Check Out Page.
      </h1>
      <div className="d-sm-flex align-items-sm-center mb-sm-5 mb-3">
        <img
          src={order?.photoURL}
          className="pay-img me-3 mb-sm-0 mb-3"
          alt="product"
        />
        <div>
          <h5>Product Name : {order?.productName}</h5>
          <p className="m-0">
            <b>Payment Amount : {order?.price}TK.</b>
          </p>
        </div>
      </div>
      <div className="pt-2">
        <Elements stripe={stripePromise}>
          <CheckOut order={order}></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
