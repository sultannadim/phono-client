import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckOut = ({ order }) => {
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [tranId, setTranId] = useState("");
  const [porcessing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // ======================
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://phono-server-flame.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authrization: `Bearear ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ price: order.price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [order.price]);
  // =======================
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setPaymentError(error);
    } else {
      setPaymentError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: order.name,
            email: order.email,
          },
        },
      });
    if (confirmError) {
      setPaymentError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price: order.price,
        bookinID: order._id,
        email: order.email,
        productId: order.productId,
        trangactionId: paymentIntent.id,
      };

      fetch("https://phono-server-flame.vercel.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setSuccess("Congrats! Your payment successfull");
            setTranId(paymentIntent.id);
            toast.success("Payment successfull");
          }
        });
    }
    setProcessing(false);
    console.log(paymentIntent);
  };
  // =========================
  return (
    <div>
      <div className="mb-3">
        <p className="text-success">{success}</p>
        {tranId && <p>Your trangaction Id : {tranId}</p>}
      </div>
      <form
        className="w-50 pay-form p-4 border-2 bg-dark rounded-2"
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-danger mt-3 mb-0">{paymentError.message}</p>
        <button
          className="btn  btn-primary mt-4"
          type="submit"
          disabled={!stripe || porcessing || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
