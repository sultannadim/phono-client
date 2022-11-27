import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import verified from "../../images/verified.png";
import useTitle from "../../Hooks/useTitle";

const AllSellers = () => {
  useTitle("All Sellers");
  const { user } = useContext(AuthContext);

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch(
        "https://phono-server-flame.vercel.app/allsellers"
      );
      const data = await res.json();
      return data;
    },
  });

  const handelVerified = (seller) => {
    fetch(`https://phono-server-flame.vercel.app/allsellers/${seller?._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Seller Verified Successfully");
          refetch();
        }
      });
  };
  const handelDelete = (seller) => {
    const agree = window.confirm(
      `Are you sure? you want to delet ${seller?.name}`
    );
    if (agree) {
      fetch(`https://phono-server-flame.vercel.app/allsellers/${seller?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Your Seller deleted");
            refetch();
          }
        });
    }
  };
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
                  <img src={seller?.photoURL} alt="profile" />
                </td>
                <td>
                  {seller?.name}
                  {seller?.status === "Verified" && (
                    <img
                      className="verified ms-2"
                      src={verified}
                      alt="profile"
                    />
                  )}
                </td>
                <td>{seller?.email}</td>
                <td>{seller?.role}</td>
                <td>
                  <button className="btn btn-sm btn-primary advertise mb-lg-0 mb-2">
                    {seller?.status}
                  </button>
                </td>

                <td>
                  {seller?.status !== "Verified" && (
                    <button
                      onClick={() => handelVerified(seller)}
                      className="btn btn-sm btn-danger mb-lg-0 mb-2 ms-lg-2"
                    >
                      Verify User
                    </button>
                  )}
                  <button
                    onClick={() => handelDelete(seller)}
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

export default AllSellers;
