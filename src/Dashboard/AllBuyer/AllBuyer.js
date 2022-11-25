import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const AllBuyer = () => {
  const { user } = useContext(AuthContext);
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allbuyers");
      const data = await res.json();
      return data;
    },
  });

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
            refetch();
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
