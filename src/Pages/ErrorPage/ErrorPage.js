import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-box">
              <img
                src="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg"
                alt="error"
                className="img-fluid"
              />
              <Link to="/">
                <button className="btn btn-dark mt-3">404 Back To Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
