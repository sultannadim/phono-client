import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allsellers")
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);
  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">
        <span className="text-danger">{user?.displayName}</span> All Sellers
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
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, index) => (
              <tr key={seller?._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={seller?.photoURL} alt="" />
                </td>
                <td>{seller?.name}</td>
                <td>{seller?.email}</td>
                <td>{seller?.role}</td>
                <td>
                  <button className="btn btn-sm btn-primary advertise mb-lg-0 mb-2">
                    {seller?.status}
                  </button>
                </td>

                <td>
                  {seller?.status !== "verified" && (
                    <button className="btn btn-sm btn-danger ms-lg-2">
                      Verify User
                    </button>
                  )}
                  <button className="btn btn-sm btn-danger ms-lg-2">
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

export default AllSellers;
