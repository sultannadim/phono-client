import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Table from "react-bootstrap/Table";
import { useQuery } from "@tanstack/react-query";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const sellerName = user?.displayName;
  const { data: products = [] } = useQuery({
    queryKey: ["sellerName"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/product/${sellerName}`);
      const data = await res.json();
      return data;
    },
  });
  console.log(products);
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
              <th>title</th>
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
                <td>@mdo</td>
                <td>
                  <button className="btn btn-sm btn-primary mb-lg-0 mb-2">
                    Advertise
                  </button>
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

export default MyProducts;
