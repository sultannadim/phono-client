import React from "react";
import Table from "react-bootstrap/Table";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

const ReportedProduct = () => {
  useTitle("Reported Items");
  const { data: reports = [], refetch } = useQuery({
    queryKey: ["reported"],
    queryFn: async () => {
      const res = await fetch("https://phono-server-flame.vercel.app/reported");
      const data = await res.json();
      return data;
    },
  });

  const handelDelete = (report) => {
    const agree = window.confirm(
      `Are you sure? you want to delet ${report?.name}`
    );
    if (agree) {
      fetch(`https://phono-server-flame.vercel.app/product/${report?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Reported Product deleted");
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-capitalize mb-sm-5 mb-3">
        All <span className="text-danger">Reported</span> Products
      </h1>
      <div className="table-box">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SN</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Status</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((report, index) => (
              <tr key={report?._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={report?.photoURL} alt="profile" />
                </td>
                <td>{report?.productName}</td>
                <td>{report?.reportStatus}</td>

                <td>
                  <button
                    onClick={() => handelDelete(report)}
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

export default ReportedProduct;
