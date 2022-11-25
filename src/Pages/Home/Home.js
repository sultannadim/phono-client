import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Loader from "../../Shared/Spinner/Loader";
import AdvertiseProduct from "./AdvertiseProduct";
import Banner from "./Banner";
import Categories from "./Categories";
import Extra from "./Extra";

const Home = () => {
  const { loader } = useContext(AuthContext);
  if (loader) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Banner></Banner>
      <AdvertiseProduct></AdvertiseProduct>

      <Categories></Categories>
      <Extra></Extra>
    </div>
  );
};

export default Home;
