import React from "react";

const Admin = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="private-box">
              <h1 className="mb-sm-4 mb-3 text-danger">
                You Can Not Access Admin Route
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
