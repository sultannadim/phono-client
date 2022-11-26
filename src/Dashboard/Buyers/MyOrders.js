import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Table from "react-bootstrap/Table";

import toast from "react-hot-toast";
import axios from "axios";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios.get(`http://localhost:5000/orders?email=${email}`).then((res) => {
      setOrders(res.data);
    });
  }, [email]);

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
                  <button className="btn btn-sm btn-primary ms-lg-2">
                    Pay Now
                  </button>
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
