import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useTitle from "../../Hooks/useTitle";

const MyOrders = () => {
  useTitle("My Orders");
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigation = useNavigate();
  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${email}`, {
      headers: {
        autorization: `Bearear ${localStorage.getItem("phono-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("phono-token");
          toast.error(`something wrong. error ${res.status}`);
          navigation("/");
          return logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [email, logOut, navigation]);

  const handelDelete = (order) => {
    const agree = window.confirm(
      `Are you sure? you want to delet ${order?.productName}`
    );
    if (agree) {
      fetch(`http://localhost:5000/orders/${order?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Order deleted");
            const newOrders = orders.filter(
              (myOrder) => myOrder?._id !== order?._id
            );
            setOrders(newOrders);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">
        <span className="text-danger">{user?.displayName}</span> All Orders
      </h1>
      <div className="table-box">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SN</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order?._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={order?.photoURL} alt="profile" />
                </td>
                <td>{order?.productName}</td>
                <td>{order?.price} TK.</td>

                <td>
                  {order?.paymentStatus === "Pay" ? (
                    <Link to={`/dashboard/checkout/${order?._id}`}>
                      <button className="btn btn-sm btn-danger ms-lg-2">
                        Pay Now
                      </button>
                    </Link>
                  ) : (
                    <button className="btn btn-sm btn-primary ms-lg-2">
                      Paid
                    </button>
                  )}

                  <button
                    onClick={() => handelDelete(order)}
                    className="btn btn-sm btn-danger ms-lg-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;
