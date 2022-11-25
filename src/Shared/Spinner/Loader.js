import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="spinner-box">
              <Spinner animation="border" className="text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
