import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Table from "react-bootstrap/Table";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

const MyProducts = () => {
  useTitle("My Products");
  const { user } = useContext(AuthContext);

  const email = user?.email;
  const { data: products = [], refetch } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(
        `https://phono-server-flame.vercel.app/product?email=${email}`
      );
      const data = await res.json();
      return data;
    },
  });
  const handelDelete = (product) => {
    const agree = window.confirm(
      `Are you sure? you want to delet ${product?.productName}`
    );
    if (agree) {
      fetch(`https://phono-server-flame.vercel.app/product/${product?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Your Product deleted");
            refetch();
          }
        });
    }
  };
  const handelAdvertise = (id) => {
    fetch(`https://phono-server-flame.vercel.app/product/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Advertise Added");
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">
        <span className="text-danger">{user?.displayName}</span> All Products
      </h1>
      <div className="table-box">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SN</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product?._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={product?.photoURL} alt="" />
                </td>
                <td>{product?.productName}</td>
                <td>{product?.resellPrice} Tk</td>
                <td>{product?.status}</td>
                <td>
                  {product?.status === "Unsold" && (
                    <>
                      {product?.advertise === "Advertise" ? (
                        <button
                          onClick={() => handelAdvertise(product?._id)}
                          className="btn btn-sm btn-primary advertise mb-lg-0 mb-2"
                        >
                          {product?.advertise}
                        </button>
                      ) : (
                        <button className="btn btn-sm btn-primary advertise mb-lg-0 mb-2">
                          {product?.advertise}
                        </button>
                      )}
                    </>
                  )}

                  <button
                    onClick={() => handelDelete(product)}
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

export default MyProducts;
