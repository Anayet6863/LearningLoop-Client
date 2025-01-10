import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleServiceShow from "../SinglePage/SingleServiceShow";
import Lottie from "lottie-react";
import lottieData from "../../../src/assets/Animation - 1735147985407.json";
import { GrSort } from "react-icons/gr";
import sortImg from '../../assets/Animation - 1736490214944.json';

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
  //  Sort function
  const sortServices = (criteria) => {
    console.log(criteria);
    const sortedServices = [...filterService].sort((a, b) => {
      if (criteria === "ascending") {
        return a.serviceName.localeCompare(b.serviceName); // Sort by name in ascending order
      } else if (criteria === "descending") {
        return b.serviceName.localeCompare(a.serviceName); // Sort by name in descending order
      } else if (criteria === "priceLowToHigh") {
        return a.servicePrice - b.servicePrice; // Sort by price in ascending order
      } else if (criteria === "priceHighToLow") {
        return b.servicePrice - a.servicePrice; // Sort by price in descending order
      }
      return 0;
    });

    setFilterService(sortedServices); // Update the state with the sorted array
  };
  const handleSortChange = (e) => {
    sortServices(e.target.value);
  };
  const [showSortOptions, setShowSortOptions] = useState(false);
  
  return (
    <div className="bg-gray-300 min-h-screen">
     <div className="flex flex-col md:flex-row justify-center mt-5 mb-5 p-10 items-center container mx-auto">
     <div className="flex items-center">
     <input
          type="text"
          placeholder="Search here..."
          className="w-96 rounded-full h-12 border border-gray-300 pl-5 pr-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-200 ease-in-out hover:shadow-lg bg-gray-50 text-gray-700"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="flex items-center w-20 h-20 rounded-full -ml-24 ">
          <Lottie animationData={lottieData}></Lottie>
        </div>
     </div>
     
      <div className="flex gap-4 items-center ml-auto">
      <div
        className="cursor-pointer bg-gray-100 rounded-full p-2"
        onClick={() => setShowSortOptions(!showSortOptions)}
      >
        <Lottie animationData={sortImg} className="h-12 w-12" />
      </div>

      {showSortOptions && (
        <select
          id="sortOptions"
          className="btn h-12 w-32"
          onChange={handleSortChange}
        >
          <option value="ascending">Sort A-Z</option>
          <option value="descending">Sort Z-A</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      )}
    </div>
      </div>

      <div className="flex flex-col gap-5 pb-16">
      {filterService.map((item) => (
        <SingleServiceShow key={item._id} item={item}></SingleServiceShow>
      ))}
      </div>
    </div>
  );
};

export default Services;
