import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleServiceShow from "../SinglePage/SingleServiceShow";
import Lottie from "lottie-react";
import lottieData from '../../../src/assets/Animation - 1735147985407.json'

const Services = () => {
  const [allData, setAllData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterService, setFilterService] = useState([]);
  useEffect(() => {
      document.title = "LearningLoop | All Services";
    }, []);

  useEffect(() => {
    axios
      .get("https://learning-loop-server.vercel.app/allServices")
      .then((response) => {
        setAllData(response.data);
        setFilterService(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = allData.filter((item) =>
      item.serviceName.toLowerCase().includes(value)
    );
    setFilterService(filtered);
  };

  return (
    <div className="bg-gray-300">
      <div className="flex justify-center mt-5 mb-5 p-10">
        <input
          type="text"
          placeholder="Search here..."
          className="w-96 rounded-full h-12 border border-gray-300 pl-5 pr-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-200 ease-in-out hover:shadow-lg bg-gray-50 text-gray-700"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="w-20 h-20 rounded-full -ml-24" >
          <Lottie animationData={lottieData}></Lottie>
        </div>
      </div>

      {filterService.map((item) => (
        <SingleServiceShow key={item._id} item={item}></SingleServiceShow>
      ))}
    </div>
  );
};

export default Services;
