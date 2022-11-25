import React from "react";
import AdvertiseProduct from "./AdvertiseProduct";
import Banner from "./Banner";
import Categories from "./Categories";
import Extra from "./Extra";

const Home = () => {
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
