import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import { useNavigate } from "react-router-dom";

const AllBuyer = () => {
  useTitle("All Buyers");
  const [buyers, setBuyers] = useState([]);
  const navigation = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/allbuyers", {
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
      .then((data) => setBuyers(data));
  }, [logOut, navigation]);

  const handelDelete = (buyer) => {
    const agree = window.confirm(
      `Are you sure? you want to delet ${buyer?.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/allbuyers/${buyer?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Your Buyer deleted");
            const newBuyers = buyers.filter(
              (nBuyer) => nBuyer?._id !== buyer?._id
            );
            setBuyers(newBuyers);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">
        <span className="text-danger">{user?.displayName}</span> All Buyers
      </h1>
      <div className="table-box">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SN</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((buyer, index) => (
              <tr key={buyer?._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={buyer?.photoURL} alt="profile" />
                </td>
                <td>{buyer?.name}</td>
                <td>{buyer?.email}</td>
                <td>{buyer?.role}</td>

                <td>
                  <button
                    onClick={() => handelDelete(buyer)}
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

export default AllBuyer;
