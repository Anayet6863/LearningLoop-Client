import React from "react";
import Banner from "./Banner";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
        <div className="container mx-auto mt-20">
        <Banner></Banner>
        </div>
        <Popular></Popular>
    </div>
  );
};

export default Home;
