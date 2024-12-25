import React from "react";
import Banner from "./Banner";
import Popular from "./Popular";
import Tuitor from "./Tuitor";
import Testimonials from "./Testemonials";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
     <div className="bg-gradient-to-b from-purple-300 via-purple-50 to-indigo-100 pt-5 pb-10">
     <motion.div
        className="container mx-auto mt-20 "
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Banner></Banner>
      </motion.div>
     </div>
      <div>
        <Popular></Popular>
      </div>
      <div>
        <Tuitor></Tuitor>
      </div>
      <motion.div
        className="bg-gradient-to-r from-blue-100 to-green-100 py-10"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Testimonials></Testimonials>
      </motion.div>
    </div>
  );
};

export default Home;
