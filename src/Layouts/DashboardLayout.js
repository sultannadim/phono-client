import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Dashboard/SideNav/SideNav";

const DashboardLayout = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 g-lg-0 ">
            <SideNav></SideNav>
          </div>
          <div className="col-lg-9 col-md-8">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
