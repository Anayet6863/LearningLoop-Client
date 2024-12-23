import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleServiceShow from "../SinglePage/SingleServiceShow";

const Services = () => {
  const [allData, setAllData] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filterService, setFilterService] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:5000/allServices")
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
    <div className="bg-gray-500">
      <div className="flex justify-center mt-5 mb-5">
        <input
          type="text"
          placeholder="Search here"
          className="w-96 rounded-lg h-12 border border-black pl-3 focus:border-blue-600"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filterService.map((item) => (
        <SingleServiceShow key={item._id} item={item}></SingleServiceShow>
      ))}
    </div>
  );
};

export default Services;
